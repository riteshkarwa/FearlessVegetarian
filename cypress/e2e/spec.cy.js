describe('Fearless Vegetarian webpage testing', () => {
  it('visit homepage', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/')
  })

  it('visit Potato recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/potato')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Any Time Potato Seasoned with Indian Spices served with Vegan Sausage");
    });
  })

  it('search for a dish on recipe page',() =>{
    cy.visit('https://fearlessvegetarian.netlify.app/recipe')
    cy.get('input.search').type('mushroom')
    cy.contains('Delicious Homemade Mushroom Masala Curry Recipe').click()
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).to.contain('Mushroom Masala recipe is an easy, delicious Punjabi style one-pot mushroom curry');
    });
  })

  it('visit Sandwich recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/sandwich')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Vegetable Sandwich also known as Bombay Sandwich, with Mint Chutney and loads of Vegetables stacked up");
    });
  })

  it('visit potato curry with roasted bell pepper recipe', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/potatocapsicum')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Potato Curry with Roasted Red Bell Pepper Sauce Seasoned with Indian Spices");
    });
  })
  
  it('visit Poha recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/poha')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("The word Poha refers to 2 things – the first one is the ingredient flattened rice itself and the second one is the Poha recipe or the dish that is made with this particular ingredient");
    });
  })

  it('visit Upma recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/upma')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Upma is a flavorful, tasty, savory and popular South Indian breakfast that is made with cream of wheat or semolina flour (called rava or suji), Urad dal, nuts, herbs and spices.");
    });
  })

  it('visit StirFry recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/stirfry')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Stir Fry Vegetables recipe uses Mandarin Teriyaki Sauce. It is super easy to make. For protein you can use Tofu or Tempeh");
    });
  })

  it('visit About page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/about')
    cy.get("p").contains("Welcome to Fearless Vegetarian!")
  })

  it('visit Privacy Policy page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/privacypolicy')
    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2)').should(($ele) => {
      expect($ele.text().trim()).equal("This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.");
    });
  })

  it('visit Chipotle recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/chipotle')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Chipotle Bowl super easy to make and taste so much better than actual Chipotle Restaurant");
    });
  })

  it('visit Saag Paneer recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/saagpaneer')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Saag(Spinach) Paneer is a popular vegetarian dish consisting of panner(Indian cheese) in a smooth, delicious and creamy Spinach gravy.");
    });
  })

  it('visit Dal Makhani recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/dalmakhani')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Dal Makhani is a classic North Indian dish made with whole black gram (Urad dal) found in Indian Store, red kidney beans, butter and other Indian Spices. It is one of dishes that takes a longer time to cook more than 2 hours. Also the more you cook the better the curry is going to taste.");
    });
  })

  it('visit Pav Bhaji recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/pavbhaji')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Pav Bhaji is an iconic dish from Mumbai. This Pav Bhaji Recipe is going to make you fall in love with it.");
    });
  })

  it('visit CurdRice recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/curdrice')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Curd rice is a South Indian dish made with precooked rice, Curd (Indian Yogurt), herbs and tempering spices. It is more often eaten by South Indians as a part of the meal, all round the year. Apart from being gut healthy, Curd rice is also a comforting summer food which keeps the body cool.");
    });
  })

  it('visit Okra recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/okra')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Okra Dish made by adding onions and tomato. This Okra Dish tastes great and has very unique flavors that come from caramelizing the onions at the first stage and then frying more diced onions on a high heat at the second stage.");
    });
  })

  it('visit Shakshuka recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/shakshuka')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Shakshuka is believed to have originated in North Africa. Its popularity spread throughout the Middle East, especially in Israel, where it was embraced as a hearty, inexpensive, and simple dish. The Israeli version is thought to include eggs served over a seasoned tomato-based sauce. This Recipe, made with chickpeas instead of eggs.");
    });
  })

  it('visit Erayba India page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/erayba')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Erayba India!");
    });
  })

  it('visit Beetroot recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/beetroot')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Beetroot Curry with Coconut Milk and Lentils(Urad Dal). Beetroot is one of those wonder foods that can increase immunity, lower blood pressure and provide us with lot of essential vitamin and minerals.");
    });
  })

  it('visit Besan recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/besan')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Chickpea Flour also known as Besan is a spicy Indian side dish which goes well with any type of rice or Naan Bread.");
    });
  })

  it('visit Cabbage recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/cabbage')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal(`Cabbage is an excellent vegetable to use in cooking as it becomes wonderfully tender when cooked, allowing it to absorb the delicious flavors of the other ingredients. Despite this tenderness, the chopped cabbage leaves still provide a delightful chewiness to the dish. I truly enjoy the harmonious combination of flavors that comes together in this Cabbage Curry.`);
    });
  })

  it('visit Masoor Lentils recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/brownlentils')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal(`Whole Masoor Dal is also popularly known as Brown Lentils or Sabut Masoor ki Dal. These are basically whole red lentils which are popular all over the world.`);
    });
  })

  it('visit Bombay Masala Sandwich recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/masalasandwich')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal(`Vegetable Masala Sandwich also known as Bombay Sandwich, with Mint Chutney and loads of Vegetables stacked up`);
    });
  })

  it('visit Couscous recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/couscous')
    cy.get('h1').should('contain.text', 'Couscous is a North African dish made from tiny steamed balls of semolina flour');
  });

  it('visit Couscous recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/couscous')
    cy.get('h1').should('contain.text', 'Couscous is a North African dish made from tiny steamed balls of semolina flour');
  });

  it('visit Couscous Black Bean Bowl recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/couscousblackbeanbowl')
    cy.get('h1').should('contain.text', 'Try this delicious Couscous Black Bean Bowl with Enchilada Sauce & Red Pepper');
  });

  it('visit Khicdi  recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/khichdi')
    cy.get('h1').should('contain.text', 'Khichdi is a comforting and mild South Asian stew typically made with moong dal lentils and rice.');
  });

  it('visit Eggpplant Curry  recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/eggplant')
    cy.get('h1').should('contain.text', 'Mashed Eggpplant Curry, a popular dish from North India, is made with roasted mashed eggplant sauteed in onion, garlic, tomatoes, and Indian spices.');
  });
})