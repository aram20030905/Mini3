import { useNavigate } from "react-router-dom"
import Footer from "../../footer/Footer"
import "./xanut.css"

function Xanut(){
    let navigate = useNavigate()

    function c(){
        navigate("../contact")
    }
    return (
        <div className="xanut">
     <div className="ssss">     
<h2>Մաքրուհի</h2>
<p>Պահանջվում են մարուհիներ մեր խանութ սրահում 40-50 տարեկան։ Աշխատարձը 140000 հազար:</p>
<button onClick={c}>Դիմել</button>
</div> 

<div className="ssss">     
<h2>Վաճառողուհի</h2>
<p>Պահանջվում են  վաճառողուհիներ մեր խանութ սրահում 25-45 տարեկան։ Աշխատարձը 140000 հազար:</p>
<button onClick={c}>Դիմել</button>
</div>
 <Footer/>
</div>
    
    )
}

export default Xanut