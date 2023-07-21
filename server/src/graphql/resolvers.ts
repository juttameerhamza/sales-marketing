import { SalesData } from "../models/salesDataModel";

const resolvers = {
    Query: {
        sales: async () => {
            return await SalesData.find()
        },
    },
};

export default resolvers;