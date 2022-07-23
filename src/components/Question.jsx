import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useQuiz } from '../context/quiz-context'

const Question = () => {
    const navigate = useNavigate()
    const {state: { quiz , currQuesIndex } , dispatch } = useQuiz()
    const { mcqs } = quiz

    const selectedAns = (selected , ques) => {
      dispatch({
        type: "SELECTED_ANSWERS",
        payload: {
          quizId: quiz._id,
          questionId: ques._id,
          selectedAnswer: selected
        }
      })
      currQuesIndex + 1 !== mcqs.length ? dispatch({ type: "SET_CURRENT_QUESTION_INDEX" , payload: currQuesIndex + 1}) : navigate("/result")
    }
  
  return (
    <>
    <div className="flex items-center flex-col justify-center shadow-lg w-2/4 my-10">
      <div className=" rounded ">
        <p>Question</p>
        </div>
        <div className="flex flex-col mx-4">
          <h1>{mcqs[currQuesIndex].question}</h1>
          {mcqs[currQuesIndex].options.map(item => 
          <button key={item._id} className="my-2 p-2 rounded-md text-white bg-blue-400 hover:bg-blue-500" 
            onClick={() => selectedAns(item._id , mcqs[currQuesIndex])}>{item.option}
          </button>)}
      </div>
    </div>
    </>
  )
}

export { Question }