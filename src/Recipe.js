import React, { Component } from "react";
import {Link } from "react-router-dom";
 
class Recipe extends Component {
  render() {
    return (
      <div>
        <ol>
            <Link to="/potatoe">Any Time Potato Seasoned with Indian Spieces</Link>
        </ol>
      </div>
    );
  }
}
 
export default Recipe;