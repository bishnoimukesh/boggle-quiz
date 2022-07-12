import { Link } from "react-router-dom";

const Categorycard = ({category}) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img src={category.img} alt="quiz-category" />
      <div className="px-6 py-4">
        <h2 className="text-gray-700 text-3xl">{category.title}</h2>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">Take this quiz to test yourself</p>
        <p className="text-gray-700 text-base">5 questions</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link to={`/quiz/${category._id}`}>
          <button className="w-[120px] p-2 rounded-md text-white bg-blue-400 hover:bg-blue-500">
            Play Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export { Categorycard };
