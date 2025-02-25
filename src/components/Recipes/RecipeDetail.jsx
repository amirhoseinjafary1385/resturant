// src/components/RecipeDetail.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) return <div>لطفاً یک دستور پخت را انتخاب کنید.</div>;
  
  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h2>*Info*</h2>

      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>دستور پخت:</h4>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
