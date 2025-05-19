import React, { useState, useEffect } from 'react';
import { Bar } from 'rough-viz';
import { database } from '../Firebase';
import { ref, onValue } from 'firebase/database';

function Graph() {
    const [values, setValues] = useState(new Array(10).fill(0));

    useEffect(() => {
        const db = database;
        const purityRef = ref(db, 'values');
        let counts = new Array(10).fill(0);
        onValue(purityRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                let index = Math.floor(childSnapshot.val() / 10);
                index = Math.min(index, 9);
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
        roughness: 2,
        fillStyle: 'cross-hatch',
        margin: {top: 50, right: 50, bottom: 50, left: 50},
        padding: 0.2,
        title: ''
        });
    }, [values]);

  return (
    <div className='pb-16'>
      <h1 className="flex justify-center text-5xl font-semibold mx-auto my-16">UCSD Student Purity Scores</h1>
      <div id="viz0" className='mx-auto w-144 h-144 overflow-visible'></div>
    </div>
  );
}

export default Graph;
