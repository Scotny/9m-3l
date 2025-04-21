import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [date, setDate] = useState("");
  const [random, setRandom] = useState(0);

  useEffect(() => {
    // Set day or night class on body
    const hour = new Date().getHours();
    document.body.classList.add(hour >= 6 && hour < 18 ? "day" : "night");

    // Get and set date
    const today = new Date();
    const formatted = `${String(today.getDate()).padStart(2, "0")}.${String(
      today.getMonth() + 1
    ).padStart(2, "0")}.${today.getFullYear()}`;
    setDate(formatted);

    // Ask for name
    const name = prompt("Write your name");
    setUserName(name);

    // Set random number
    setRandom(Math.floor(Math.random() * 101));
  }, []);

  return (
    <section>
      <h3>
        Hello my name is: <span>{userName}</span>
      </h3>
      <h3>
        This is the day: <span>{date}</span>
      </h3>
      <h3>A random number from 0 to 100:</h3>
      <h1>{random}</h1>
    </section>
  );
}

export default App;
