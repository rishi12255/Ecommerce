const removeFromCart = (data ,setCartData) => {
    const cartData = localStorage.getItem("cart1");
    const actualData = JSON.parse(cartData);
    const updatedData = actualData.filter((item)=> item.id !=data.id);
    localStorage.setItem("cart1",JSON.stringify(updatedData));
    setCartData(updatedData);
    
};
export default removeFromCart;


