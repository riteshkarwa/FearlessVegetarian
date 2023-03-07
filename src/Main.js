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
import About from "./About";
import Peanutsd from "./Peanutsd";
import Potatocapsicum from "./Potatocapsicum";
import Beetroot from "./Beetroot";
import Avocado from "./Avocado";
import Chipotle from "./Chipotle";
import Blackeyedbeans from "./Blackeyedbeans";
import Maccheese from "./Maccheese";
import Lentil from "./Lentil";
import Couscous from "./Couscous";
import DalMakhani from "./Dalmakhani";
import Privacypolicy from "./Privacypolicy";
import ContactForm from "./ContactForm";



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
          <Navbar collapseOnSelect expand="false" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand onClick={this.onClick} style={{cursor: 'default'}}>Fearless Vegetarian</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/recipe" className="recipelink">Recipe</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/donate">Donate</Nav.Link>
                  <Nav.Link href="/privacypolicy">Privacy Policy</Nav.Link>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
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
            <Route exact path="/about" element={< About />}></Route>
            <Route exact path="/peanutsd" element={< Peanutsd />}></Route>
            <Route exact path="/potatocapsicum" element={< Potatocapsicum />}></Route>
            <Route exact path="/beetroot" element={< Beetroot />}></Route>
            <Route exact path="/avocado" element={< Avocado />}></Route>
            <Route exact path="/chipotle" element={< Chipotle />}></Route>
            <Route exact path="/blackeyedbeans" element={< Blackeyedbeans />}></Route>
            <Route exact path="/maccheese" element={< Maccheese />}></Route>
            <Route exact path="/lentil" element={< Lentil />}></Route>
            <Route exact path="/couscous" element={< Couscous />}></Route>
            <Route exact path="/dalmakhani" element={< DalMakhani />}></Route>
            <Route exact path="/privacypolicy"  element={< Privacypolicy />}></Route>
            <Route exact path="/contact" element={< ContactForm />}></Route>
          </Routes>
        </div>
      </Container>
    );
  }
}

export default Main;
