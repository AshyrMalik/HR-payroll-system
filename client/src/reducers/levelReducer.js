import {
  VIEW_LEVELS,
  LEVELS_LOADING,
  ADD_LEVEL,
  DELETE_LEVEL
} from "../actions/types";

const initialState = {
  levels: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VIEW_LEVELS:
      return {
        ...state,
        levels: action.payload,
        loading: false
      };

    case ADD_LEVEL:
      return {
        ...state,
        levels: action.payload,
        loading: false
      };
    case DELETE_LEVEL:
      return {
        ...state,
        levels: action.payload,
        loading: false
      };

    case LEVELS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
