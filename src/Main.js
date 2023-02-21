import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Route, Routes} from "react-router-dom";
import Recipe from "./Recipe";
import Home from "./Home";
import Potato from "./Potato";
import MediaQuery from 'react-responsive'
import Bombaysandwich from "./Bombaysandwich";
import Donate from "./Donate";
import Wheretobegin from "./Wheretobegin";



class Main extends Component {
  onClick = (e) => {
    e.preventDefault()
  }
  render(){
    return(
      <Container className="p-3">
        <div>
          <div >
            <MediaQuery maxWidth={767}>
              <img className="bg" src="spices_mobile.jpg" alt="Indian Spices logo banner" />
            </MediaQuery>
            <MediaQuery minWidth={767}>
              <img className="bg" src="spices.jpg" alt="Indian Spices logo banner" />
            </MediaQuery>
          </div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand onClick={this.onClick} style={{cursor: 'default'}}>Fearless Vegetarian</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/recipe" className="recipelink">Recipe</Nav.Link>
                  <Nav.Link href="/wheretobegin">Where to Begin</Nav.Link>
                  <Nav.Link href="/donate">Donate</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route exact path="/" element={< Home />}></Route>
            <Route exact path="/recipe" element={< Recipe />}></Route>
            <Route exact path="/potato" element={< Potato />}></Route>
            <Route exact path="/sandwich" element={< Bombaysandwich />}></Route>
            <Route exact path="/donate" element={< Donate />}></Route>
            <Route exact path="/wheretobegin" element={< Wheretobegin />}></Route>
          </Routes>
        </div>
      </Container>
    );
  }
}

export default Main;
