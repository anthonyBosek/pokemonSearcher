import { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const PokemonPage = () => {
  const [pokeArr, setPokeArr] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    const getData = () => {
      fetch("http://localhost:3001/pokemon")
        .then((resp) => resp.json())
        .then((data) => setPokeArr(data))
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  const handleChange = (e) => setSearchTxt(e.target.value);

  const handleAdd = (newObj) => setPokeArr((curVal) => [newObj, ...curVal]);

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAdd={handleAdd} />
      <br />
      <Search searchTxt={searchTxt} handleChange={handleChange} />
      <br />
      <PokemonCollection pokeArr={pokeArr} searchTxt={searchTxt} />
    </Container>
  );
};

export default PokemonPage;
