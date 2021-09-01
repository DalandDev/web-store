import './Home.css';
import Layout from "../layout/Layout";
import storeImg from "../../img/store.jpg"

import { Link } from 'react-router-dom';

function Home() {
    return (
        <Layout>
            <div id="content">
                <div id="top-container">
                    <div id="text-container">
                        <h1>Welcome to our super weird store.</h1>
                        <Link to="/catalog"><button className="shop-now-btn">Shop Now</button></Link>
                    </div>
                    <div id="img-container">
                        <img src={storeImg}/>
                    </div>
                </div>
                <div id="bottom-container">
                    <div>
                        <h1>Features</h1>
                    </div>
                    <div id="card-container">
                        <div className="feature-card">
                            <i className="fas fa-lock"></i>
                            <h3>Security</h3>
                            <p>Our website is protected by AES-256 encryption.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-shipping-fast"></i>
                            <h3>Shipping</h3>
                            <p>All orders get free and fast shipping.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-hand-holding-usd"></i>
                            <h3>Low Prices</h3>
                            <p>We guarantee the lowest prices for our clients.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;