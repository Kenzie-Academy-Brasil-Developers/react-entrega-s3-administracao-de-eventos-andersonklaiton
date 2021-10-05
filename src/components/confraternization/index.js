import { useContext } from "react"
import { ConfraternizationContext } from "../../providers/confraternization/confraternization"

const Confraternization = ()=>{
    const {cartConfraternization, removeFromCartConfraternization}= useContext(ConfraternizationContext)

    return(
        <div className="Container_Drinks">
            <div className="List_Drinks">
                {cartConfraternization && cartConfraternization.map((item, index)=>(
                    <li key={index}>
                        <img alt={item.name} src={item.image_url}/>
                        <p>Nome: {item.name}</p>
                        <p>Início fabricação: {item.first_brewed}</p>
                        <p>Descrição: {item.description}</p>
                        <p>Quantidade de litros: {item.volume.value}L</p>
                        <button className="btn_rem" onClick={()=>removeFromCartConfraternization(item)}>Remover Item</button>
                    </li>
                ))}
            </div>
        </div>
    )
}
export default Confraternization