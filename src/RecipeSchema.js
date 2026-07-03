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
  instructions = [],
  keywords = "",
  recipeCategory = "Main Course",
  recipeCuisine = "Indian",
  video = "",
  nutrition = null,
  datePublished = "",
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Recipe",

    name,
    description,
    image: [image],
    url,

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

    prepTime,
    cookTime,
    totalTime,

    recipeYield,
    recipeCategory,
    recipeCuisine,

    keywords,

    recipeIngredient: ingredients,

    recipeInstructions: instructions.map((step) => ({
      "@type": "HowToStep",
      text: step,
    })),
  };

  if (video) {
    schema.video = {
      "@type": "VideoObject",
      name,
      description,
      thumbnailUrl: image,
      contentUrl: video,
      embedUrl: video,
    };
  }

  if (nutrition) {
    schema.nutrition = {
      "@type": "NutritionInformation",
      ...nutrition,
    };
  }

  if (datePublished) {
    schema.datePublished = datePublished;
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default RecipeSchema;