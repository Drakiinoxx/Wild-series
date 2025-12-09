import { useEffect, useState } from "react";
import "./Program.css";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    console.log("Fetch lancé");
    fetch("/api/programs")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data reçue:", data);
        setPrograms(data);
      })
      .catch((error) => console.error("Erreur:", error));
  }, []);

  return (
    <article>
      {programs.map((program) => (
        <div key={program.id}>
          <img src={program.poster} alt={program.title} />
          <p>{program.title}</p>
          <p>{program.synopsis}</p>
          <p>{program.country}</p>
          <p>{program.year}</p>
        </div>
      ))}
    </article>
  );
}

export default Programs;
