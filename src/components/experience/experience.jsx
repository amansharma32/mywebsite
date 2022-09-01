import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill} from "react-icons/bs";
const experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/*end of frontend*/}

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>MongoDb</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
