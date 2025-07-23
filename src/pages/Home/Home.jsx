import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex justify-center">
           <Link to="/testimonial" className=" mt-40 block  text-white bg-cyan-900 p-3 rounded-2xl w-30 animate-pulse font-bold">Testimonials</Link>
        </div>
    );
};

export default Home;