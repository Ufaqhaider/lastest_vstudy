import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { account , databases} from '../../appwrite/appwriteConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Add_new = () => {
  const [level, setLevel] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [maxMarks, setMaxMarks] = useState('');
  const [numQuestions, setNumQuestions] = useState('');
  const [quizTime , setquizTime] = useState('');
  const [quizDuration, setquizDuration] = useState('');
  const [price , setprice] = useState(0);


  
  const  data ={ level , title , description , maxMarks , numQuestions , quizTime , quizDuration , price
  }
  const handlequizTimeChange = (event) =>{
    setquizTime(event.target.value);
  }
  const handlePriceChange = (event) =>{
    setprice(event.target.value);
  }
  const handlequizDuration = (event) =>{
    setquizDuration(event.target.value);
  }
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleMaxMarksChange = (event) => {
    setMaxMarks(event.target.value);
  };

  const handleNumQuestionsChange = (event) => {
    setNumQuestions(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform actions with the form data

    const promise = databases.createDocument(process.env.REACT_APP_APPWRITE_VSTUDY_DATABASE_API, 
      process.env.REACT_APP_APPWRITE_VSTUDY_DATABASE_QUIZ_COLLECTION_ID, uuidv4(), {
          level: data.level,
          title: data.title,
          Desc: data.description,
          maxMarks: data.maxMarks,
          numQuestions: data.numQuestions,
          price: data.price,
          quizTime: data.quizTime,
          quizDuration: data.quizDuration,
          schoolId: uuidv4(),
          teacherId: uuidv4()
      });

  promise.then(function (response) {
    toast.success('Quiz added Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      
  }, function (error) {
    toast.warn('Something went wrong please try again later', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      
  });


    // Reset the form after submission
    setLevel('');
    setTitle('');
    setDescription('');
    setMaxMarks('');
    setNumQuestions('');
    setquizTime('');
    setquizDuration('')
    setprice(0);
    
  };

  return (
    <React.Fragment>
          <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

  
    <form className="form-container">
      <div className="form-group">
        <label htmlFor="level">Level:</label>
        <select id="level" value={level} onChange={handleLevelChange}>
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="quizTime">Quiz Time:</label>
        <input type="text" id="quizTime" value={quizTime} onChange={handlequizTimeChange} />
      </div>

      <div className="form-group">
        <label htmlFor="quizDuration">Quiz Duration:</label>
        <input type="text" id="quizDuration" value={quizDuration} onChange={handlequizDuration} />
      </div>
      <div className="form-group">
        <label htmlFor="price">Quiz Price:</label>
        <input type="number" id="price" value={price} onChange={handlePriceChange} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} />
      </div>
      <div className="form-group">
        <label htmlFor="maxMarks">Maximum Marks:</label>
        <input type="number" id="maxMarks" value={maxMarks} onChange={handleMaxMarksChange} />
      </div>
      <div className="form-group">
        <label htmlFor="numQuestions">Number of Questions:</label>
        <input type="number" id="numQuestions" value={numQuestions} onChange={handleNumQuestionsChange} />
      </div> 
      {/* <Link to='/dashboard'> */}
      <button type='submit' onClick={handleSubmit}>
        <span>Add New Quiz</span>
        <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
        </svg>
      </button>
      {/* </Link>      */}
    </form>
    </React.Fragment>
  );
};

export default Add_new;
