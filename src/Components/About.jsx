/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/wood.jpg";

const imageAltText = "brown and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hello, I'm Zubair Ahmed and I'm passionate about technology and data science. I'm currently a part of the core team at Google Developer Student Clubs (DSC), where I'm actively involved in fostering tech innovation and community building. As a Global Campus Student at GitHub, I've had the opportunity to collaborate on exciting projects and expand my knowledge in the world of open-source development..";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web developer",
  "html css javascript",
  "python developer",
  "data science",
  "Microsoft azure",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Proficient in technologies like Microsoft Azure and Python, I enjoy tackling complex problems and turning data into actionable insights. Additionally, my experience with WordPress and my background in Computer Science from Sindh Madras-tul-islam Karachi have equipped me with a diverse skill set I'm excited to connect with like-minded professionals, collaborate on exciting projects, and continue my journey in the world of technology and data science. Let's connect and explore opportunities to make a positive impact together.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
