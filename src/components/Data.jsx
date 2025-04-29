const Data = [
    /** Geisel related questions */
    "Pulled an all nighter in Geisel?",
    "Cried in Geisel?",
    "Had sex with a MPS in Geisel?",
    "Masturbated in Geisel?",
    "Smoked in the woods next to Geisel?",
    
    /** Dorm related questions */
    "Put up post-it notes on your dorm room window?",
    "Spent the night at a dorm room of a MPS (member of preferred sex)?",
    "Masturbated in your dorm while your roommate was not present?",
    "Masturbated in your dorm while your roommate was present?",
    "Been walked in on by your roommate?",
    "Had an RA called on you?",
    "Had to attend disciplinary meetings due to dorm misbehavior?",

    /** Dining hall questions */
    "Used up all your dining dollars before the school year ended?",
    "Stolen dishes and utensils from a dining hall?",
    "Thrown dishes and utensils from a dining hall in the trash?",
    "Stolen Triton2Go boxes for dining dollars?",
    
    /** Beach related questions */
    "Gone to a bonfire?",
    "Gotten drunk at a bonfire?",
    "Gotten high at a bonfire?",
    "Visited Blacks Beach nude?",

    /** Class related questions */
    "Did not attend a single lecture for one of your classes?",
    "Been drunk or high in lecture?",
    "Been drunk or high during a midterm/final?",
    "Cheated on a midterm/final?",
    "Used ChatGPT on an assignment?",
    "Dropped a class?",
    "Failed a class?",
    "Faced expulsion due to low GPA?",
    "Skipped out on filling out CAPES/SETS?",
    "Pulled an all nighter in a lecture hall?",
    "Had sex with your TA?",
    "Had sex with your professor?",
    
    /** Club related questions */
    "Went to PB on Wednesday?",
    /** Miscellaneous */    
    "Visited Fallen Star?",
    "Been to the tunnels underneath UCSD?",

]

const modularizedData = Data.map((item) => ({
    question: item,
  }));
  
export default modularizedData;