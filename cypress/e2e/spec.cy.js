describe('Fearless Vegetarian webpage testing', () => {
  it('visit homepage', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/')
  })

  it('visit Potato recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/potato')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Easy Indian Spiced Potatoes Recipe with Vegan Sausage");
    });
  })

  it('search for a dish on recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/recipe')
    cy.get('input#recipe-search').type('mushroom')
    cy.contains('Delicious Homemade Mushroom Masala Curry Recipe').click()
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).to.contain('Punjabi Mushroom Masala Curry');
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
      expect($ele.text().trim()).to.contain("Discover a flavorful Potato Curry cooked in a creamy roasted red bell pepper and cashew sauce");
    });
  })

  it('visit Poha recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/poha')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Traditional Indian Poha Recipe (Flattened Rice Breakfast)");
    });
  })

  it('visit Khaman Dhokla recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/dhokla')
    cy.get('h1').should('contain.text', 'Khaman Dhokla is a delectable and spongy snack that originates from the western part of India');
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
      expect($ele.text().trim()).equal("Saag Paneer Recipe (Indian Spinach & Paneer Curry)");
    });
  })

  it('visit Dal Makhani recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/dalmakhani')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Dal Makhani Recipe (Punjabi Black Lentil Curry) – Rich, Creamy & Slow-Cooked");
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
      expect($ele.text().trim()).equal("South Indian Curd Rice (Yogurt Rice)");
    });
  })

  it('visit Okra recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/okra')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Bhindi Masala (Okra Curry) with Onions, Tomatoes and Indian Spices");
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
      expect($ele.text().trim()).equal("Erayba India – Professional Vegan Hair Care for Salons and Beauty Professionals");
    });
  })

  it('visit Beetroot recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/beetroot')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Beetroot Curry with Coconut Milk (Indian Beetroot Curry Recipe)");
    });
  })

  it('Visit Besan Recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/besan')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Besan Curry (Chickpea Flour Curry) – A Traditional Indian Comfort Food Made with Gram Flour and Aromatic Spices");
    });
  })

  it('Visit Cabbage Recipe Page', () => {
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

  it('visit Homemade Yogurt recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/yogurt')
    cy.get('h1').should('contain.text', `Homemade Instant Pot Yogurt (Easy & Creamy)`);
  });

  it('visit Couscous Black Bean Bowl recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/couscousblackbeanbowl')
    cy.get('h1').should('contain.text', 'Couscous Black Bean Bowl with Enchilada Sauce and Red Bell Pepper');
  });

  it('visit Khicdi recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/khichdi')
    cy.get('h1').should('contain.text', 'Moong Dal Khichdi: Easy One-Pot Indian Comfort Food');
  });

  it('visit Eggpplant Curry  recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/eggplant')
    cy.get('h1').should('contain.text', 'Mashed Eggpplant Curry, a popular dish from North India, is made with roasted mashed eggplant sauteed in onion, garlic, tomatoes, and Indian spices.');
  });
})

