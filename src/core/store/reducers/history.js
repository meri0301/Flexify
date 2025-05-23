const initialState = {
    history: [],
};

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'history':
            return {
                ...state,
                history: action.data
            };
        default:
            return state;
    }
};

export default historyReducer;