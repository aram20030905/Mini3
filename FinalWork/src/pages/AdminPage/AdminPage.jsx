import "./adminpage.css"
import {  useNavigate } from "react-router";
import {useState, useRef} from "react";

function AdminPage(){
    let navigate1 = useNavigate()
    const [error,setError] = useState("")
    const [failedAttempts, setFailedAttempts] = useState(0);
    let a=useRef()
    let b=useRef()
    function handlerSubmit(el){
        el.preventDefault()
       let password=el.target.password.value



        if(password==="admin1234")
        {
            setError("")
            setFailedAttempts(0)
          navigate1("/adm") 
                  
        }
        else{
           
          setFailedAttempts(prevAttempts => prevAttempts + 1);
        
         if(failedAttempts>=2){
            setError("Դուք ադմինը չէք")
            a.current.classList.add("pv")
            b.current.classList.add("pv")
        }
        
        else{
              setError("Սխալ Ծածկագիր")
        }
    }
        el.target.reset()

    
}
    return(

        <div >
    <form className="Login" onSubmit={handlerSubmit}>
        <input ref={a}  name="password" type="password" placeholder="Enter Admin Password ..."></input>
        <button ref={b} type="submit">Ուղղարկել</button>
       
    </form>
    
    <p>{error}</p>
</div>
    )
}
export default AdminPage