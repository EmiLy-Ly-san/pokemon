import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const pokedex = [
  {
    name: "Bulbizarre",
    imgSrc: "",
    types: ["", ""],
    description: "Coucou",
  },
];

const typesDatas = [
  {
    name: "normal",
    icon: "",
  },
];

function App() {
  return (
    <>
      <Header />
      <Main pokedex={pokedex} />
      <Footer />
    </>
  );
}

export default App;
