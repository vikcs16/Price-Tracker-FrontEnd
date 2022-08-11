const ProductsDOM = document.querySelector(".Products");
const button = document.querySelector(".btn");

button.addEventListener("click", async () => {
  const response = await axios.get("http://localhost:5000/api/v1/products");
  const res = response.data.products;
  ProductsDOM.innerText = "";
  res.forEach((element) => {
    ProductsDOM.innerText += `${element.product_name} \n`;
  });
  // ProductsDOM.innerHTML += "</ul>";
});