import "./App.css";

const hour = new Date().getHours();
document.body.classList.add(hour >= 6 && hour < 18 ? "day" : "night");

function getFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0"); // Ensure 2 digits
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = today.getFullYear();

  console.log(hour);

  return `${day}.${month}.${year}`;
}

function App() {
  return (
    <>
      <section>
        <h3>
          Hello my name is: <span>{prompt("Write your name")}</span>
        </h3>
        <h3>
          This is the day: <span>{getFormattedDate()}</span>
        </h3>
        <h3>A random number from 0 to 100:</h3>
        <h1>{Math.floor(Math.random() * 101)}</h1>
      </section>
    </>
  );
}

export default App;
