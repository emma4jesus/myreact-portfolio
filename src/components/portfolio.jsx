import React from "react";

//import stock
import stock from "../img/theshelf.png";
import stock1 from "../img/weather.dashboard.png";
import stock2 from "../img/scheduler.png";
import stock3 from "../img/codequiz.png";
import stock4 from "../img/notetaker.png";
import stock5 from "../img/password.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href='https://pure-cliffs-09110.herokuapp.com/'>
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                
                        <h2 className="w-title">The Shelf</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          Full stack community application to bring neighbors together by allowing them to track movies that they want to share and swap amongst themselves.
                          </span>
                        </div>
                </a>
               
              </div>
            </div>




            <div className="col-md-4">
              <div className="work-box">
              <a href='https://emma4jesus.github.io/Weather-Dashboard/'>
                  <div className="work-img">
                    <img src={stock1} alt="" className="img-fluid" />
                  </div>
        
                        <h2 className="w-title">Weather Dashboard</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          application that displays current, and 5-day forecast data for a user- input city.
                          </span>
                        </div>
                </a>
               
              </div>
            </div>





            <div className="col-md-4">
              <div className="work-box">
                <a href="https://emma4jesus.github.io/WorkDay-Scheduler/">
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div>
               
                        <h2 className="w-title">Work Day Scheduler</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          A Javascript app that you can use to schedule tasks throughout your workday.
                          </span>
                          
                        </div>
                  
                </a>
    
              </div>
            </div>





            <div className="col-md-4">
              <div className="work-box">
                <a href="https://emma4jesus.github.io/Javascript-Code-Quiz/">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                
                        <h2 className="w-title">Code Quiz App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          This is a timed code quiz, it features multiple-choice questions about javascript. If answered incorrectly, time is deducted.
                          </span>
                  </div>
                </a>
              </div>
            </div>



            <div className="col-md-4">
              <div className="work-box">
                <a href="note-taker-deloy.herokuapp.com/index.html">
                  <div className="work-img">
                    <img src={stock4} alt="" className="img-fluid" />
                  </div>
                
                   
                        <h2 className="w-title">Note Taker</h2>
                        <div className="w-more">
                          <span className="w-ctegory">This application is called Note Taker that can be used to write and save notes. This application uses Express.js back end and will save and retrieve note data from a JSON file.

</span>
                
                  </div>
                </a>
             
              </div>
            </div>






            <div className="col-md-4">
              <div className="work-box">
                <a href="https://emma4jesus.github.io/Password-Generator-Javascript/">
                  <div className="work-img">
                  <img src={stock5} alt="" className="img-fluid" />
                  </div>
    
                        <h2 className="w-title">Password Generator</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          A password is randomly generated based on criteria that the user provides when prompted.
                          </span>
                        </div>
                     
                </a>
            
          </div>
        </div>
        </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
