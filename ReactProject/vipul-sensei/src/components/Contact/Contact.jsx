function DetailHead({children}) {
    return (
        <span className="text-center px-2 py-1 bg-neutral-900 text-white rounded w-20 mr-2 inline-block">{children}</span>
    );
}

export default function Contact({name, phone, mail}) {
    return (
        <div className="text-neutral-900 px-4 py-4 space-y-4 text-lg font-medium">
            <div><DetailHead>Name</DetailHead> {name}</div>
            <div><DetailHead>Phone</DetailHead> {phone}</div>
            <div><DetailHead>Mail</DetailHead> {mail}</div>
        </div>
    );
}