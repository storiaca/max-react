import * as actionType from "./actions";
const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD:
      return {
        ...state,
        persons: state.persons.concat({
          id: new Date(),
          name: "Max",
          age: Math.floor(Math.random() * 40)
        })
      };
    case actionType.DELETE:
      return {};
  }
  return state;
};

export default reducer;
