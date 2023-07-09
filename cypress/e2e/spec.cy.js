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
    cy.get(':nth-child(3) > :nth-child(2)').should(($ele) => {
      expect($ele.text().trim()).equal("Where To Begin With Cooking Delicious Vegetarian (aka Lacto Vegetarian) Food");
    });
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
})