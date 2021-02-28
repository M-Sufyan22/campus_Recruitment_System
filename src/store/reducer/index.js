const initial_state = {
    currentUser: {}
};

const store = (state = initial_state, action) => {
    switch (action.type) {
        case "saveCurrentUser":
            return ({
                currentUser: action.payload
            })
        default:
            return (state)
    };
};

export default store;