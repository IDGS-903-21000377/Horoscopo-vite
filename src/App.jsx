import { useState } from "react";
import "./App.css";

function getZodiacSign(date) {
  const m = date.getMonth() + 1;
  const d = date.getDate();

  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return "Aries";
  if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return "Tauro";
  if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) return "Géminis";
  if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) return "Cáncer";
  if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return "Leo";
  if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return "Virgo";
  if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) return "Libra";
  if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) return "Escorpio";
  if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) return "Sagitario";
  if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return "Capricornio";
  if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return "Acuario";
  if ((m === 2 && d >= 19) || (m === 3 && d <= 20)) return "Piscis";
  return null;
}

const messages = {
  Aries: "Hoy toca moverte con decisión. Aprovecha la energía.",
  Tauro: "Calma y paso firme: prioriza lo que te da estabilidad.",
  Géminis: "La comunicación te abre puertas: habla claro.",
  Cáncer: "Cuida tus emociones, busca soporte cercano.",
  Leo: "Brilla con humildad: alguien te va a notar.",
  Virgo: "Organiza una tarea y la semana te lo agradecerá.",
  Libra: "Busca equilibrio: a veces decir no es necesario.",
  Escorpio: "Intensidad controlada: canaliza la pasión.",
  Sagitario: "Curiosidad y movimiento: aprende algo nuevo.",
  Capricornio: "Disciplina hoy = frutos mañana.",
  Acuario: "Piensa distinto, comparte tu idea.",
  Piscis: "Crea algo: tu imaginación está activa.",
};

function App() {
  const [date, setDate] = useState("");
  const [sign, setSign] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const birthDate = new Date(date);
    const zodiac = getZodiacSign(birthDate);
    setSign(zodiac);
  };

  return (
    <div className="app">
      <h1>✨ Tu Horóscopo ✨</h1>
      <form onSubmit={handleSubmit}>
        <label>Introduce tu fecha de nacimiento:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Ver mi signo</button>
      </form>

      {sign && (
        <div className="result">
          <h2>Tu signo zodiacal es: {sign}</h2>
          <p>{messages[sign]}</p>
        </div>
      )}
    </div>
  );
}

export default App;
