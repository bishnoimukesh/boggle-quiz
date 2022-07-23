import { createContext , useReducer , useContext } from "react";
import { quizReducer } from "../reducer/quiz-reducer";

const QuizContext = createContext();

const QuizProvider = ({children}) => {
    const [state,dispatch] = useReducer(quizReducer, {
        quiz: [],
        quizId: "",
        answers: null,
        currQuesIndex: 0
    })

    return (
        <QuizContext.Provider value={{state,dispatch}}>
            {children}
        </QuizContext.Provider>
    )
}

const useQuiz = () => useContext(QuizContext)

export { useQuiz , QuizProvider }