import React, { useState } from "react";
import "./App.css";

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
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                placeholder="Cuisine"
                required
              />
            </td>
            <td>
              <input
                type="url"
                name="photo"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="Photo URL"
                required
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Ingredients"
                required
              />
            </td>
            <td>
              <textarea
                name="preparation"
                value={preparation}
                onChange={(e) => setPreparation(e.target.value)}
                placeholder="Preparation"
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
