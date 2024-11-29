import "./araqum.css"
import { useNavigate } from "react-router-dom"

function Araqum(){

    let navigate = useNavigate()

    function c(){
        navigate("../contact")
    }
    return (
        <div>
<div className="ccccc">     
<h2>Առաքիչ</h2>
<p>Պահանջվում են առաքիչներ առաքում կատարելու համար 40-50 տարեկան։ Աշխատարձը 140000 հազար:</p>
<button onClick={c}>Դիմել</button>
</div>  
<div className="ccccc">     
<h2>Հաշվապահներ</h2>
<p>Պահանջվում են Հաշվապահներ մեր առաքման բաժնում 40-50 տարեկան։  Աշխատարձը 140000 հազար:</p>
<button onClick={c}>Դիմել</button>
</div>  
<div className="ccccc">     
<h2>Մաքրուհի</h2>
<p>Պահանջվում են մարուհիներ մեր առաքման բաժնում 40-50 տարեկան։ Աշխատարձը 140000 հազար:</p>
<button onClick={c}>Դիմել</button>
</div>  
        </div>
    )
}

export default Araqum