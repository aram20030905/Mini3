import { useEffect, useState } from "react"
import Footer from "../../footer/Footer"
import "./product.css"

function Product({handleClickItem}){
    let [product,setProduct]=useState([])

    useEffect(()=>{
       const fetchData= async()=>{
        try{
       const response= await fetch('http://localhost:8000/productData')
       const data= await response.json()
       setProduct(data)
        }
        catch(error){
            console.log('Error')
        }
     
    }
    fetchData()
},[])



    
    return (
        <div>
        <div className="Product">
{product.map((el)=>{
    return(
        <div key={el.id} className="aa">
            <img src={el.image}/>
            <h2><span>Անվանում:</span>{el.title}</h2>
            <h2><span>Գին:</span>{el.price}</h2>
            <p><span>Նկարագրություն:</span>{el.description}</p>
            <button className="MyBtn" onClick={()=>handleClickItem(el)}>Գնել</button>

        </div>
    )

})}

</div>

        </div>
       
    )
}

export default Product