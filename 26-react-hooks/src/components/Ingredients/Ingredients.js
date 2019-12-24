import React, { useReducer, useState, useEffect, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error("Should not get there");
  }
};

const httpReducer = (httpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...httpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.error };
    default:
      throw new Error("Should not be reached");
  }
};
function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const [] = useReducer(httpReducer, {
    loading: false,
    error: null
  });
  //const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    console.log("RENDERING INGREDIENTS", userIngredients);
  }, [userIngredients]);

  const filterIngredientsHandler = useCallback(filterIngredients => {
    //setUserIngredients(filterIngredients);
    dispatch({ type: "SET", ingredients: filterIngredients });
  }, []);

  const addIngredientHandler = ingredient => {
    setIsLoading(true);
    fetch("https://react-hooks-update-560ef.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        setIsLoading(false);
        return response.json();
      })
      .then(responseData => {
        // setUserIngredients(prevIngredients => [
        //   ...prevIngredients,
        //   { id: responseData.name, ...ingredient }
        // ]);
        dispatch({
          type: "ADD",
          ingredient: { id: responseData.name, ...ingredient }
        });
      });
  };

  const removeIngredientHandler = ingredientId => {
    setIsLoading(true);
    fetch(
      `https://react-hooks-update-560ef.firebaseio.com/ingredients/${ingredientId}.json`,
      {
        method: "DELETE"
      }
    )
      .then(response => {
        setIsLoading(false);
        // setUserIngredients(prevIngredients =>
        //   prevIngredients.filter(item => item.id !== ingredientId)
        // );
        dispatch({ type: "DELETE", id: ingredientId });
      })
      .catch(error => {
        setError("Something went wrong");
        setIsLoading(false);
      });
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filterIngredientsHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
