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
import Stirfry from "./Stirfry";
import Potatobhurji from "./Potatobhurji";
import Mustardsandwich from "./Mustardsandwich";
import Saagpaneer from "./Saagpaneer";
import Upma from "./Upma";
import Pavbhaji from "./Pavbhaji";
import Aloogobi from "./Aloogobi";
import Alooparatha from "./Alooparatha";
import Shakshuka from "./Shakshuka";
import Hakkanoodle from "./Hakkanoodle";
import Khichdi from "./Khichdi";
import Poha from "./Poha";
import Notfound from "./Notfound";
import Okra from "./Okra";
import Curdrice from "./Curdrice";
import Eggplant from "./Eggplant";
import Brownlentils from "./Brownlentils";
import Besan from "./Besan";
import Cabbage from "./Cabbage";
import Wheretobegin from "./Wheretobegin";
import Yogurt from "./Yogurt";
import Onion from "./Onion";
import Dhokla from "./Dhokla";
import Rajmah from "./Rajmah";
import Riceandbeans from "./Riceandbeans";
import Sagopearls from "./Sagopearls";
import Chorizorice from "./Chorizorice";
import Broccoli from "./Broccoli";
import Mushroom from "./Mushroom";
import Shahipaneer from "./Shahipaneer";
import Spinachbesan from "./Spinachbesan";
import Erayba from "./Erayba";



class Main extends Component {
  onClick = (e) => {
    e.preventDefault()
  }
  render(){
    return(
      <Container className="p-3">
        <div>
          <div>
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
                  <Nav.Link href="/privacypolicy">Privacy Policy</Nav.Link>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
                  <Nav.Link href="/donate">Donate</Nav.Link>
                  <Nav.Link href="/erayba">Erayba India</Nav.Link>
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
            <Route exact path="/wheretobegin" element={<Wheretobegin />}></Route>
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
            <Route exact path="/stirfry" element={< Stirfry />}></Route>
            <Route exact path="/potatobhurji" element={< Potatobhurji />}></Route>
            <Route exact path="/mustardsandwich" element={< Mustardsandwich />}></Route>
            <Route exact path="/saagpaneer" element={ <Saagpaneer />}></Route>
            <Route exact path="/upma" element={ <Upma/>}></Route>
            <Route exact path="/pavbhaji" element={ <Pavbhaji />}></Route>
            <Route exact path="/aloogobi" element={ <Aloogobi />}></Route>
            <Route exact path="/paratha" element={ <Alooparatha />}></Route>
            <Route exact path="/shakshuka" element={ <Shakshuka />}></Route>
            <Route exact path="/hakkanoodle" element = {<Hakkanoodle/>}></Route>
            <Route exact path="/khichdi" element = {<Khichdi/>}></Route>
            <Route exact path="/poha" element= {<Poha />}></Route>
            <Route exact path="/okra" element= {<Okra />}></Route>
            <Route exact path="/curdrice" element= {<Curdrice />}></Route>
            <Route exact path="/eggplant" element= {<Eggplant/>}></Route>
            <Route exact path="/brownlentils" element= {<Brownlentils/>}></Route>
            <Route exact path="/besan" element= {<Besan/>}></Route>
            <Route exact path="/cabbage" element= {<Cabbage/>}></Route>
            <Route exact path="/yogurt" element= {<Yogurt />}></Route>
            <Route exact path="/onion" element= {<Onion/>}></Route>
            <Route exact path="/dhokla" element={<Dhokla/>}></Route>
            <Route exact path="/rajmah" element={<Rajmah/>}></Route>
            <Route exact path="/riceandbeans" element={<Riceandbeans/>}></Route>
            <Route exact path="/sagopearls" element={<Sagopearls/>}></Route>
            <Route exact path="/chorizorice" element={<Chorizorice/>}></Route>
            <Route exact path="/broccoli" element={<Broccoli/>}></Route>
            <Route exact path="/mushroom" element={<Mushroom/>}></Route>
            <Route exact path="/paneer" element={<Shahipaneer/>}></Route>
            <Route exact path="/spinachbesan" element={<Spinachbesan/>}></Route>
            <Route exact path="/erayba" element={<Erayba/>}></Route>
            <Route path='*' element={<Notfound />}/>
          </Routes>
        </div>
      </Container>
    );
  }
}

export default Main;
