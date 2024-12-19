import { GroceryItems } from "./products";
import "../CSS/style.css";

const DOMs = {
  container: document.querySelector(".container"),
  addBtn: document.querySelector(".addBtn"),
  nextBtn: document.querySelector(".nextBtn"),
  showBtn: document.querySelector(".showBtn"),
  clearBtn: document.querySelector(".clearBtn"),
};
function clear() {
  DOMs.container.innerHTML = "";
}

function displayCard() {
  const randomNumber = Math.floor(Math.random() * GroceryItems.length);
  const item = GroceryItems[randomNumber];

  DOMs.container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card w-[30vw] h-[30vw] bg-peachpuff rounded-3xl flex flex-col items-center justify-evenly m-8 border-2 border-black">
      <h1 class="text-5xl font-bold">${item.name}</h1>
      <img src="${item.image}" alt="" class="w-[70%] h-[60%] object-fill rounded-lg shadow-md"/>
        <div class="m-0">
          <button class="addBtn w-32 h-10 bg-gray-200 rounded-lg text-black text-center font-semibold text-xl">Add to Cart!</button>
          <button class="nextBtn w-32 h-10 bg-gray-200 rounded-lg text-black text-center font-semibold text-xl">Next Item</button>
          <button class="showBtn w-32 h-10 bg-gray-200 rounded-lg text-black text-center font-semibold text-xl">Show Cart!</button>
          <button class="clearBtn w-32 h-10 bg-gray-200 rounded-lg text-black text-center font-semibold text-xl">Clear Cart</button>

        </div> 
    </div>
    `
  );

  DOMs.nextBtn.addEventListener("click", () => {
    console.log("Hi");
    clear();
    displayCard();
  });
}
displayCard();

function addingToCart() {
  DOMs.addBtn.addEventListener("click", () => {
    const cart = [];
    cart.push(item);
  });
}
addingToCart();
