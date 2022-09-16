import {useState} from "react";

const Form = () => {
    const [data, setData] = useState({
        name: "",
        number: 0,
    });

    const [formSuccess, setFormSuccess] = useState(false);

    const formSubmission = (e) => {
        e.preventDefault();
        if (data.name && data.number) {
            setFormSuccess(true);
            setTimeout(() => {
                setData({name: "", number: 0});
                setFormSuccess(false);
            }, 2000);
        }
    };

    return (
        <div className="p-12">
            <h1 className="text-5xl font-black leading-relaxed text-yellow-600">Please let us invade your privacy 😊</h1>
            <form onSubmit={formSubmission} className="block max-w-2xl mx-auto p-8 bg-amber-400 my-10 rounded">
                <label className="text-cyan-800 text-2xl font-bold inline-block mx-4">Your Name: </label>
                <input
                    className="inline-block font-black py-1 px-3 text-lg border-2 border-yellow-500 rounded outline-0 m-4 bg-cyan-800 text-yellow-400"
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({...data, name: e.currentTarget.value})}
                />
                <br />
                <label className="text-cyan-800 text-2xl font-bold inline-block mx-4 mt-4">Your Contact: </label>
                <input
                    className="inline-block font-black py-1 px-3 text-lg border-2 border-yellow-500 rounded m-4 outline-0 bg-cyan-800 text-yellow-400"
                    type="number"
                    value={data.number}
                    onChange={(e) => setData({...data, number: Number(e.currentTarget.value)})}
                />
                <button
                    className={`block mt-6 mx-auto font-black text-xl duration-1000 transition-all border-2 border-cyan-800 ${!formSuccess ? "normal-button" : "success-button"}`}
                >
                    {!formSuccess ? "Invade" : <i className="fas fa-thumbs-up text-xl"></i>}
                </button>
            </form>
        </div>
    );
};


export default Form;