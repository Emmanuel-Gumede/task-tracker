export const initialState = {
  user: "",
  isLoggedIn: false,
  tasks: [],
  oneTask: "",
  showTaskForm: false,
  showOneTask: false,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGGED_IN":
      return {
        ...state,
        user: payload,
        isLoggedIn: payload.accessToken === undefined ? false : true,
      };

    case "LOGGED_OUT":
      return {
        ...state,
        user: "",
        isLoggedIn: false,
      };

    case "SHOW_TASK_FORM":
      return {
        ...state,
        showTaskForm: payload,
      };

    case "ADD_NEW_TASK":
      return {
        ...state,
        tasks: [payload, ...state.tasks],
      };

    case "LOAD_TASKS":
      return {
        ...state,
        tasks: payload,
      };

    case "SHOW_ONE_TASK":
      return {
        ...state,
        oneTask: payload.task,
        showOneTask: payload.modal,
      };

    default:
      return state;
  }
};

export default userReducer;
