import { useState } from "react";
import { Form } from "semantic-ui-react";

const PokemonForm = ({ handleAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    front: "",
    back: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, hp, front, back } = formData;

    const newPoke = {
      name,
      hp,
      sprites: {
        front,
        back,
      },
    };

    if (Object.values(formData).every((el) => el !== "")) {
      fetch("http://localhost:3001/pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPoke),
      })
        .then((resp) => resp.json())
        .then((data) => {
          handleAdd(data);
          setFormData({
            name: "",
            hp: "",
            front: "",
            back: "",
          });
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please complete form!");
    }
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={formData.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={formData.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={formData.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
};

export default PokemonForm;
