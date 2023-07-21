import mongoose from 'mongoose';

interface ISalesData extends mongoose.Document {
    product: string
    salesRevenue: number
    region: string
    category: string
}

interface ICategory extends mongoose.Document {
    color: string
    name: string
}

const CategorySchema = new mongoose.Schema({
    color: String,
    name: String,
    salesTarget: Number
})

const SalesDataSchema = new mongoose.Schema({
    product: String,
    salesRevenue: Number,
    region: String,
    category: CategorySchema
});

// Create a model using the schema
const SalesData = mongoose.model<ISalesData>('SalesData', SalesDataSchema);
// const Category = mongoose.model<ICategory>('Category', CategorySchema);

export { SalesData, ISalesData };