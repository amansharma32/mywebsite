import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import {FaAward} from 'react-icons/fa';
import {ImUsers} from 'react-icons/im';
import {VscFolderLibrary} from 'react-icons/vsc';
const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
        <div className="about_me-image">
        <img src={ME} alt="About Image" />


        </div>
        </div>
      <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
            <FaAward className="about_icon"/>
            <h5>Experience</h5>
            <small>1 year working</small>

          </article>
          <article className="about_card">
            <ImUsers className="about_icon"/>
            <h5>Clients</h5>
            <small>200+</small>

          </article>
          <article className="about_card">
            <VscFolderLibrary className="about_icon"/>
            <h5>Projects</h5>
            <small>10+</small>

          </article>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium culpa fugiat optio. Accusamus culpa recusandae sed obcaecati laborum placeat earum rerum praesentium natus quisquam voluptatem, optio eos maiores adipisci quaerat rem aut suscipit! Sequi hic iste vitae ea reprehenderit, soluta dolor explicabo obcaecati quis laborum, tenetur tempora quaerat unde cum!
        </p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
      
    </section>
  );
};

export default about;
