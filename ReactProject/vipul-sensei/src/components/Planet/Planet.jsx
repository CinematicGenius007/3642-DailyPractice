export default function Planet({image, ratio, name, onClick}) {
    return (
        <button
            onClick={() => onClick(name, ratio)}
            className={`h-36 sm:h-44 lg:h-64 w-36 sm:w-44 lg:w-64 text-center`}
        >
            <img src={image} alt={name} className={`animate-[spin_5s_ease-in-out_infinite_alternate] mx-auto ${name === "Earth" ? "w-[70%]" : "w-full"}`} />
        </button>
    );
}