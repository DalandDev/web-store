import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductPreview(props) {

    const [show, setShow] = useState(false);
    const formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div className="product-preview" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <div className="img-container">
                <Link to={`/product/${props.id}`}><img src={props.image} /></Link>
            </div>
            <div className="info-container">
                <div>
                    <p className="product-name">{props.name}</p>
                    <p className="product-price">{formatter.format(props.price)}</p>
                </div>
                <div>
                    {show ? <button onClick={() => props.handleClick()} id="add-to-cart-btn"><i className="fas fa-cart-plus"></i></button> : null}
                </div>
            </div>
        </div>
    );
}

export default ProductPreview;