describe('Fearless Vegetarian webpage testing', () => {
  it('visit homepage', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/')
  })

  it('visit Potato recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/potato')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Spiced Indian Potatoes (Easy Vegan Comfort Food)");
    });
  })

  it('search for a dish on recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/recipe')
    cy.get('input#recipe-search').type('mushroom')
    cy.get('a[href="/mushroom"]').click();
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
      expect($ele.text().trim()).to.contain("Creamy Potato Curry in Roasted Red Pepper Gravy");
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
    cy.get('h1').should('contain.text', 'Khaman Dhokla is a soft, fluffy, and spongy steamed chickpea snack from Gujarat, India.');
  })

  it('visit Upma recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/upma')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Easy South Indian Upma Recipe");
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
      expect($ele.text().trim()).equal("At Fearless Vegetarian, we respect your privacy and are committed to being transparent about how information is handled when you use our website.");
    });
  })

  it('visit Chipotle recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/chipotle')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Easy Homemade Chipotle Bowl – Better Than Restaurant Style");
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
      expect($ele.text().trim()).equal("Pav Bhaji Recipe – Mumbai-Style Street Food");
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
      expect($ele.text().trim()).equal("Chickpea Shakshuka");
    });
  })

  it('visit Erayba India page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/articles/erayba')
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
      expect($ele.text().trim()).equal("Besan Curry Recipe - Traditional Indian Chickpea Flour Curry");
    });
  })

  it('Visit Cabbage Recipe Page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/cabbage')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal(`Cabbage Curry Recipe – Indian-Style Patta Gobi`);
    });
  })

  it('visit Masoor Lentils recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/brownlentils')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal(`Whole Masoor Dal (Brown Lentil Curry)`);
    });
  })

  it('visit Bombay Masala Sandwich recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/masalasandwich')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal(`Vegetable Masala Sandwich – Indian Vegetarian Sandwich Recipe`);
    });
  })

  it('visit Couscous recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/couscous')
    cy.get('h1').should('contain.text', 'Easy and Flavorful Couscous Recipe');
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

  it('visit Eggpplant Curry  recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/faq')
    cy.get('h1').should('contain.text', 'Frequently Asked Questions');
  });
})

