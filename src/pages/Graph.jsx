import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Bar } from 'rough-viz';
import { database } from '../Firebase';
import { ref, onValue } from 'firebase/database';

function Graph( setVisible ) {
    const [values, setValues] = useState(new Array(10).fill(0));
    const navigate = new useNavigate();
    
    useEffect(() => {
        const db = database;
        const purityRef = ref(db, 'values');
        let counts = new Array(10).fill(0);
        onValue(purityRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                let index = Math.min(Math.floor(childSnapshot.val() / 10), 9);
                counts[index]++;
            });
            setValues(counts);
        });
        }, []);

    useEffect(() => {
        const container = document.getElementById('viz0');
        if (container) {
        container.innerHTML = '';
        }

        new Bar({
            element: '#viz0',
            data: {
                labels: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100'],
                values: values,
            },    
            margin: {top: 20, right: 100, bottom: 150, left: 100},
            padding: 0.2,
            xLabel: "Score Ranges",
            yLabel: "Count",
            labelFontSize: "2rem",
            axisFontSize: "1.1rem",
            color: "blue",
            highlight: "cornflowerblue",
            fillStyle: "cross-hatch",
            roughness: 2,
            strokeWidth: 2,
            innerStrokeWidth: 1,
            fillWeight: 0.5,
        });
    }, [values]);

    function handlePlayClick() {
      navigate('/');
      setVisible(true);
    }

  return (
    <div className='pb-16'>
      <h1 className="flex justify-center text-5xl font-semibold mx-auto my-16">UCSD Student Purity Scores</h1>
      <div id="viz0" className='mx-auto w-200 h-200 overflow-visible'></div>
      <button onClick={handlePlayClick} className='block mx-auto my-10 w-1/5 h-16 text-2xl border-black border-2 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 p-2 cursor-pointer transition duration-300 hover:opacity-90'>Play again?</button>
    </div>
  );
}

export default Graph;
