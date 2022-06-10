const initialState = {
  list: [],
  activeId: null,
};

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      const rs = { ...state, list: [...state.list, action.payload] };
      // console.log(rs);
      return rs;
    }
    case "SET_ACTIVE_HOBBY": {
      const rs = {
        ...state,
        activeId: action.payload.id,
      };
      console.log(rs);
      return rs;
    }
    default:
      return state;
  }
};

export default hobbyReducer;
