const initialState = {
    tokenState: null,
};

const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'token_state':
            return {
                ...state,
                tokenState: action.data
            };
        default:
            return state;
    }
};

export default tokenReducer;