const AddToCart = (productData) => {
  console.log("product data", productData);

  let localData = localStorage.getItem("cart1");

  if (localData == null) {
    let tempArray = [];
    tempArray.push(productData);
    console.log("temp array", tempArray);
    localStorage.setItem("cart1", JSON.stringify(tempArray));
  }
  console.log("saved data", localStorage.getItem("cart1"));
};

export default AddToCart;