import "./texspasarkum.css"
import { useNavigate } from "react-router-dom"
import Footer from "../../footer/Footer"

function Texspasarkum(){
    let navigate = useNavigate()

    function c(){
        navigate("../contact")
    }
    return (
        <div>
<div className="eeeee">     
<h2>Սանտեխնիկներ</h2>
<p>Պահանջվում են  Սանտեխնիկներ մեր տեխսպասարկման բաժնում Աշխատարձը 140000 հազար:</p>
<button onClick={c}>Դիմել</button>
</div>  
<div className="eeeee">     
<h2>Մաքրուհի</h2>
<p>Պահանջվում են մարուհիներ մեր խանութ սրահում 30-50 տարեկան։ Աշխատարձը 140000 հազար:</p>
<button onClick={c}>Դիմել</button>
</div>  
     <Footer/>
        </div>
    )
}

export default Texspasarkum