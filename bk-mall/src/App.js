import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [detail, setDatail] = useState({});

    const fetchProducts = async () => { 
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchRetrieveProduct = async (productId) => {
        const product = await commerce.products.retrieve(productId);
        
        setDatail(product);
    }

const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, {quantity});
        
        setCart(cart)
    }

    const handleRemoveFromUpdate = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);


    return(
        <Router>
            <div>
                <Navbar totalItems={cart.total_items}/>
                <Switch>
                    <Route exact path="/">
                        <Products 
                            products={products} 
                            onAddToCart={handleAddToCart}
                            fetchProduct={fetchRetrieveProduct}
                        />
                    </Route>
                    <Route exact path="/cart">
                        <Cart 
                            products={products}
                            cart={cart} 
                            handleUpdateCartQty={handleUpdateCartQty} 
                            handleRemoveFromUpdate={handleRemoveFromUpdate}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Route exact path="/checkout">

                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;