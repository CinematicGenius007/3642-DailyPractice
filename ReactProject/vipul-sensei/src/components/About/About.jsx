import Contact from "../Contact/Contact";

export default function About({details}) {
    return (
        <div className="border-2 border-neutral-900 p-4 rounded my-8 mx-4 max-w-lg">
            <div className="text-4xl font-bold text-neutral-900 px-5 py-2">About</div>
            <Contact name={details.name} phone={details.phone} mail={details.mail} />
        </div>
    );
}