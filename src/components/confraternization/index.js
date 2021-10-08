import { useContext } from "react";
import { ConfraternizationContext } from "../../providers/confraternization/confraternization";
import { ButtonRem, ContainerDrinks, ListDrinks } from "../style";

const Confraternization = () => {
  const { cartConfraternization, removeFromCartConfraternization } = useContext(
    ConfraternizationContext
  );

  return (
    <ContainerDrinks>
      <ListDrinks>
        {cartConfraternization &&
          cartConfraternization.map((item, index) => (
            <li key={index}>
              <img alt={item.name} src={item.image_url} />
              <p>Nome: {item.name}</p>
              <p>Início fabricação: {item.first_brewed}</p>
              <p>Descrição: {item.description}</p>
              <p>Quantidade de litros: {item.volume.value}L</p>
              <ButtonRem onClick={() => removeFromCartConfraternization(item)}>
                Remover Item
              </ButtonRem>
            </li>
          ))}
      </ListDrinks>
    </ContainerDrinks>
  );
};
export default Confraternization;
