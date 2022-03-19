export const initialState = {
  userName: "",
  isLoggedIn: false,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGGED_IN":
      console.log(payload.token);
      return {
        ...state,
        username: payload.username,
        isLoggedIn: payload.token === undefined ? false : true,
      };

    case "LOGGED_OUT":
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default userReducer;
