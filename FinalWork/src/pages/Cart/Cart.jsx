import React,{useState} from 'react'
import Footer from '../../footer/Footer';
import "./cart.css"

function Cart({cart, setCart}){
	const [price, setPrice] = useState(0)
      const [count,setCount] = useState(1)
      function incCount(el){
            setCart(cart.map(item =>
                  item.id === el ? { ...item, quantity: item.quantity + 1 } : item
              ));  
          
          
            
      
      }
      function decCount(el){
            setCart(cart.map(item =>
                  item.id === el && item.quantity > 1
                      ? { ...item, quantity: item.quantity - 1 }
                      : item
              )); 
      }

      function deleteItem(id){
            setCart(cart.filter((el)=>el.id != id))
      }

      const calculateTotalPrice = () => {
            return cart.reduce((total, item) => total + item.price * item.quantity, 0);
        };
     
	return(
          <article>
	{
           cart?.map((item)=>(
                 <div className="cart_box" key={item.id}>
                 <h3>{item.title}</h3>
           
                 <div className="cart_img">
                 
                 <img src={item.image}/>
              
                 </div>
                 <div className="prosperous">
                 	<button onClick={()=>incCount(item.id)}>+</button>
                  {item.quantity}
                 	<button onClick={()=>decCount(item.id)}>-</button>
                 </div>
                 <div className="obstacle">
                  <span>{item.price*item.quantity}</span>
                  <button onClick={()=>deleteItem(item.id)}>Ջնջել</button>
                 </div>
                 </div>


           ))}
       <div>
            <span>Ընդհանուր գինը ապրանքների</span>
            <hr></hr>
            <span>ընդհանուր - {calculateTotalPrice()}</span>

       </div>
       <Footer/>
	</article>
	)
}


export default Cart