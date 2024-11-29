import { NavLink,useNavigate } from "react-router-dom";
import "./navigation.css"

function Navigation({size1}){
    const navigate = useNavigate();
    function set4(){
      navigate("cart")
    }

    function loginadmin(){
        navigate("admin")
    }
    return(
        <div className="menu">
            <NavLink to="about">Մեր Մասին</NavLink>
            <NavLink to="product">Ապրանքներ</NavLink>
            <NavLink to="work">Աշխատանք</NavLink>
            <NavLink to="contact">Կապ</NavLink>
            <NavLink to="admin"  className="adm" onClick={loginadmin}>Ադմին</NavLink>
           <div className="basket" onClick={set4}>
            <i    className="fa fa-shopping-basket" aria-hidden="true"></i>
    
            </div>
                    <span className="a4">{size1}</span>
            </div>
     
    )
}

export default Navigation