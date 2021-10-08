import { useContext } from "react";
import { GraduationContext } from "../../providers/graduation/graduation";
import { ButtonRem, ContainerDrinks, ListDrinks } from "../style";

const Graduation = () => {
  const { cartGraduation, removeFromCartGraduation } =
    useContext(GraduationContext);

  return (
    <ContainerDrinks>
      <ListDrinks>
        {cartGraduation && cartGraduation.map((item, index) => (
          <li key={index}>
            <img alt={item.name} src={item.image_url} />
            <p>Nome: {item.name}</p>
            <p>Início fabricação: {item.first_brewed}</p>
            <p>Descrição: {item.description}</p>
            <p>Quantidade de litros: {item.volume.value}L</p>
            <ButtonRem onClick={() => removeFromCartGraduation(item)}>
              Remover Item
            </ButtonRem>
          </li>
        ))}
      </ListDrinks>
    </ContainerDrinks>
  );
};
export default Graduation;
