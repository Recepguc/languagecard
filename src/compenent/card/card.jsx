import { languages } from "../../Helpers/data"
import Item from "../item/item.jsx"
import "./card.css"

const Card =()=>{
    return(
        <div className="cards-area-container">
            <div></div>
            <h5 className="language-title">Languages</h5>
            <div className="cards-container">
            {languages.map((item,index)=>{
                return <Item card={item} key={index}/>;
            })}
            </div>
          
            
        </div>
        
    )
}

export default Card