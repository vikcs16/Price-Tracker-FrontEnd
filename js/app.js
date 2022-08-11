// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const productnameDOM = document.querySelector(".product-name");
const producturlDOM = document.querySelector(".product-url");
const showDOM = document.querySelector(".show-data")
const buttonDOM = document.querySelector(".btn");

buttonDOM.addEventListener("click", async () => {
  const pname = productnameDOM.value;
  const url = producturlDOM.value;
  data = {
    "product_name": pname,
    "product_url": url
  }
  const response = await axios.get("http://localhost:5000/api/v1/products");
  showDOM.innerHTML = JSON.stringify(response.data)
});