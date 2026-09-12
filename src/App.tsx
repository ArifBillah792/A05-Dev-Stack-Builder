import Nav from "./components/Nav";
import Banner from "./components/Banner";
import TechnologyCard from "./components/TechnologyCard";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-10">
        <TechnologyCard />
        <TechnologyCard />
        <TechnologyCard />
      </div>
    </>
  );
}

export default App;
