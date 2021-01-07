import react from 'react'

const  Navbar =()=>{
    return (
<nav>
    <ul className="left">
     <li>
    <a href="">Bangladesh</a>
    </li>
    </ul>
    <ul className="right">
        <li><a href="">
          <span className="shoppingCart">cart<span className="cartCount">(0)</span></span>
        </a>

        </li>
   </ul>

</nav>
    )
}

export default Navbar ;