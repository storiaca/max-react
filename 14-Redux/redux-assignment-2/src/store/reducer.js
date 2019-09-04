import * as actionType from "./actions";
import person from "../components/Person/Person";
const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD:
      return {
        ...state,
        persons: state.persons.concat({
          id: Math.random(),
          name: action.personData.name,
          age: action.personData.age
        })
      };
    case actionType.DELETE:
      return {
        ...state,
        persons: state.persons.filter(persons => person.id !== action.personId)
      };
  }
  return state;
};

export default reducer;
