import React, { Component } from "react";
import {Link } from "react-router-dom";
 
class Recipe extends Component {
  render() {
    return (
      <div>
        <h2>STUFF</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
            <Link to="/potatoe">Potatoe</Link>
        </ol>
      </div>
    );
  }
}
 
export default Recipe;