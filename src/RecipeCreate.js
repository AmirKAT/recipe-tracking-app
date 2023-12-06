import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(formData);
    setFormData(initialFormState);
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
                value={formData.name}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <label>Cuisine:</label>
              <input
                type="text"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <label>Photo URL:</label>
              <input
                type="url"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <label>Ingredients:</label>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <label>Preparation:</label>
              <textarea
                name="preparation"
                value={formData.preparation}
                onChange={handleChange}
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
