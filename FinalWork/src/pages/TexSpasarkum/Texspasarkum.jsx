import "./texspasarkum.css"
import { useNavigate } from "react-router-dom"


function Texspasarkum(){
    let navigate = useNavigate()

    function c(){
        navigate("../contact")
    }
    return (
        <div className="texspasarkum">
<div className="texspasarkum1">     
<h2>Սանտեխնիկներ</h2>
<p>Պահանջվում են  Սանտեխնիկներ մեր տեխսպասարկման բաժնում Աշխատարձը 140000 հազար:</p>
<button onClick={c}>Դիմել</button>
</div>  
<div className="texspasarkum1">     
<h2>Մաքրուհի</h2>
<p>Պահանջվում են մարուհիներ մեր խանութ սրահում 30-50 տարեկան։ Աշխատարձը 140000 հազար:</p>
<button onClick={c}>Դիմել</button>
</div>  
 
        </div>
    )
}

export default Texspasarkum