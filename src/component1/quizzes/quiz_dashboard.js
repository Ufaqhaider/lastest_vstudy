import React from 'react';
import './style.css';
import './circle.scss'
import { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import { account, databases } from '../../appwrite/appwriteConfig';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"; 
import "react-circular-progressbar/dist/styles.css";





  const TestimonialTile = ({ title, desc ,price,level,maxMarks,numQuestions,teacherId,quizTime,quizDuration,schoolId}) => {
    const styles = {
      img: {
        maxWidth: '50px',
      },
    };
    console.log(title,desc,price)
    return (
      <div className="testimonial-tile">
        <div className='marks'><h5>max marks: {maxMarks}</h5></div>

         <div class="card-body">
         <h4 class="card-title mt-0 "><a class="text-white" herf="#">{title}</a></h4>

         <small class="card-meta">{title}</small>
            <div className='time'>
            <small><img width="34" height="34" src="https://img.icons8.com/arcade/64/property-time.png" alt="property-time"/>   {quizTime} </small>
            <br></br>
            
            <small><img width="34" height="34" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-stop-watch-productivity-flaticons-lineal-color-flat-icons.png" alt="external-stop-watch-productivity-flaticons-lineal-color-flat-icons"/>  Time Duration : {quizDuration} mins</small>
           </div>
           <div className='price-level'>
            <h4 className='price'>Price: {price}</h4>
            <small className='level'>Level: {level}</small>
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
           <p className="testimonial-text">{desc}</p>
          </div>        
          <div className="card-footer">
           <div className="media">
      <div className='middle'>
    <h6 class="my-0 text-white d-block">Total Question : {numQuestions}</h6>
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
  const [Data, setData] = useState([]);
  useEffect(() => {
    const promise = databases.listDocuments(process.env.REACT_APP_APPWRITE_VSTUDY_DATABASE_API, process.env.REACT_APP_APPWRITE_VSTUDY_DATABASE_QUIZ_COLLECTION_ID);

    promise.then(function (response) {
        console.log("This is the response",response); // Success
      setData(response.documents)
      console.log(Data)
    }, function (error) {
      console.log(error); // Failure

    });

  }, [])
  console.log(Data);
  return (
<div className="testimonials-container">
      <Link to={'add_quiz'}>
      <button><span>Add New Quiz</span>
      <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
  </svg>
      </button> </Link>
      <div className='subjects'>
      {Data.length===0 ? "pls wait" : Data.map((testimonial) => (
        <TestimonialTile key={testimonial.$id} title={testimonial.title} desc={testimonial.Desc}  price={testimonial.price} level={testimonial.level} maxMarks={testimonial.maxMarks} numQuestions={testimonial.numQuestions} teacherId={testimonial.teacherId} quizTime={testimonial.quizTime} quizDuration={testimonial.quizDuration} schoolId={testimonial.schoolId}/>
      ))}
     </div>

    </div> 
 )
}

export default Quiz_dashboard




