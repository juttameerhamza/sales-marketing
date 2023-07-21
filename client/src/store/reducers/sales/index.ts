interface Action {
    type: string;
    payload: any;
}

const initialState: any[] = [];

const salesReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'FETCH_SALES_DATA_SUCCESS':
            return action.payload;
        default:
            return state;
    }
};

export default salesReducer;