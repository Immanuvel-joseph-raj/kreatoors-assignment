import React from 'react';
import './Hero.css';
import image_1 from '../images/person_1.jpg';
import image_2 from '../images/person_2.webp';
import image_3 from '../images/person_3.jpeg';
import image_4 from '../images/person_4.jpeg';
import image_5 from '../images/person_5.jpeg';
import image_6 from '../images/person_6.jpg';
import image_7 from '../images/person_7.jpg';
import image_8 from '../images/person_8.jpeg';
import { motion } from 'framer-motion';
import Spinner from './spinner'


const images = [image_1,image_2,image_3,image_4,image_5,image_6,image_7,image_8];
const layers = [{startPoint:0,midPoint:1000},{startPoint:0,midPoint:-1000},{startPoint:0,midPoint:1000}]
    
const Hero = () => {
  return (
    <section className="hero">
 <div className='content'>
 <div className="spinner_1">
        <Spinner strokeCount={26} />
        </div>
      <div className="hero-content">
        <h1>AI Powered Branding Content Creation Services for the <span>HR Community</span></h1>
        <p>We empower HR professionals, business leaders, consultants, and creators to amplify their value and achieve measurable results.</p>
        <button className="explore-button">Explore More</button>
      </div>
      <div className="spinner_2">
      <Spinner strokeCount={36}/>

      </div>
 </div>
      <div className="image-grid-container">
        {layers.map((layer, layerIndex) => (
            <div>
          <motion.div key={`layer`+layerIndex} className="grid-image"     
          animate={{ x: [layer.startPoint, layer.midPoint] }} 
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          >
           {images.map((value,index)=>{
            return(<img key={`image`+layerIndex+`-`+index} src={value} className="grid-image" alt={`Person ${index + 1}`} />)
            })}
          </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
