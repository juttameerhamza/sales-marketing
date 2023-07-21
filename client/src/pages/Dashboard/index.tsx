import { Card, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import { Bar, Pie } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSalesData } from 'store/actions/sales';

interface SalesData {
    product: string;
    salesRevenue: number;
    category: {
        color: string
        name: string
        salesTarget: number
    }
}

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const dispatch = useDispatch();
    const salesData: SalesData[] = useSelector((state: any) => state.sales);

    const RevenueData = {
        labels: salesData.map(item => item.product),
        datasets: [
            {
                label: 'Sales Figures',
                data: salesData.map(item => item.salesRevenue),
            },
        ],
    };

    const categories = Array
        .from(
            new Map(salesData.map(sld => [sld['category']['name'], sld])).values()
        )
        .map(sld => sld.category)


    const categoryData = {
        labels: categories.map(ct => ct.name),
        datasets: [
            {
                label: '# of Sales',
                data: categories
                    .map(ct => salesData
                        .filter(sld => sld.category.name === ct.name)
                        .reduce((acc, item) => acc + item.salesRevenue, 0)
                    ),
                backgroundColor: categories.map(ct => ct.color)
            },
        ],
    };

    const topSales = [...salesData]
        .sort((a, b) => (a.salesRevenue > b.salesRevenue) ? 1 : -1)
        .reverse()
        .slice(0, 10);

    const topSalesData = {
        labels: topSales.map(sld => sld.product),
        datasets: [
            {
                label: 'Revenue',
                data: topSales.map(sld => sld.salesRevenue),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    const targetSalesData = {
        labels: categories.map(ct => ct.name),
        datasets: [
            {
                label: 'Revenue',
                data: categories
                    .map(ct => salesData
                        .filter(sld => sld.category.name === ct.name)
                        .reduce((acc, item) => acc + item.salesRevenue, 0)
                    ),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Target',
                data: categories
                    .map(ct => ct.salesTarget),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ],
    }

    useEffect(() => {
        dispatch(fetchSalesData());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <Grid container>
                <Grid item md={12}>
                    <Card style={{ padding: 20 }}>
                        <Typography variant="h6">Sales Revenue</Typography>
                        <Bar data={RevenueData} />
                    </Card>
                </Grid>
            </Grid>

            <Grid container marginTop={2}>
                <Grid item md={12}>
                    <Card style={{ padding: 20 }}>
                        <Typography variant="h6">Top Selling Products</Typography>
                        <Bar
                            data={topSalesData}
                            options={{
                                indexAxis: 'y' as const
                            }}
                        />
                    </Card>
                </Grid>
            </Grid>

            <Grid container marginTop={2}>
                <Grid item md={12}>
                    <Card style={{ padding: 20 }}>
                        <Typography variant="h6">Sales Target</Typography>

                        <Bar
                            data={targetSalesData}
                            options={{
                                indexAxis: 'y' as const
                            }}
                        />
                    </Card>
                </Grid>
            </Grid>

            <Grid container marginTop={2}>
                <Grid item md={12}>
                    <Card style={{ padding: 20 }}>
                        <Typography variant="h6">Sales by Categories</Typography>

                        <Pie data={categoryData} />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dashboard;