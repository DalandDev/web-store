import './Layout.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

function Layout(props) {
  const cart = useSelector(state => state.cart);
  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    let quantity = 0;
    cart.forEach(item => {
      quantity += parseInt(item.quantity);
    })
    setItemQuantity(quantity);
  }, [cart])

  return (
    <div id="main">
      <div id="header">
        <div id="logo">
          <h1 className="fas fa-store"></h1>
          <Link to="/" className="link"><h1>Random Store</h1></Link>
        </div>
        <div id="nav-bar">
          <p><Link className="link" to="/">Home</Link></p>
          <p><Link className="link" to="/catalog">Catalog</Link></p>
          <p><Link className="link" to="/cart" ><i className="fas fa-shopping-cart"><span id="cart-quantity">{itemQuantity}</span></i></Link></p>
        </div>
      </div>
      <div id="content-container">
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
