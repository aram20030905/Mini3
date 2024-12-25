import { Routes, Route } from 'react-router-dom';
import Product from '../pages/Product/Product.jsx';
import Work from '../pages/Work/Work.jsx';
import Contact from '../pages/Contact/Contact.jsx';
import AdminPage from '../pages/AdminPage/AdminPage.jsx';
import Admin from '../pages/Admin/Admin.jsx';
import Layout from '../Layout/Layout.jsx';
import About from '../pages/About/About.jsx';
import Cart from '../pages/Cart/Cart.jsx'
import Araqum from '../pages/Araqum/Araqum.jsx'
import Texspasarkum from '../pages/TexSpasarkum/Texspasarkum.jsx'
import Artadramas from '../pages/Artadramasserum/Artadramas.jsx'
import Xanut from '../pages/Xanutnerum/Xanut.jsx'
import {  useState, useEffect } from "react"
import "./routese.css"

function Routese() {
const [cart, setCart] = useState([]); 
    const [warning, setWarning] = useState(false)


useEffect(() => {
        if (warning) {
            const timer = setTimeout(() => setWarning(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [warning]);


    function handleClickItem(item) {
        let isPresent = cart.some((product) => item.id === product.id);
        if (!isPresent) {
            setCart([...cart, item]);
            setWarning(true)

        }
        else{
               setWarning(false)

        }
     
    }

return (
        <>
            <Routes>
                <Route path="/" element={<Layout size={cart.length} />}>

                    <Route index path="about" element={<About />} />
                    <Route path="product" element={<Product handleClickItem={handleClickItem} />} />
                    <Route path="work" element={<Work />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="admin" element={<AdminPage />} />
                    <Route path="adm" element={<Admin />} />



                    <Route path="work/artadramas" element={<Artadramas />} />
                    <Route path="work/xanut" element={<Xanut />} />
                    <Route path="work/texspasarkum" element={<Texspasarkum />} />
                    <Route path="work/araqum" element={<Araqum />} />
                    <Route path="cart" element={<Cart cart={cart} setCart={setCart} />}/>
                    
                </Route>
            </Routes>
            {warning && <p className="warning">This product is already in the basket.</p>}
        </>
    );
}

export default Routese;