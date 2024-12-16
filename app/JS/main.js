import { GroceryItems } from "./products";
import { DOMs } from "./DOM";
import "../CSS/style.css";

function displayCard() {
  const randomNumber = Math.floor(Math.random() * GroceryItems.length);
  const item = GroceryItems[randomNumber];

  DOMs.container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card w-2/5 h-[40vw] bg-peachpuff rounded-3xl flex flex-col items-center justify-evenly m-8 border-2 border-black">
    <h1 class="text-5xl">${item.name}</h1>
    <img src="${item.image}" alt="" class="w-[80%] object-contain rounded-lg shadow-md"/>
    </div>
    `
  );
}
displayCard();
