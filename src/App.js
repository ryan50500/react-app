import Menu from './components/Menu';
import Modal from './components/Modal';
import CartIcon from './components/CartIcon';
import CartPage from './components/CartPage';
import mainStyles from './index.css';
import {useState} from 'react';


const App = () => {
    const [modal, setModal] = useState(false);
    const [index, setIndex] = useState(0);
    const [CartIconClicked, setCartIconClicked] = useState(false);
    const [cart, setCart] = useState([]);

    
    const addToCart = (takeaway, quantity, totalCost, takeawayImage) => {
        // if item is already in cart... 
        let takeawayExists = cart.find(cartObjects => cartObjects.takeaway === takeaway);
        if (takeawayExists) {
            
            setCart(prevState => {
                // Loop over cart (prevState gets whatever is already in the cart and starts to loop over it with map)
                return prevState.map((item) => {
                    // find the object in Cart where 'takeaway' key (item.takeaway) is the same as takeaway passed in,
                    // if so return that object with the updated quantity and totalCost which is passed in
                    // otherwise just return the item with  ": item"
                    return item.takeaway === takeaway ? {...item, quantity: quantity, totalCost: totalCost} : item
                })
            })
            console.log(cart);
        }
        // otherwise just add the takeaway and its quantity to the Cart
        else {
            setCart([...cart, {takeaway, quantity, totalCost, takeawayImage}]);
            console.log(cart);
        }
    }

    console.log('did this re-render?')

    return (
      <>
        <CartIcon CartIconClicked={CartIconClicked} setCartIconClicked={setCartIconClicked} cart={cart}/>
        <CartPage CartIconClicked={CartIconClicked} cart={cart} setCart={setCart}/> 
        <Menu setModal={setModal} modal={modal} setIndex={setIndex} cart={cart} setCart={setCart} CartIconClicked={CartIconClicked}/>
        <Modal setModal={setModal} modal={modal} index={index} cart={cart} setCart={setCart} addToCart={addToCart}/>
      </>
    )
}

export default App