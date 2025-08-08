'use client';

export default function Home() {
  return (
   <div>
    hi
    <br />
    <h1>Welcome to the Home Page</h1>
    <button onClick={buttonClicked} style={{ backgroundColor: 'blue', color: 'white' }}>Click me</button>
    </div>
  );
}


function buttonClicked() {
 alert("Button clicked!");
}