import { useQuiz } from "../context/quiz-context";
import { Link } from "react-router-dom";

const Result = () => {
  const {
    state: { quiz, answers },
    dispatch,
  } = useQuiz();

  const calculateScore = (quiz, answers) => {
    let score = 0;
    score = quiz.reduce(
      (acc, curr) =>
        curr.options.find((item) => item._id === answers[curr._id])?.isCorrect
          ? acc + 10
          : acc,
      score
    );
    return score;
  };

  return (
    <>
      <div className="container m-10">
        <div className="text-3xl">Quiz Result</div>
        <div classname="mt-6">Final score: {calculateScore(quiz.mcqs, answers)}</div>
        <div>Total question: {quiz.mcqs.length}</div>
        <div className="flex flex-col mt-6">
          {quiz.mcqs.map((item) => (
            <div className="mt-4" key={item._id}>
              <h2>{item.question}</h2>

              {item.options.map((data) => (
                <button key={data._id}
                  className={`flex p-1 ${data.isCorrect ? "flex bg-green-700 text-white"  : ""} ${
                    data._id === answers[item._id] && !data.isCorrect
                      ? "bg-red-700 text-white"
                      : ""
                  } btn`}
                >
                  {data.option}
                </button>
              ))}
            </div>
          ))}
        </div>
        <Link to="/">
          <button
            className="my-2 p-2 rounded-md text-white bg-blue-400 hover:bg-blue-500"
            onClick={() =>
              dispatch({ type: "SET_CURRENT_QUESTION_INDEX", payload: 0 })
            }
          >
            Go to home
          </button>
        </Link>
      </div>
    </>
  );
};

export { Result };
