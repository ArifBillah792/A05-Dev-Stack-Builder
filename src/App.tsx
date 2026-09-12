import Nav from "./components/Nav";
import Banner from "./components/Banner";
import TechnologyCard, { type Technology } from "./components/TechnologyCard";
import { useState, useEffect } from "react";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadTechnologies = async () => {
      const response = await fetch("/technologies.json");
      const data = await response.json();

      setTechnologies(data);
      setLoading(false);
    };

    loadTechnologies();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Nav />
      <Banner />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-10">
        {technologies.map((tech) => (
          <TechnologyCard key={tech.name} technology={tech} />
        ))}
      </div>
    </>
  );
}

export default App;
