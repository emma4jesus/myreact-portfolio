import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", 
        content: "HTML5",
         datapercent: "", 
         value: "100" },
        { id: "CSS3_skill", 
        content: "CSS3",
        datapercent: "", 
        value: "100" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
        },
        { id: "Bootstrap_skill", 
        content: "Bootstrap", 
        datapercent: "", 
        value: "100" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
        },
        {
          id: "Node.js_skill", 
          content: "Node.js", 
        },
        {
          id: "Express.js_skill",
          content: "Express.js",
          porcentage: "",
        }
     
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
         "Fullstack software developer based in Atlanta, GA. with a Full Stack Software Development certificate from Georgia Institute of Technology. Quick learner with a passion for creating clean, polished, professional websites using HTML, CSS, Bootstrap, JavaScript. Dedicated to work hard and be a good team player. Possesses the background of working in a strong analytical problem-solving environment with the ability to multi-task and be efficient with my work."
         
        }
        
      
      ]
     
    };
  }


  render() {
    return (
      <section id="about" class="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                    <img
                    className={"pro-pic"}
                    src={myImage}
                    alt="Portfolio Image"
                
                />
                      {/* <div
                      
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      > */}
                                      
                        {/* <div
                          className="about-img"
                         style={{ textAlign: "center"}} 
                      
                        >
                          
             
                        </div> */}
                      {/* </div> */}
                    </div>

                  
                    </div>
                    <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h2 className="title-">About Me</h2>
                      </div>
          
  
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="mailto:emmanuelajeanbaptiste1@gmail.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-google"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/emma4jesus"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/emmanuela-jean-baptiste-8442501a2"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.datapercent}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.datapercent }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                    </div>
                  </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default About;
