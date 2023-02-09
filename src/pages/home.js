import React from 'react';
import im2 from "./home.png";
import si1 from "./icon1.png";
import si2 from "./icon2.jpeg";
import si4 from "./icon3.jpeg";
import si3 from "./icon4.jfif";
import si5 from "./mental.png";
import si6 from "./mental.png";
import { Link } from 'react-router-dom';
const Events = () => {
  return (
    <div style={{background:'black'}}>         
     <section class="section">
                <div class="box-main">
                    <div class="concert">
                    <img src={im2} class="center" alt="Snow" style={{width:'100%',height:'225%'}}/>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="center" id="program" style={{ color: 'white'}}>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            HOW IT WORKS
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </h1>

                        <figure>
<div class="row">
    <div class="column">
    <Link to="/form"><button style={{background:'black'}}> <img src={si1} id="si1" alt=" Snow" style={{width:'80%'} }/></button></Link>
   
      <h3 style={{color:'white'}}>Chat with our bot</h3>
    </div>
    <div class="column">
    <Link to="/form"><button to='/form' style={{background:'black'}}><img src={si3} alt=" Snow" style={{width:'80%'}}/></button></Link>
      <h3 style={{color:'white'}}>Connect to people </h3>
      <figcaption></figcaption>
    </div>
    <div class="column">
    <Link to="/form"><button to='/form' style={{background:'black'}}><img src={si2} alt=" Snow" style={{width:'80%'}}/></button></Link>
      <h3 style={{color:'white'}}>Start Therapy </h3>
      <figcaption></figcaption>
    </div>
    
</div>

</figure>
<br></br>
<br></br>
<br></br>
<br></br>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                              
                    </div>
                </div>
            </section>            
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
  );
};
  
export default Events;