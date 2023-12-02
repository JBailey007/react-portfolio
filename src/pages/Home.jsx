import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Navigation />
      </div>
      <div>
        <Project />
      </div>
    </div>
  );
};

export default Home;
