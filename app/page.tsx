import Hello from "./components/hello";

export default function Home() { 
  console.log("hello world");
  return (
    <>
    <h1 className="text-3xl">NEXT JS</h1>
    <Hello />
  </>
  );
}
