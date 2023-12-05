import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };
    addRecipe(newRecipe);

    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </td>
            <td>
              <label>Cuisine:</label>
              <input
                type="text"
                name="cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                required
              />
            </td>
            <td>
              <label>Photo URL:</label>
              <input
                type="url"
                name="photo"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <label>Ingredients:</label>
              <textarea
                name="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <label>Preparation:</label>
              <textarea
                name="preparation"
                value={preparation}
                onChange={(e) => setPreparation(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
