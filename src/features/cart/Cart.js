import './Cart.css';
import Layout from "../layout/Layout";
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateItem } from './cartSlice';
import { useState, useEffect } from 'react';

function Cart() {
    const cart = useSelector(state => state.cart);
    const catalog = useSelector(state => state.catalog);
    const dispatch = useDispatch();
    const formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        cart.forEach(item => {
            const itemData = catalog.find(product => product.id === item.id);
            total += item.quantity * itemData.price;
        })
        setTotalPrice(total);
    }, [cart, catalog])

    if (cart.length === 0) {
        return (
            <Layout>
                <div id="content">
                    <h1>Cart</h1>
                    <div id="cart-items">
                        <h2>Your cart is empty.</h2>
                    </div>
                </div>
            </Layout>
        )
    }
    else {
        return (
            <Layout>
                <div id="content">
                    <h1>Cart</h1>
                    <div id="cart-items">
                        {cart.map(item => {
                            const itemData = catalog.find(product => product.id === item.id)
                            return (
                                <div className="cart-item" key={item.id}>
                                    <div className="cart-img">
                                        <img src={itemData.image}></img>
                                    </div>
                                    <div className="cart-info">
                                        <p className="cart-name">{itemData.name}</p>
                                        <p className="cart-price">{formatter.format(itemData.price)}</p>
                                    </div>
                                    <div className="cart-input">
                                        <input type="number" min="1" onChange={(e) => dispatch(updateItem({ id: item.id, quantity: parseInt(e.target.value) }))} value={item.quantity}></input>
                                        <button className="delete-item" onClick={() => dispatch(removeItem(item.id))}><i className="fas fa-times"></i></button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div id="cart-checkout">
                        <h2 id="cart-total">Cart Total: {formatter.format(totalPrice)}</h2>
                        <button id="checkout-btn">Checkout</button>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Cart;
