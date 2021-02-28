const saveCurrentUser = (data) => {
    console.log(user, "action methods runs...");
    return (dispatch) => {
        dispatch({ type: "saveCurrentUser", payload: data })
    }
};

export { saveCurrentUser }