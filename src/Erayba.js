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
                    <title>Erayba India | Professional Vegan Hair Care & Salon Products</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/erayba" />
                    <meta
                        name="description"
                        content="Discover Erayba India's professional vegan hair care products. Trusted by salons and hair professionals worldwide, Erayba combines innovation, sustainability, and premium ingredients for healthier, more beautiful hair."
                    />
                    <meta
                        name="keywords"
                        content="Erayba India, vegan hair care, professional salon products, cruelty free hair care, vegan hair color, hair treatment, salon shampoo, hair mask, professional hair cosmetics, sustainable beauty, organic hair products"
                    />

                    <meta
                        property="og:title"
                        content="Erayba India | Professional Vegan Hair Care & Salon Products"
                    />

                    <meta
                        property="og:description"
                        content="Premium vegan and cruelty-free hair care solutions for salons, stylists, and beauty professionals across India."
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/EraybaIndia.jpg"
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/erayba"
                    />
                </Helmet>
                <h2>About Erayba India</h2>

                <p>
                    Founded in Spain in 1983, Erayba Professional Hair Cosmetics has earned a
                    global reputation for innovation, quality, and sustainability in the
                    professional hair care industry. With the launch of Erayba India, we are
                    bringing our premium range of salon-quality hair care, hair color, and hair
                    treatment products to beauty professionals across India.
                </p>

                <p>
                    Our mission is to support hairstylists, colorists, salons, and beauty
                    educators with advanced hair care solutions that deliver exceptional
                    results while respecting both people and the planet.
                </p>

                <h2>Vegan & Cruelty-Free Hair Care</h2>

                <p>
                    Erayba products are developed using carefully selected vegan ingredients and
                    are never tested on animals. Our formulas are designed to nourish, repair,
                    and protect hair while maintaining the highest standards of professional
                    performance.
                </p>

                <p>
                    Whether you're looking for professional shampoos, conditioners, hair masks,
                    styling products, or advanced color treatments, Erayba offers solutions
                    that help achieve healthy, vibrant, and beautiful hair.
                </p>

                <h2>Supporting Hair Professionals Across India</h2>

                <p>
                    Erayba India is dedicated to helping salons and beauty professionals stay at
                    the forefront of industry trends through innovative products, technical
                    education, and ongoing support. We believe creativity thrives when
                    professionals have access to world-class products and expert knowledge.
                </p>

                <h2>Our Commitment to Sustainability</h2>

                <p>
                    Sustainability is at the heart of everything we do. From responsibly sourced
                    ingredients to environmentally conscious manufacturing practices, Erayba is
                    committed to creating beauty products that deliver outstanding results while
                    minimizing environmental impact.
                </p>

                <h2>Contact Erayba India</h2>

                <p>
                    For product information, salon partnerships, training opportunities, and
                    distribution inquiries, please contact us:
                </p>

                <p>
                    <FontAwesomeIcon icon={faEnvelope} /> anarabiocosmetic@gmail.com
                </p>

                <p>
                    <FontAwesomeIcon icon={faPhone} /> +91 96190 00315
                </p>
            </div>
        );
    }
}

export default Erayba;