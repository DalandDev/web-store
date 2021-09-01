import './Catalog.css';
import Layout from "../layout/Layout";
import ProductPreview from "../product-preview/ProductPreview"

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addProduct, removeProduct } from './catalogSlice';
import { addItem, removeItem, updateItem } from '../cart/cartSlice';

function Catalog() {

    const catalog = useSelector(state => state.catalog);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <Layout>
            <div id="content">
                <h1>Catalog</h1>
                <div id="product-grid">
                    {catalog.map((item) => <ProductPreview key={item.id} handleClick={() => dispatch(addItem(item.id))} image={item.image} id={item.id} name={item.name} price={item.price}/>)}
                </div>
            </div>
        </Layout>
    );
}

export default Catalog;