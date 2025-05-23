const initialState = {
    users: {},
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'save_user':
            return {
                ...state,
                users: action.data
            }

        default:
            return state;
    }
};

export default usersReducer;
