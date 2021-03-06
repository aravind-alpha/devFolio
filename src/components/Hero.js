import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import TextLoop from "react-text-loop";
import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../constants/socialLinks";
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <Image fluid={fluid} className="hero-img" />
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h3>I'm Aravind</h3>
            <h4>
              A{" "}
              <TextLoop className="text-loop">
                <span>self-taught</span>
                <span>passionate</span>
                <span>pragmatic</span>
              </TextLoop>{" "}
              Software engineer
            </h4>
            <Link to="/contact" className="btn" aria-label="Contact Me">
              Contact me
            </Link>
            <SocialLinks aria-label="Social Links" />
          </div>
        </article>
      </div>
    </header>
  );
};

export default Hero;
