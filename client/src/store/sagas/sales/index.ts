import { put, takeEvery } from 'redux-saga/effects';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// interface SalesData {
//     product: string;
//     salesRevenue: number;
// }

function* fetchSalesDataSaga() {
    const client = new ApolloClient({
        uri: 'http://localhost:8000/graphql',
        cache: new InMemoryCache()
    });

    const { data } = yield client.query({
        query: gql`
            {
                sales {
                    product
                    salesRevenue
                    category {
                        name
                        color
                        salesTarget
                    }
                }
            }
        `
    });

    yield put({ type: 'FETCH_SALES_DATA_SUCCESS', payload: data.sales });
}

function* salesSaga() {
    yield takeEvery('FETCH_SALES_DATA_REQUEST', fetchSalesDataSaga);
}

export default salesSaga;