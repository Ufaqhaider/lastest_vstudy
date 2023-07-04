import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';





const Data = [
    {
      id: 1,
      name: 'General Knowledge',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dui porta, bibendum purus in, tincidunt est.',
    },
    {
      id: 2,
      name: 'Genral History',
      testimonial: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Sed convallis pretium mauris, sit amet consequat tellus sagittis et.',
    },
    {
      id: 3,
      name: 'Maths',
      testimonial: 'Nulla facilisi. Phasellus dignissim nisi a augue ullamcorper viverra. Nam vel sapien luctus, ullamcorper ex a, aliquet risus.',
    },
    {
        id: 4,
        name: 'Science',
        testimonial: 'Nulla facilisi. Phasellus dignissim nisi a augue ullamcorper viverra. Nam vel sapien luctus, ullamcorper ex a, aliquet risus.',
      },
      {
        id: 4,
        name: 'Economics',
        testimonial: 'Nulla facilisi. Phasellus dignissim nisi a augue ullamcorper viverra. Nam vel sapien luctus, ullamcorper ex a, aliquet risus.',
      },
      {
        id: 4,
        name: 'Civics',
        testimonial: 'Nulla facilisi. Phasellus dignissim nisi a augue ullamcorper viverra. Nam vel sapien luctus, ullamcorper ex a, aliquet risus.',
      },  {
        id: 4,
        name: 'Psychology',
        testimonial: 'Nulla facilisi. Phasellus dignissim nisi a augue ullamcorper viverra. Nam vel sapien luctus, ullamcorper ex a, aliquet risus.',
      },  {
        id: 4,
        name: 'Physics',
        testimonial: 'Nulla facilisi. Phasellus dignissim nisi a augue ullamcorper viverra. Nam vel sapien luctus, ullamcorper ex a, aliquet risus.',
      },
      
  ];
  

  const TestimonialTile = ({ name, testimonial }) => {
    const styles = {
      img: {
        maxWidth: '50px',
      },
    };
    return (
      <div className="testimonial-tile">
        <div className='marks'><h5>max marks: 10</h5></div>

         <div class="card-body">
         <small class="card-meta">{name}</small>
            <h4 class="card-title mt-0 "><a class="text-white" herf="#">{name}</a></h4>
            <div className='time'>
            <small><img width="34" height="34" src="https://img.icons8.com/arcade/64/property-time.png" alt="property-time"/>    9:05 PM, October 15, 2020</small>
            <br></br>
            
            <small><img width="34" height="34" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-stop-watch-productivity-flaticons-lineal-color-flat-icons.png" alt="external-stop-watch-productivity-flaticons-lineal-color-flat-icons"/>  Time Duration : 30 mins</small>
           </div>
           <p className="testimonial-text">{testimonial}</p>
          </div>        
          <hr></hr>
          <div className="card-footer">
           <div className="media">
      <div className='middle'>
    <h6 class="my-0 text-white d-block">Oz Coruhlu</h6>
     <small>Director of UI/UX</small>
     <img width="44" height="44" src="https://img.icons8.com/3d-fluency/94/contract.png" alt="contract"/>

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
        <TestimonialTile key={testimonial.id} name={testimonial.name} testimonial={testimonial.testimonial} />
      ))}
     </div>

    </div> 
 )
}

export default Quiz_dashboard




