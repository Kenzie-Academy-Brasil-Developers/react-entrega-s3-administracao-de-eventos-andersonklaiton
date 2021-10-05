import "../styles.css";

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
    <div className="Container_Drinks">
      <div className="List_Drinks">
        {drinks.map((item, index) => (
          <li key={index}>
            <img alt={item.name} src={item.image_url} />
            <p>Nome: {item.name}</p>
            <p>Início da Fabricação: {item.first_brewed}</p>

            <p>Descrição: {item.description}</p>
            <p>Quantidade de litros: {item.volume.value}L</p>
            
              <button className="btn_wed" onClick={() => addToCartWedding(item)}>
                Add Casamento
              </button>
              <button className="btn_conf" onClick={() => addToCartConfraternization(item)}>
                Add Confraternização
              </button>
              <button className="btn_gra" onClick={() => addToCartGraduation(item)}>
                Add Formatura
              </button>
           
          </li>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
