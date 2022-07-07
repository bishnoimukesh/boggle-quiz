import { Nav } from "../../components/Nav/Nav";
import { useParams , Link } from "react-router-dom"
import "./Rules.css";
const Rules = ({setShowRules}) => {

  const startHandler = () => {
      setShowRules(false);
  }

  return (
    <>
      <div className="">
        <h1>Rules</h1>
        <div className="">
          <div className="">
            <i className="">label_important</i>
            <li className="">Each correct answer scores 10 Points</li>
          </div>
          <div className="">
            <i className="">label_important</i>
            <li className="">
              There are multiple correct questions each has only one correct
              options.
            </li>
          </div>
          <div className="">
            <i className="">label_important</i>
            <li className="">
              To win the quiz you need to score more than 70%.
            </li>
          </div>
        </div>
        <button className="" onClick={startHandler}>
          Start Quiz
        </button>
      </div>
    </>
  );
};

export { Rules };
