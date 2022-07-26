import axios from 'axios';
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Question, Rules } from '../components'
import { useQuiz } from '../context/quiz-context';

const Quiz = () => {
    const {dispatch}  = useQuiz()
    const [showRules,setShowRules] = useState(true)
    const {quizId} = useParams()
    useEffect(() => {
        (async () => {
            const resp = await axios.get(`/api/quizzes/${quizId}`)
            dispatch({type: "INITIAL_QUIZ" , payload: resp.data.quiz})
        })()
    },[])

  return (
    <>
    {showRules ? <Rules setShowRules={setShowRules}/> : <Question />}
    </>
  )
}

export { Quiz }