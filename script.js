const cars = [
  {
    id: "honda-civic-2020",
    name: "HONDA CIVIC",
    condition: "New",
    description:"Clean and Accident Free",
    origin: "Foreign",
    image: ["HONDA-CIVIC%20FRONT%20VIEW.jpeg"]
  },
  {
    id: "toyota-rav4-2021", 
    name: "TOYOTA RAV4",
    description:"Clean and Accident Free",
    condition: "New",
    origin: "Foreign",
    image: ["TOYOTA%20RAV-4%20FRONT%20VIEW.jpeg"]
  },
  {
    id: "toyota-corolla-2019",
    name: "TOYOTA COROLLA",
    description:"Clean and Accident Free",
    condition: "New",
    origin: "Foreign", 
    image: ["TOYOTA-COROLLA%20FRONT%20VIEW.jpeg"]
  },
  { id: "toyota xse-2020", 
    name: "TOYOTA COROLLA XSE",
    description:"Clean and Accident Free",
    condition: "New",
    origin: "Foreign",
    image: ["Corolla%20Xse.jpeg"]
  },
  { id: "honda crv-2023", 
    name: "HONDA CRV",
    description:"Clean and Accident Free",
    condition: "New",
    origin: "Foreign",
    image: ["Honda  Crv.jpeg"]
  },
  { id: "honda civic-2013", 
    name: "HONDA CIVIC",
    description:"Clean and Accident Free",
    condition: "Used",
    origin: "Ghana",
    image: ["Honda%20Civic%202013.jpeg"]
  },
  { id: "honda civic 2017", 
    name: "HONDA CIVIC 2017",
    description:"Clean and Accident Free",
    condition: "New",
    origin: "Foreign",
    image: ["Honda%20Civic%202017.jpeg"]
  },
  { id: "honda civic 2018", 
    name: "HONDA CIVIC 2018",
    description:"Clean and Accident Free",
    condition: "New",
    origin: "Foreign",
    image: ["Honda%20Civic%202018.jpeg"]
  },
  { id: "mercedes benz c300 2017", 
    name: "MERCEDES BENZ c300 2017",
    description:"Clean and Accident Free",
    condition: "New",
    origin: "Foreign",
    image: ["Mercedes Benz c300 2017.jpeg"]
  },
  {id: "mercedes benz glc 2016", 
    name: "MERCEDES BENZ GLC 2016",
    description:"Clean and Accident Free",
    condition: "New",
    origin: "Foreign",
    image: ["Mercedes Benz glc 2016.jpeg"]
  },
  {id: "mitsubishi pickup", 
    name: "MITSUBISHI PICKUP",
    description:"Clean and Accident Free",
    condition: "Used",
    origin:"Ghana",
    image: ["Mitsubishi Pickup.jpeg"]
  },
  {id: "toyota altis 2015", 
    name: "TOYOTA ALTIS 2015",
    description:"Clean and Accident Free",
    condition: "Used",
    origin: "Ghana",
    image: ["Toyota Altis 2015.jpeg"]
  },
  {id: "toyota corolla 2013", 
    name: "TOYOTA COROLLA 2013",
    description:"Clean and Accident Free",
    condition: "Used",
    origin: "Ghana",
    image: ["Toyota Corolla 2013.jpeg"]
  },
  {id: "toyota corolla 2015", 
    name: "TOYOTA COROLLA 2015",
    description:"Clean and Accident Free",
    condition: "New",
    origin: "Ghana",
    image: ["Toyota Corolla 2015.jpeg"]
  },
  {id: "toyota corolla 2016", 
    name: "TOYOTA COROLLA 2016",
    description:"Clean and Accident Free",
    condition: "New",
    origin: "Foreign",
    image: ["Toyota Corolla 2016.jpeg"]
  },
  {id: "toyota corolla 2017", 
    name: "TOYOTA COROLLA 2017",
    description:"Clean and Accident Free",
    condition: "New",
    origin: "Ghana",
    image: ["Toyota Corolla 2017.jpeg"]
  },
  {id: "toyota corolla 2019", 
    name: "TOYOTA COROLLA 2019",
    description:"Clean and Accident Free",
    condition: "New",
    origin: "Ghana",
    image: ["Toyota Corolla 2019.jpeg"]
  },
  {id: "toyota hilux 2025", 
    name: "TOYOTA HILUX 2025",
    description:"Clean and Accident Free",
    condition: "New",
    origin: "Ghana",
    image: ["Toyota Hilux 2025.jpeg"]
  },
  {id: "toyota rav 4", 
    name: "TOYOTA RAV 4 2023",
    description:"Clean and Accident Free",
    condition: "New",
    origin: "Ghana",
    image: ["Toyota RAV-4 2023.jpeg"]
    },
    {id: "toyota vitz", 
    name: "TOYOTA VITZ ",
    description:"Clean and Accident Free",
    condition: "Used",
    origin: "Ghana",
    image: ["Toyota Vitz.jpeg"]
    }
 ];

document.addEventListener("DOMContentLoaded", () => {
  const carGrid = document.querySelector('.car-grid');
  
  cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <img src="${car.image[0]}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>${car.condition} - ${car.origin}</p>
     <button class="btn primary" onclick="addToCart('${car.id}')">Add to Cart</button>
    `;
    carGrid.appendChild(card);
  });
});
let cart = [];

function addToCart(carId){
  const car = cars.find(c => c.id === carId);
  cart.push(car);
  updateCart();
  alert(`${car.name} added to cart!`);
}

function updateCart(){
  const cartPanel = document.querySelector('.cart-panel');
  if(cart.length === 0){
    cartPanel.innerHTML = `<h2>Your Cart (0)</h2><p>Cart is empty</p>`;
    return;
  }
  cartPanel.innerHTML = `
    <h2>Your Cart (${cart.length})</h2>
    ${cart.map(c => `<p>${c.name} - </p>`).join('')}
    <button class="btn">Contact Dealer</button>
  `;
}

function whatsappOrder(carId){
  const car = cars.find(c => c.id === carId);
  const message = `Hi MENSEI DA MOTORS, I'm interested in ${car.name}`;
  const url = `https://wa.me/233591046079?text=${encodeURIComponent(message)}`; 
  window.open(url, '_blank');
}
function clearCart(){
  cart = []; 
  updateCart();
}

function updateCart(){
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  
  cartCount.innerText = cart.length;
  
  if(cart.length === 0){
    cartItems.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cartItems.innerHTML = '';
    cart.forEach(car => {
      cartItems.innerHTML += `<div>${car.name} - ${car.condition}</div>`;
    });
  }
}