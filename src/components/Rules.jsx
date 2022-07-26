import { Nav } from "../components/Nav";
import { useParams , Link } from "react-router-dom"

const Rules = ({setShowRules}) => {

  const startHandler = () => {
      setShowRules(false);
  }

  return (
    <>
    <div className="flex flex-col m-4">
        <h1 className="flex justify-center align-items-center mt-6 text-3xl">Rules</h1>
        <div className="mt-4 p-4 border-solid border-2 border-sky-500">
            <div className="flex flex-col justify-center align-items-center">
              <li className="">Each correct answer scores 10 Points</li>
              <li>
                There are multiple correct questions each has only one correct
                options.
              </li>
              <li>
                To win the quiz you need to score more than 70%.
              </li>
          </div>
          <button className="w-[120px] mt-4 p-2 rounded-md text-white bg-blue-400 hover:bg-blue-500" onClick={startHandler}>
            Start Quiz
          </button>
        </div>
      </div>
    </>
  );
};

export { Rules };
