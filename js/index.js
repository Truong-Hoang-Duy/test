import { productData } from "./data.js";

const products = document.querySelector(".products");

const productList = document.createElement("div");
// productList.className = "product-list";
productList.classList.add("product-list");
products.insertAdjacentElement("beforeend", productList);

productData.forEach((product) => {
  //template string
  const template = `
    <div class="product-item">
        <img class="product-img" src="${product.productImg}" alt="">
        <div class="product-content">
            <h3 class="product-title">${product.productName}</h3>
            <p class="product-desc">${product.productDesc}</p>
            <div class="product-info">
                <div class="product-price">${product.productPrice}$</div>
                <div class="product-sold">Sold ${product.productSold}</div>
            </div>
            <button class="product-btn">
                + Add to cart
            </button>
        </div>
    </div>
`;
  productList.insertAdjacentHTML("beforeend", template);
});

const productBtn = document.querySelectorAll(".product-btn");
console.log(productBtn);
let count = 98;
productBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    count++;
    if (count > 0) {
      const headerQuantity = document.querySelector(".header-quantity");
      headerQuantity.style.display = "flex";
      if (count < 100) {
        headerQuantity.textContent = count;
      } else {
        headerQuantity.textContent = "99+";
      }
    }
  });
});
