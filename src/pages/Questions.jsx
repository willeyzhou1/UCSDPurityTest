import React from 'react'
import data from '../components/Data'
import Question from '../components/Question'
import { useNavigate } from 'react-router-dom';
import { database } from '../Firebase'
import { ref, set, push } from "firebase/database";

export default function Questions({ setVisible }) {
    const navigate = new useNavigate();

    const getQuestions = (data) => {
        return data.map((questionData, index) => (
            <Question key={index} question={questionData.question} />
        ));
    }

    function handleSubmit() {
        setVisible(false);
        let checkedBoxes = 100 - document.querySelectorAll('input[type="checkbox"]:checked').length;
        const db = database;
        const reference = push(ref(db, 'values'))
        set(reference, checkedBoxes);
        navigate('/submit', {state: checkedBoxes});
        console.log(checkedBoxes)
    }

    function handleReset() {
        document.querySelectorAll('input[type=checkbox]').forEach(box => box.checked = false);
    }

    return (
        <div>
            <ol type='1' className='text-2xl font-bold text-black list-decimal pl-16 mt-16'>
                {getQuestions(data)}
            </ol>
            <div className='flex mt-10'>
            <button onClick={handleSubmit} className='w-54 h-12 border-black border-2 rounded-xl bg-blue-400 p-2 cursor-pointer ml-8 mr-12 transition duration-300 hover:bg-sky-300'>See my score!</button>
            <button onClick={handleReset} className='w-54 h-12 border-black border-2 rounded-xl bg-amber-500 p-2 cursor-pointer transition duration-300 hover:bg-yellow-500'>Reset checkboxes</button>
            </div>
        </div>
    )
}
