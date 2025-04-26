import React, { Component } from 'react'
import data from '../components/Data'
import Question from '../components/Question'
import { useNavigate, useLocation } from 'react-router-dom';

export default function Questions() {
    const navigate = new useNavigate();

    const getQuestions = (data) => {
        return data.map((questionData, index) => (
            <Question key={index} question={questionData.question} />
        ));
    }

    function handleSubmit() {
        var checkedBoxes = 100 - document.querySelectorAll('input[type="checkbox"]:checked').length;
        navigate('/submit', {state: checkedBoxes});
        console.log(checkedBoxes)
    }
    return (
        <div>
            <ol type='1' className='text-2xl font-bold text-black list-decimal pl-16 mt-16'>
                {getQuestions(data)}
            </ol>
            <button onClick={handleSubmit} className='border-black border-2 rounded-xl bg-white p-2 cursor-pointer mt-8 hover:opacity-90'>See my score!</button>
        </div>
    )
}
