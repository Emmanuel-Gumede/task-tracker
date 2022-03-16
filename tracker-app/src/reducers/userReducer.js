export const initialState = {
  userName: "",
  isLoggedIn: false,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGGED_IN":
      console.log("LOGGED_IN", payload);
      return {
        ...state,
        userName: payload.userName,
        isLoggedIn: payload.isLoggedIn,
      };

    case "LOGGED_OUT":
      console.log("LOGGED_OUT", payload);
      return {
        ...state,
        isLoggedIn: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
