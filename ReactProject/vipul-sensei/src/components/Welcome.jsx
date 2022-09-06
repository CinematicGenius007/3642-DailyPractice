export default function Welcome({User}) {
  return (
    <div className="flex-1 px-8 pb-20 flex flex-col justify-center items-center text-7xl text-cyan-400 ">Welcome {(User && User.Name) || "Hacker!"}</div>
  );
}