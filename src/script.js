const products = [
  {
    id: "1",
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    id: "2",
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    id: "3",
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    id: "4",
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    id: "5",
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    id: "6",
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    id: "7",
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    id: "8",
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    id: "9",
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
const productContainer = document.getElementById("products");
productContainer.innerHTML = products
  .map((product) => {
    console.log(product.image.desktop);
    return `
  <div id ="product" class="md:ml-3 ml-0 gap-4">
  <div class="relative"><img src="${product.image.desktop}" alt="${
    product.name
  }" class="w-full lg:h-[300px] sm:h-[250px] h-[200px] object-cover rounded-lg">
  <button id ="btn-${product.id}" class="add-btn border border-[#ad8985ff] bg-amber-50 w-[150px] h-10 rounded-[15px] flex gap-2 items-center justify-center absolute bottom-[-20px] left-1/2 -translate-x-1/2" onclick="addToCart('${product.id}')">
     <i class="fa-solid fa-cart-shopping text-red-500"></i>
    <p class ="text-black font-bold">Add to Cart</p>
  </button>
  </div>
  <div id="product-info" class="flex flex-col gap-1 mt-5">
  <h3 class="category text-gray-400">${product.category}</h3>
  <h1 id ="name" class ="text-[16px] font-bold">${product.name}</h1>
  <p id ="price" style ="color:red;">$${product.price.toFixed(2)}</p>
  </div>
  </div>
 `;
  })
  .join("");

let cart = [];

function addToCart(productid) {
  const product = products.find((p) => p.id === productid);
  const existingItem = cart.find((item) => item.id === productid);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  console.log(cart);
  updateButton(productid);
  updateCart();
}
function updateCart() {
  const cartDiv = document.getElementById("cart");
  if (cart.length === 0) {
    cartDiv.className =
      "flex flex-col p-4 gap-3 border-0 md:w-[350px] w-full min-h-[250px] rounded-md bg-white mb-20";
  } else {
    cartDiv.className =
      "flex flex-col p-4 gap-3 border-0 md:w-[350px] w-full rounded-md bg-white mb-20";
  }
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  cartDiv.innerHTML = `
  <h1 class="text-red-600 text-[30px] font-bold">Your Cart (${totalItems})</h1>
  <div class ="flex flex-col gap-4">
  ${cart
    .map(
      (
        item,
      ) => `<div class="flex justify-between items-center border-b border-gray-300 pb-2">
   <div class="flex flex-col gap-2">
   <h1 id ="name" class ="text-[16px] font-bold">${item.name}</h1>
   <div class="flex items-center gap-5">
    <p class="text-red-500 text-sm">${item.quantity}x</p>
    <span id ="price" style ="color:gray;">@$${item.price.toFixed(2)}</span>
   <p class="font-bold text-gray-400">$${(item.price * item.quantity).toFixed(2)}</p>
   </div>
  </div> 
  <button onclick ='removeItem("${item.id}")' class="text-gray-400 border-0 border-gray-300 rounded-full w-5 h-5 flex items-center justify-center hover:border-red-500 hover:text-red-500 text-xs">x
  </button>
  </div>
  `,
    )
    .join("")}
  </div>
  <div class ="flex justify-between font-bold text-lg border-0 pt-3">
  <p>Order Total</p>
  <p>$${totalPrice.toFixed(2)}</p>
  </div>
  <button onclick="confirmOrder()" class="mt-4 w-full bg-red-500 text-white py-3 rounded-full font-bold hover:bg-red-600">Confirm Order</button>
`;
}

function updateButton(productid) {
  const cartItem = cart.find((item) => item.id === productid);
  const qty = cartItem ? cartItem.quantity : 0;
  const btn = document.getElementById(`btn-${productid}`);
  btn.outerHTML = `
<div id="btn-${productid}" class ="flex items-center absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-red-500 rounded-[15px] w-[150px] h-10">
<button onclick ="changeQty('${productid}', -1)" class="text-white font-bold text-xl w-10 h-full rounded-l-[15px] hover:bg-red-600">-</button>
<span class="text-white font-bold flex-1 text-center">${qty}</span>
<button onclick="changeQty('${productid}', 1)" class ="text-white font-bold text-xl w-10 h-full rounded-r-[15px] hover:bg-red-600">+</button>
</div>`;
}
function changeQty(productid, change) {
  const cartItem = cart.find((item) => item.id === productid);
  cartItem.quantity += change;
  if (cartItem.quantity === 0) {
    cart = cart.filter((item) => item.id !== productid);
    const btn = document.getElementById(`btn-${productid}`);
    btn.outerHTML = `<button id ="btn-${productid}" class="add-btn border border-[#ad8985ff] bg-amber-50 w-[150px] h-10 rounded-[15px] flex gap-2 items-center justify-center absolute bottom-[-20px] left-1/2 -translate-x-1/2" onclick="addToCart('${product.id}')">
     <i class="fa-solid fa-cart-shopping text-red-500"></i>
    <p class ="text-black font-bold">Add to Cart</p>
  </button>`;
  } else {
    updateButton(productid);
  }
  updateCart();
}
function confirmOrder() {
  const modal = document.getElementById("modal");
  const modalItems = document.getElementById("modal-items");
  const modalTotal = document.getElementById("modal-total");
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  modalItems.innerHTML = cart
    .map(
      (item) => `
    <div class="flex flex-col gap-5 pb-3">
    <div class="flex gap-3">
    <img src="${item.image.thumbnail}" class="w-12 h-12 rounded-lg object-cover"/>
    <div>
    <p class="font-bold text-sm">${item.name}</p>
    <p class="text-red-500 text-sm">${item.quantity}x
    <span class="text-gray-400">@ $${item.price.toFixed(2)}</span>
    </p>
    </div>
    <p class="font-bold ml-auto">$${(item.price * item.quantity).toFixed(2)}</p>
    </div>
    `,
    )
    .join("");
  modalTotal.textContent = `$${totalPrice.toFixed(2)}`;
  modal.classList.remove("hidden");
}

function startNewOrder() {
  cart = [];
  document.getElementById("modal").classList.add("hidden");
  products.forEach((product) => {
    const btn = document.getElementById(`btn-${product.id}`);
    if (btn) {
      btn.outerHTML = `
      <button id="btn-${product.id}" class="add-btn border border-[#ad8985ff] bg-amber-50 w-[150px] h-10 rounded-[15px] flex gap-2 items-center justify-center absolute bottom-[-20px] left-1/2 -translate-x-1/2" onclick="addToCart('${product.id}')">
       <i class="fa-solid fa-cart-shopping text-red-500"></i>
    <p class ="text-black font-bold">Add to Cart</p>
  </button>`;
    }
  });
  updateCart();
}
function removeItem(productid) {
  cart = cart.filter((item) => item.id !== productid);
  const btn = document.getElementById(`btn-${productid}`);
  if (btn) {
    btn.outerHTML = `
  <button id="btn-${productid}" class="add-btn border border-[#ad8985ff] bg-amber-50 w-[150px] h-10 rounded-[15px] flex gap-2 items-center justify-center absolute top-[280px] left-20" onclick="addToCart('${productid}')">
   <i class="fa-solid fa-cart-shopping text-red-500"></i>
    <p class ="text-black font-bold">Add to Cart</p>
  </button>`;
  }
  updateCart();
}
