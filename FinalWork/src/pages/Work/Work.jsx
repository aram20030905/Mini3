import "./work.css"
import image1 from "../../image/1.jpg"
import image2 from "../../image/2.jpg"
import image3 from "../../image/3.jpg"
import image4 from "../../image/4.jpg"
import { useNavigate } from "react-router-dom"


function Work() {
    let navigate = useNavigate()
    function f1() {
        navigate("xanut")
    }

    function f2() {
        navigate("artadramas")
    }

    function f3() {
        navigate("araqum")
    }
    function f4() {
        navigate("texspasarkum")
    }
    return (
        <div>


            <div className="work">
            

                <div className="works" onClick={f1}>
                <h2>Խանութներում</h2>

                    <img src={image1} height="350px" width="350px" />

                </div>





           
                <div className="works" onClick={f2} >
                <h2>Արտադրամասերում</h2>
                    <img src={image2} height="350px" width="350px" />
                </div>



             
                <div className="works" onClick={f3}>
                <h2>Առաքում</h2>

                    <img src={image3} height="350px" width="350px" />
                </div>





                <div className="works" onClick={f4}>

                <h2>Տեխնիկական սպասարկում</h2>

                    <img src={image4} height="350px" width="350px" />


                </div>
            </div>
      
        </div>


    )
}
export default Work