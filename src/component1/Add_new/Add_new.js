import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Add_new = () => {
  const [level, setLevel] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [maxMarks, setMaxMarks] = useState('');
  const [numQuestions, setNumQuestions] = useState('');

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

    // Reset the form after submission
    setLevel('');
    setTitle('');
    setDescription('');
    setMaxMarks('');
    setNumQuestions('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
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
      <Link to='/dashboard'>
      <button type='submit'>
        <span>Add New Quiz</span>
        <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
        </svg>
      </button>
      </Link>     
    </form>
  );
};

export default Add_new;
