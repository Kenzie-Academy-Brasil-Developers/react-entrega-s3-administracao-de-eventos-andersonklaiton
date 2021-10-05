import { useContext } from "react";
import { GraduationContext } from "../../providers/graduation/graduation";

const Graduation = () => {
  const { cartGraduation, removeFromCartGraduation } =
    useContext(GraduationContext);

  return (
    <div className="Container_Drinks">
      <div className="List_Drinks">
        {cartGraduation && cartGraduation.map((item, index) => (
          <li key={index}>
            <img alt={item.name} src={item.image_url} />
            <p>Nome: {item.name}</p>
            <p>Início fabricação: {item.first_brewed}</p>
            <p>Descrição: {item.description}</p>
            <p>Quantidade de litros: {item.volume.value}L</p>
            <button className="btn_rem" onClick={() => removeFromCartGraduation(item)}>
              Remover Item
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};
export default Graduation;
