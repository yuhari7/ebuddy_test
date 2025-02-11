import { User } from "../interfaces/user";

export const setUser = (user: User) => ({
  type: "SET_USER",
  payload: user,
});

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

interface Action {
  type: string;
  payload: User;
}

const userReducer = (state = initialState, action: Action): UserState => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
