import { useState } from "react";
import { Card } from "semantic-ui-react";

const PokemonCard = ({ name, hp, sprites: { front, back } }) => {
  const [isFront, setIsFront] = useState(true);

  return (
    <Card>
      <div onClick={() => setIsFront((curVal) => !curVal)}>
        <div className="image">
          <img src={isFront ? front : back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
};

export default PokemonCard;
