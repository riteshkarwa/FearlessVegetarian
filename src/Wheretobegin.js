import React, { Component } from "react";
import Image from "react-bootstrap/Image";

class Wheretobegin extends Component {
    render() {
      return (
        <div>
            <p>
                <h1>Types of Vegetarians</h1>
                <Image src="veg.jpg" thumbnail rounded></Image>
            </p>
            
            <h1>Where To Begin With Cooking Delicious Vegetarian (aka Lacto Vegetarian) Food</h1>
            <p>
                If you are trying to become vegetarian (aka lacto vegetarian) then you will come across lot of Indian dishes but it can be challenging if it is your first 
                time cooking Indian Food. I was lucky enough to have my mommy dearest to guide me but that could not be the case with some or most of you. Indian Grocery 
                store is the answer to all your question. All the weird sounding spices can be found in the Indian grocery store. Another thing that no one 
                tells you is that you have to be very careful with spices, (tumeric and chili powder) too much of any of those is a straight up death sentence 
                for the dish and you will have to start over. If you accidentally add to much chilli powder yogurt can help out but it depend on the dish you are making. 
                Please don't give up after first few unsuccessful attempts at making a dish it gets easy after you have cooked couple of dishes. The internet is flooded with lot of vegan and vegetarian dishes but Indian food is by far the best one as it very 
                flavorful. The ingredients for Indian food is generally not available in big chain grocery store and if they are they are expensive. I would love to help you overcome
                all the obstacles if you are stuck, that is what inspired me to start this website. 
            </p>
            <h2>Vegan and Vegetarian Diet</h2>
            <p>
              For most Americans, meat is the center piece to nearly every meal. As such, the very idea of vegetarianism can be daunting.
              I have been vegetarian my whole life and some days it can be difficult, even for me. Often times those who try vegetarianism  end up failing due to recipes that leave them feeling
              hungry or unsatisfied. This is where I come in - I am going to teach you how to be a fearless vegetarian, feel full, and enjoy cooking again. The best way to begin this lifestyle is to start with baby steps.  
              You could begin with meatless Mondays, as my brother "Grant" calls them. Then work toward a meatless week. 
              However, if you want to go all in I recommend trying to go vegetarian for at least three months. According to 
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3505409/" className="med_link" target="_blank" rel="noopener noreferrer"> National Library of Medicine </a>
              the "21-day-habit" is a myth and in actuality it takes at least 66 days to form a true habitual change. Therefore, I believe in three months of following my recipes you would have formed a routine that leaves you feeling better, more energized,
              and happier. 
            </p>
        </div>
      );
    }
}

export default Wheretobegin;