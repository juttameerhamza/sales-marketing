import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { faker } from '@faker-js/faker';
import { SalesData } from '../models/salesDataModel';

// dotenv.config();

type CategoryType = {
    [key: number]: {
        name: string,
        color: string,
        salesTarget: number
    }
}

function generateSalesData() {
    const salesData = [];
    const categories: CategoryType = {};

    for (let i = 0; i < 6; i++) {
        categories[i + 1] = {
            name: faker.commerce.department(),
            color: faker.color.rgb(),
            salesTarget: faker.number.int({ min: 50 * 6, max: 500 * 6 })
        }
    }

    for (let i = 0; i < 100; i++) {
        salesData.push({
            product: faker.commerce.productName(),
            salesRevenue: faker.number.int({ min: 50, max: 500 }),
            region: faker.location.country(),
            category: categories[Math.floor(Math.random() * (Object.keys(categories).length - 1 + 1) + 1)]
        });
    }

    return salesData;
}

// Insert the data into MongoDB
mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(async (res) => {
        console.log(`🚀 Connected to Mongo at ${process.env.MONGO_URI}`);

        const totalData = await SalesData.count();

        if (totalData === 0) {
            return SalesData.insertMany(generateSalesData())
        }
    })
    .then(() => {
        console.log('Data inserted successfully.');
        mongoose.connection.close(); // Close the connection after insertion
        process.exit(0);
    })
    .catch(err => {
        console.error('Data insertion failed: ', err);
        process.exit(1);
    });
