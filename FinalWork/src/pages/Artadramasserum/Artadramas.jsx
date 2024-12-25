import "./artadramas.css"
import { useNavigate } from "react-router-dom"


function Artadramas(){

    let navigate = useNavigate()

    function c(){
        navigate("../contact")
    }
    return (
        <div className="artadramas" >
<div className="artadramas1">     
<h2>Արտադրամասի պետ</h2>
<p>Պահանջվում են Արտադրամասի պետ մեր արտադրամասերում 40-50 տարեկան: Աշխատարձը 180000 հազար:</p>
<button onClick={c}>Դիմել</button>
</div>  
<div className="artadramas1">     
<h2>Մաքրուհի</h2>
<p>Պահանջվում են մարուհիներ մեր արտադրանասում 30-50 տարեկան։ Աշխատարձը 140000 հազար:</p>
<button onClick={c}>Դիմել</button>
</div>  
<div className="artadramas1">     
<h2>Արտադրամասի բանվոր</h2>
<p>Պահանջվում են Արտադրամասի բաբվորներ մեր արտադրամասում 25-50 տարեկան: Աշխատարձը 90000 հազար:</p>
<button onClick={c}>Դիմել</button>
</div> 

        </div>
    )
}

export default Artadramas