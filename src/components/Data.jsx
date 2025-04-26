const Data = [
    /** Geisel related questions */
    "Pulled an all nighter in Geisel?",
    "Had sex with a MPS in Geisel?",
    "Masturbated in Geisel?",
    "Smoked in the designated smoking area next to Geisel?",
    
    /** Dorm related questions */
    "Spent the night at a dorm room of a MPS?",
    "Masturbated in your dorm while your roommate was not present?",
    "Masturbated in your dorm while your roommate was present?",

    
    "Visited Fallen Star?",
    "Been to the tunnels underneath UCSD?",

]

const ModularizedData = Data.map((item) => ({
    question: item,
  }));
  
export default ModularizedData;