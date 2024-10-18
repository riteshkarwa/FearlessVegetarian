import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet"

class Erayba extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Erayba India Think Hair. Think Beauty</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/" />
                    <meta
                        name="description"
                        content="Erayba is dedicated to supporting salons and professional hairdressers worldwide, offering cutting-edge hair cosmetics that empower stylists and colorists to unleash creativity and achieve exceptional results."
                    />
                    <meta
                        name="keywords"
                        content="Fearless Vegetarian, Plant-Powered Living, Delicious Vegetarian Recipes, Cruelty-Free Choices, Healthy Lifestyle, Sustainable Living, Hair Care, Natural, Organic, Vegan,, Erayba India, Vegan Living"
                    />
                    <meta property="og:title" content="Erayba India Think Hair. Think Beauty" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/erayba.jpg" />
                    <meta property="og:description" content="Erayba is dedicated to supporting salons and professional hairdressers worldwide, offering cutting-edge hair cosmetics that empower stylists and colorists to unleash creativity and achieve exceptional results." />
                </Helmet>
                <p>
                    <h1>Erayba India!</h1>
                    <Image src="erayba.jpg" className="pro_veg" rounded responsive alt="Erayba India" />
                    <h2>Erayba Professional Hair Cosmetics – India Branch</h2>
                    Erayba Professional Hair Cosmetics is excited to expand its global presence with the opening of our India branch.
                    With the same commitment to excellence that has defined us since 1983, we aim to provide salons and professional hairdressers in India
                    with top-tier hair cosmetics and cutting-edge solutions designed to empower stylists and colorists. <br />

                    Our India branch brings the latest in hair care technology and innovative products crafted
                    from the best natural and vegan ingredients, ensuring that hair is treated with the utmost respect and care.
                    We are committed to supporting the creativity and passion of India’s hair professionals,
                    helping them achieve the best results and create true beauty. <br />  <br />

                    <h2>A Commitment to Excellence and Sustainability </h2>
                    As part of our global mission, Erayba India emphasizes sustainability,
                    blending high-quality hair cosmetics with eco-friendly practices to promote a healthy balance between beauty and nature.
                    By supporting salons, stylists, and educators across India, we are confident in our ability to foster creativity
                    and deliver the best results while respecting our environment.

                    We are thrilled to bring Erayba's heritage and passion to India, ensuring beauty professionals here have access to world-class products and support.

                </p>
                <p><FontAwesomeIcon icon={faEnvelope} /> anarabiocosmetic@gmail.com</p>
                <p><FontAwesomeIcon icon={faPhone} /> +91 96190 00315</p>
            </div>
        );
    }
}

export default Erayba;