import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="w-full py-6 px-10 flex justify-between">
            <Link to="/" className="mx-6"><i className="fal fa-home text-3xl"></i></Link>
            <div className="text-4xl">DUMMY</div>
            <Link to="/about"  className="mx-6"><i className="fal fa-info-circle text-3xl"></i></Link>
        </div>
    );
}