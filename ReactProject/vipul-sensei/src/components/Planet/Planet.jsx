export default function Planet({image, ratio, name, onClick}) {
    return (
        <button
            onClick={() => onClick(name, ratio)}
            className={`h-24 sm:h-32 lg:h-44 w-36 sm:w-44 lg:w-64 m-8 bg-no-repeat bg-cover bg-center`}
            style={{backgroundImage: `url(${image})`}}
        ></button>
    );
}