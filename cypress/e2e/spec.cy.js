describe('template spec', () => {
  it('visit homepage', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/')
  })
  it('visit potato recipe page', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/potato')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("Any Time Potato Seasoned with Indian Spices served with Vegan Sausage");
    });
  })
  it('visit sandwich recipe', () => {
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
  it('visit poha recipe', () => {
    cy.visit('https://fearlessvegetarian.netlify.app/poha')
    cy.get('h1').should(($ele) => {
      expect($ele.text().trim()).equal("The word Poha refers to 2 things – the first one is the ingredient flattened rice itself and the second one is the Poha recipe or the dish that is made with this particular ingredient");
    });
  })
})