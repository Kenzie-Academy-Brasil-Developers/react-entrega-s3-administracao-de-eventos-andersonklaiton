import { useContext } from "react";
import { WeddingContext } from "../../providers/wedding/wedding";
import { ButtonRem, ContainerDrinks, ListDrinks } from "../style";

const Wedding = () => {
  const { removeFromCartWedding, cartWedding } = useContext(WeddingContext);

  return (
    <ContainerDrinks>
      <ListDrinks>
        {cartWedding &&
          cartWedding.map((item, index) => (
            <li key={index}>
              <img alt={item.name} src={item.image_url} />
              <p>Nome: {item.name}</p>
              <p>Início fabricação: {item.first_brewed}</p>
              <p>Descrição: {item.description}</p>
              <p>Quantidade de litros: {item.volume.value}L</p>
              <ButtonRem onClick={() => removeFromCartWedding(item)}>
                Remover Item
              </ButtonRem>
            </li>
          ))}
      </ListDrinks>
    </ContainerDrinks>
  );
};
export default Wedding;
