
import './footer.css'

import image100 from '../image/6.png'
import image101 from '../image/7.png'
import image102 from '../image/8.png'
import image103 from '../image/9.png'
function Footer(){
    return(
        <div className='footer'>
<div className='footerImage'>
    <img src={image100}/>
    <img src={image101}/>
    <img src={image102}/>
    <img src={image103}/>

</div>
<div className="text1000"><p>Copywriting by 2024</p>
</div>
        </div>
       
    )
}

export default Footer