const defaultState = {
  tea: "",
};

const takeTea = "takeTea";
export const oneTeaReducer = (state = defaultState, action) => {
  switch (action.type) {
    case takeTea:
      return {
        ...state,
        tea: action.payload,
      };

    default:
      return state;
  }
};
export const oneTeaActions = (payload) => ({
  type: takeTea,
  payload,
});
