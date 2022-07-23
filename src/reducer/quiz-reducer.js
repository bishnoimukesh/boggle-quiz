const quizReducer = (state,action) => {
    switch(action.type) {
        case "INITIAL_QUIZ":
            return {...state , quiz: action.payload}
        case "SET_CURRENT_QUESTION_INDEX":
            return {...state , currQuesIndex: action.payload}
        case "SELECTED_ANSWERS":
            return {...state , quizId: action.payload.quizId , answers: {...state.answers, [action.payload.questionId]: action.payload.selectedAnswer}}
        default:
            return state
    }
}

export { quizReducer }