import { GroceryItems } from "./products";
import "../CSS/style.css";

let cart = [];

const DOMs = {
  container: document.querySelector(".container"),
  cartcontainer: document.querySelector(".cart-container"),
};

function refresh() {
  DOMs.container.innerHTML = "";
  GroceryStore();
}

function GroceryStore() {
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
          <button class="nextBtn w-32 h-10 bg-gray-200 rounded-lg text-black text-center font-semibold text-xl">Next Item</button>          <button class="clearBtn w-32 h-10 bg-gray-200 rounded-lg text-black text-center font-semibold text-xl">Clear Cart</button>

        </div> 
    </div>
    `
  );
  const nextBtn = document.querySelector(".nextBtn");
  nextBtn.addEventListener("click", () => {
    refresh();
  });

  const addBtn = document.querySelector(".addBtn");
  let found = false;

  addBtn.addEventListener("click", () => {
    cart.forEach((food) => {
      if (food.name === item.name) {
        found = true;
      }
    });

    if (found) {
      alert("Already in Cart");
    } else {
      cart.push(item);
      DOMs.cartcontainer.insertAdjacentHTML(
        "beforeend",
        `
      <div class="card w-[15vw] h-[15vw] bg-peachpuff rounded-3xl flex flex-col items-center justify-evenly m-8 border-2 border-black">
      <h1 class="text-4xl font-bold">${item.name}</h1>
      <img src="${item.image}" alt="" class="w-[70%] h-[60%] object-fill rounded-lg shadow-md"/>
        <div class="m-0">
        </div> 
    </div>
      `
      );
    }
    refresh();
  });

  const clearBtn = document.querySelector(".clearBtn");
  clearBtn.addEventListener("click", () => {
    DOMs.cartcontainer.innerHTML = "";
    cart = [];
  });
}
GroceryStore();
