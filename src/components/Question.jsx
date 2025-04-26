const Question = ({ question }) => {
    return (
        <li className="text-xl">
            <input type='checkbox' className='mx-10 w-4 h-4 mb-3' />
            {question}
        </li>
    );
}

export default Question;