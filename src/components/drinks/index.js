import { ButtonConf, ButtonGra, ButtonWed, ContainerDrinks, ListDrinks } from "../style";

const { useContext } = require("react");
const {
  ConfraternizationContext,
} = require("../../providers/confraternization/confraternization");
const { DrinksContext } = require("../../providers/drinks/drinks");
const { GraduationContext } = require("../../providers/graduation/graduation");
const { WeddingContext } = require("../../providers/wedding/wedding");

const Drinks = () => {
  const { drinks } = useContext(DrinksContext);
  const { addToCartWedding } = useContext(WeddingContext);
  const { addToCartGraduation } = useContext(GraduationContext);
  const { addToCartConfraternization } = useContext(ConfraternizationContext);

  return (
    <ContainerDrinks>
      <ListDrinks>
        {drinks.map((item, index) => (
          <li key={index}>
            <img alt={item.name} src={item.image_url} />
            <p>Nome: {item.name}</p>
            <p>Início da Fabricação: {item.first_brewed}</p>

            <p>Descrição: {item.description}</p>
            <p>Quantidade de litros: {item.volume.value}L</p>
            
              <ButtonWed onClick={() => addToCartWedding(item)}>
                Add Casamento
              </ButtonWed>
              <ButtonConf onClick={() => addToCartConfraternization(item)}>
                Add Confraternização
              </ButtonConf>
              <ButtonGra onClick={() => addToCartGraduation(item)}>
                Add Formatura
              </ButtonGra>
           
          </li>
        ))}
      </ListDrinks>
    </ContainerDrinks>
  );
};

export default Drinks;
