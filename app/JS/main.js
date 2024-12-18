import { GroceryItems } from "./products";
import { DOMs } from "./DOM";
import "../CSS/style.css";

function displayCard() {
  const randomNumber = Math.floor(Math.random() * GroceryItems.length);
  const item = GroceryItems[randomNumber];

  DOMs.container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card w-[30vw] h-[30vw] bg-peachpuff rounded-3xl flex flex-col items-center justify-evenly m-8 border-2 border-black">
      <h1 class="text-5xl">${item.name}</h1>
      <img src="${item.image}" alt="" class="w-[70%] h-[60%] object-fill rounded-lg shadow-md"/>
        <div class="m-0">
          <btn class="addBtn w-[10vw] bg-gray-300 rounded-lg text-black text-center">Add to Cart!</btn>
          <btn class="nextBtn bg-gray-300 rounded-lg text-black text-center">Next Item</btn>
          <btn class="showBtn bg-gray-300 rounded-lg text-black text-center">Show Cart!</btn>
        </div> 
    </div>
    `
  );
}
displayCard();
