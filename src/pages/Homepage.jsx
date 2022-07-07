import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className='md:container md:m-auto h-[90vh]'>
          <div className="md:container md:m-auto flex justify-center items-center flex-wrap h-[90vh]">
              <img className="img-responsive"  src={''} alt="Quiz Wallpaper" />
              <div className="flex flex-col justify-center items-center mx-4 font-medium text-xl">
                  Do you wanna test your knowledge? <br />
                  Try out the quizzes
                  <button className="w-[120px] p-2 rounded-md text-white bg-blue-400 hover:bg-blue-500 m-6">
                      <Link to="/categories">
                          Explore
                      </Link>
                  </button>
              </div>
          </div>
      </div>
    </>
  );
};

export { Homepage };
