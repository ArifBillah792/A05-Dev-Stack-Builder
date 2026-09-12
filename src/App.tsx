import Nav from "./components/Nav";
import Banner from "./components/Banner";
import TechnologyCard from "./components/TechnologyCard";

const techList = [
  {
    name: "React",
    category: "Frontend",
    description: "A declarative library for building UIs.",
    icon: "https://icon.icepanel.io/Technology/svg/React.svg",
    rating: 4.9,
    difficulty: "Beginner-Friendly",
    badge: "Popular",
  },

  {
    name: "Vue.js",
    category: "Frontend",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    icon: "https://icon.icepanel.io/Technology/svg/Vue.js.svg",
    rating: 4.8,
    difficulty: "Beginner-Friendly",
    badge: "Versatile",
  },

  {
    name: "Svelte",
    category: "Frontend",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    icon: "https://icon.icepanel.io/Technology/svg/Svelte.svg",
    rating: 4.8,
    difficulty: "Intermediate",
    badge: "Fast",
  },

  {
    name: "Docker",
    category: "DevOps",
    description:
      "A platform for packaging applications into lightweight, portable containers for consistent deployment.",
    icon: "https://icon.icepanel.io/Technology/svg/Docker.svg",
    rating: 4.7,
    difficulty: "Advanced",
    badge: "Containers",
  },
];

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-10">
        {techList.map((tech) => (
          <TechnologyCard key={tech.name} technology={tech} />
        ))}
      </div>
    </>
  );
}

export default App;
