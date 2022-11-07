import SearchBar from "./SearchBar";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <section className="app-container">
      <h1 className="text-center">Stock Images</h1>
      <div>
        <div className="underline"></div>
      </div>
      <SearchBar />
      <Gallery />
    </section>
  );
};

export default Home;
