const initialState = {
    reminders: [],
};

const reminderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'reminders':
            return {
                ...state,
                reminders: action.data
            };
        default:
            return state;
    }
};

export default reminderReducer;