import './ProductPage.css';
import Layout from "../layout/Layout";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateItem } from '../cart/cartSlice';

function ProductPage() {

    const dispatch = useDispatch();
    const catalog = useSelector(state => state.catalog);
    console.log(catalog)
    const { id } = useParams();
    const item = catalog.find(item => item.id === id)
    const formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <Layout>
            <div id="product-content">
                <div id="product-image-container">
                    <img id="product-image" src={item.image}/>
                </div>
                <div id="product-info-container">
                    <h2 id="product-title">{item.name}</h2>
                    <p id="product-price">{formatter.format(item.price)}</p>
                    <p id="product-description">{item.description}</p>
                    <button onClick={() => dispatch(addItem(item.id))} id="add-to-cart">Add To Cart</button>
                </div>
            </div>
        </Layout>
    );
}

export default ProductPage;