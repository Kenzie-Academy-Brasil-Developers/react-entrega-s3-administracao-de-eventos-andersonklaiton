import { useContext } from "react";
import { WeddingContext } from "../../providers/wedding/wedding";

const Wedding = () => {
  const { removeFromCartWedding, cartWedding } = useContext(WeddingContext);

  return (
    <div className="Container_Drinks">
      <div className="List_Drinks">
        {cartWedding &&
          cartWedding.map((item, index) => (
            <li key={index}>
              <img alt={item.name} src={item.image_url} />
              <p>Nome: {item.name}</p>
              <p>Início fabricação: {item.first_brewed}</p>
              <p>Descrição: {item.description}</p>
              <p>Quantidade de litros: {item.volume.value}L</p>
              <button className="btn_rem" onClick={() => removeFromCartWedding(item)}>
                Remover Item
              </button>
            </li>
          ))}
      </div>
    </div>
  );
};
export default Wedding;
