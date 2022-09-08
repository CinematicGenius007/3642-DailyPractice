import About from "../About/About";

const contactDetails = [
    {
        "name": "Ayush",
        "phone": 897928373,
        "mail": "ayush3642.be20@chitkara.edu.in"
    },
    {
        "name": "Vipul",
        "phone": 8974558373,
        "mail": "vipul3299.be20@chitkara.edu.in"
    },
    {
        "name": "Harsh",
        "phone": 9872983784,
        "mail": "harsh3649.be20@chitkara.edu.in"
    },
    {
        "name": "Sauvit",
        "phone": 7923982303,
        "mail": "sauvit3983.be20@chitkara.edu.in"
    },
    {
        "name": "Swayam",
        "phone": 6923901829,
        "mail": "swayam3682.be20@chitkara.edu.in"
    }
];

export default function Home() {
    return (
        <div className="w-full min-h-screen flex flex-wrap items-center justify-center px-8 py-12">
            {contactDetails.map((details, i) => (
                <About details={details} key={i} />
            ))}
        </div>
    );
}