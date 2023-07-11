import React from 'react';
import './style.css';
import './circle.scss'

import { Link } from 'react-router-dom';

import { CircularProgressbar, buildStyles } from "react-circular-progressbar"; 
import "react-circular-progressbar/dist/styles.css";




const Data = [
    {
      id: 1,
      name: 'General Knowledge',
      price:'$ 100',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dui porta, bibendum purus in, tincidunt est.',
    },
    {
      id: 2,
      name: 'General History',
      price:'$ 100',
      testimonial: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Sed convallis pretium mauris, sit amet consequat tellus sagittis et.',
    },
    {
      id: 3,
      name: 'Maths',
      price:'$ 100',
      testimonial: 'Nulla facilisi. Phasellus dignissim nisi a augue ullamcorper viverra. Nam vel sapien luctus, ullamcorper ex a, aliquet risus.',
    },
    {
        id: 4,
        name: 'Science',
        price:'$ 100',
        testimonial: 'Nulla facilisi. Phasellus dignissim nisi a augue ullamcorper viverra. Nam vel sapien luctus, ullamcorper ex a, aliquet risus.',
      },
      {
        id: 4,
        name: 'Economics',
        price:'$ 100',
        testimonial: 'Nulla facilisi. Phasellus dignissim nisi a augue ullamcorper viverra. Nam vel sapien luctus, ullamcorper ex a, aliquet risus.',
      },
      {
        id: 4,
        name: 'Civics',
        price:'$ 100',
        testimonial: 'Nulla facilisi. Phasellus dignissim nisi a augue ullamcorper viverra. Nam vel sapien luctus, ullamcorper ex a, aliquet risus.',
      },  {
        id: 4,
        name: 'Psychology',
        price:'$ 100',
        testimonial: 'Nulla facilisi. Phasellus dignissim nisi a augue ullamcorper viverra. Nam vel sapien luctus, ullamcorper ex a, aliquet risus.',
      },  {
        id: 4,
        name: 'Physics',
        price:'$ 100',
        testimonial: 'Nulla facilisi. Phasellus dignissim nisi a augue ullamcorper viverra. Nam vel sapien luctus, ullamcorper ex a, aliquet risus.',
      },
      
  ];
  

  const TestimonialTile = ({ name, testimonial ,price}) => {
    const styles = {
      img: {
        maxWidth: '50px',
      },
    };
    return (
      <div className="testimonial-tile">
        <div className='marks'><h5>max marks: 10</h5></div>

         <div class="card-body">
         <h4 class="card-title mt-0 "><a class="text-white" herf="#">{name}</a></h4>

         <small class="card-meta">{name}</small>
            <div className='time'>
            <small><img width="34" height="34" src="https://img.icons8.com/arcade/64/property-time.png" alt="property-time"/>    9:05 PM, October 15, 2020</small>
            <br></br>
            
            <small><img width="34" height="34" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-stop-watch-productivity-flaticons-lineal-color-flat-icons.png" alt="external-stop-watch-productivity-flaticons-lineal-color-flat-icons"/>  Time Duration : 30 mins</small>
           </div>
           <div className='price-level'>
            <h4 className='price'>Price: {price}</h4>
            <small className='level'>Level: class</small>
           </div>
            <div className='right'>
              <img width="64" height="64" src="https://img.icons8.com/arcade/64/bullish.png" alt="bullish"/>
              <span className='right-name'>Difficulty</span>
              <img width="64" height="64" src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/external-students-online-education-itim2101-lineal-color-itim2101.png" alt="external-students-online-education-itim2101-lineal-color-itim2101"/>
              <span className='right-name'>hey</span>
              <br></br>
              <img width="48" height="48" src="https://img.icons8.com/color/48/minus.png" alt="minus"/>
              <br></br>
              <span className='right-name'>hey</span>
            </div>
           <hr></hr>
           <p className="testimonial-text">{testimonial}</p>
          </div>        
          <div className="card-footer">
           <div className="media">
      <div className='middle'>
    <h6 class="my-0 text-white d-block">Total Question : 11</h6>
    <div className='btns'>
    <button className='btn1 btn'>Start</button>
    <button className='btn2 btn'>Result</button>
    </div>
    
  </div>
   <a className='result'><img width="40" height="40" src="https://img.icons8.com/external-beshi-glyph-kerismaker/48/000000/external-Checking-business-beshi-glyph-kerismaker.png" alt="external-Checking-business-beshi-glyph-kerismaker"/></a>

<div>
  <a class="bin">
    <img width="50" height="52" src="https://img.icons8.com/arcade/64/000000/filled-trash.png" alt="filled-trash"/>
  </a>
</div> 


</div>
          </div>
      </div>
    );
  };

const Quiz_dashboard = () => {
  return (
<div className="testimonials-container">
      <Link to={'add_quiz'}>
      <button><span>Add New Quiz</span>
      <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
  </svg>
      </button> </Link>
      <div className='subjects'>
      {Data.map((testimonial) => (
        <TestimonialTile key={testimonial.id} name={testimonial.name} testimonial={testimonial.testimonial}  price={testimonial.price}/>
      ))}
     </div>

    </div> 
 )
}

export default Quiz_dashboard




