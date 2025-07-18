const addQuantity = (data,setCartData) => {
 const localData = JSON.parse(localStorage.getItem("cart1"));
 const index = localData.findIndex((item)=> item.id==data.id);
 localData[index].quantity+=1;
localStorage.setItem("cart1",JSON.stringify(localData));
setCartData(localData);
}

export default addQuantity