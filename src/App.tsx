import Nav from "./components/Nav";
import Banner from "./components/Banner";
import TechnologyCard, { type Technology } from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
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

      <div className="px-8 pt-16">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Explore the <span className="bg-linear-to-r from-pink-500
           to-fuchsia-600 bg-clip-text text-transparent">Technologies</span>
        </h2>

        <p className="text-gray-500 mt-2"> Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-8 py-10">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.name} technology={tech} />
          ))}
        </div>

        <div className="lg:col-span-1">
          <YourStack />
        </div>
      </div>
    </>
  );
}

export default App;
