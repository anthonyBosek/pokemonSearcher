import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

const PokemonCollection = ({ pokeArr, searchTxt }) => {
  const filterByName = pokeArr.filter(
    (pokeObj) => searchTxt === "" || pokeObj.name.startsWith(searchTxt)
  );

  const allCards = filterByName.map((pokeObj) => (
    <PokemonCard key={pokeObj.id} {...pokeObj} />
  ));

  return <Card.Group itemsPerRow={6}>{allCards}</Card.Group>;
};

export default PokemonCollection;
