import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex justify-center items-center mt-20 ">
          <div className="text-center ">
          <h1 className="text-4xl font-bold my-10 ">Oops !!! This is Error Page</h1>
            
            <Link to={'/'}><button className="btn  bg-slate-400 text-lg font-bold px-2 py-3 rounded-md">Go To Home</button></Link>
          </div>
        </div>
    );
};

export default Error;