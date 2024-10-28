import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const pokedex =[
  {
    name: "Bulbizarre",
    imgSrc:"",
    types: ["",""],
    description:
  }
]


const pokemonList = [
  {
     
  },
  {
    name: "Herbizarre",
    imgSrc:
  },
  {
    name: "FLorizarre",
    imgSrc:
  },
  {
    name: "Salamèche",
    imgSrc:
  },
  {
    name: "Mew",
  },
];


function App() {
  return <>
   <Header />
   <Main pokedex={pokedex}/>
   <Footer />
  </>;
}

export default App;
