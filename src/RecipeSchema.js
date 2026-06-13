import React from "react";
import { Helmet } from "react-helmet";

const RecipeSchema = ({
  name,
  description,
  image,
  url,
  prepTime = "PT15M",
  cookTime = "PT30M",
  totalTime = "PT45M",
  recipeYield = "2 servings",
  ingredients = [],
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name,
    description,
    image: [image],
    author: {
      "@type": "Organization",
      name: "Fearless Vegetarian",
    },
    publisher: {
      "@type": "Organization",
      name: "Fearless Vegetarian",
      logo: {
        "@type": "ImageObject",
        url: "https://fearlessvegetarian.netlify.app/logo.png",
      },
    },
    url,
    prepTime,
    cookTime,
    totalTime,
    recipeYield,
    recipeCategory: "Vegetarian",
    recipeCuisine: "Indian",
    recipeIngredient: ingredients,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default RecipeSchema;