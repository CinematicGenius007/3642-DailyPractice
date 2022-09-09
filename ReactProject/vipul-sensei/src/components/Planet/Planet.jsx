export default function Planet({image, size, ratio, name, onClick}) {
    return (
        <button
            onClick={() => onClick(name, ratio)}
            className={`h-32 w-44 m-8 bg-no-repeat bg-cover bg-center`}
            style={{backgroundImage: `url(${image})`}}
        ></button>
    );
}