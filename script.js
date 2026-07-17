const cars = [
  {
    id: "honda-civic-2020",
    name: "HONDA CIVIC",
    featured: true,
    description:"Clean and Accident Free",
    status: "New",
    origin: "Foreign",
    image: ["HONDA-CIVIC%20FRONT%20VIEW.jpeg"]
  },
  {
    id: "toyota-rav4-2021", 
    name: "TOYOTA RAV4",
    description:"Clean and Accident Free",
    status: "New",
    origin: "Foreign",
    image: ["TOYOTA%20RAV-4%20FRONT%20VIEW.jpeg"]
  },
  {
    id: "toyota-corolla-2019",
    name: "TOYOTA COROLLA",
    description:"Clean and Accident Free",
    status: "New",
    origin: "Foreign", 
    image: ["TOYOTA-COROLLA%20FRONT%20VIEW.jpeg"]
  },
  { id: "toyota xse-2020", 
    name: "TOYOTA COROLLA XSE",
    featured: true,
    description:"Clean and Accident Free",
    status: "New",
    origin: "Foreign",
    image: ["Corolla%20Xse.jpeg"]
  },
  { id: "honda crv-2023", 
    name: "HONDA CRV",
    description:"Clean and Accident Free",
    status: "New",
    origin: "Foreign",
    image: ["Honda  Crv.jpeg"]
  },
  { id: "honda civic-2013", 
    name: "HONDA CIVIC",
    description:"Clean and Accident Free",
    status: "Used",
    origin: "Ghana",
    image: ["Honda%20Civic%202013.jpeg"]
  },
  { id: "honda civic 2017", 
    name: "HONDA CIVIC 2017",
    description:"Clean and Accident Free",
    status: "New",
    origin: "Foreign",
    image: ["Honda%20Civic%202017.jpeg"]
  },
  { id: "honda civic 2018", 
    name: "HONDA CIVIC 2018",
    featured: true,
    description:"Clean and Accident Free",
    status: "New",
    origin: "Foreign",
    image: ["Honda%20Civic%202018.jpeg"]
  },
  { id: "mercedes benz c300 2017", 
    name: "MERCEDES BENZ c300 2017",
    featured: true,
    description:"Clean and Accident Free",
    status: "New",
    origin: "Foreign",
    image: ["Mercedes Benz c300 2017.jpeg"]
  },
  {id: "mercedes benz glc 2016", 
    name: "MERCEDES BENZ GLC 2016",
    featured: true,
    description:"Clean and Accident Free",
    status: "New",
    origin: "Foreign",
    image: ["Mercedes Benz glc 2016.jpeg"]
  },
  {id: "mitsubishi pickup", 
    name: "MITSUBISHI PICKUP",
    description:"Clean and Accident Free",
    status: "Used",
    origin:"Ghana",
    image: ["Mitsubishi Pickup.jpeg"]
  },
  {id: "toyota altis 2015", 
    name: "TOYOTA ALTIS 2015",
    description:"Clean and Accident Free",
    status: "Used",
    origin: "Ghana",
    image: ["Toyota Altis 2015.jpeg"]
  },
  {id: "toyota corolla 2013", 
    name: "TOYOTA COROLLA 2013",
    description:"Clean and Accident Free",
    status: "Used",
    origin: "Ghana",
    image: ["Toyota Corolla 2013.jpeg"]
  },
  {id: "toyota corolla 2015", 
    name: "TOYOTA COROLLA 2015",
    description:"Clean and Accident Free",
    status: "New",
    origin: "Ghana",
    image: ["Toyota Corolla 2015.jpeg"]
  },
  {id: "toyota corolla 2016", 
    name: "TOYOTA COROLLA 2016",
    description:"Clean and Accident Free",
    status: "New",
    origin: "Foreign",
    image: ["Toyota Corolla 2016.jpeg"]
  },
  {id: "toyota corolla 2017", 
    name: "TOYOTA COROLLA 2017",
    description:"Clean and Accident Free",
    status: "New",
    origin: "Ghana",
    image: ["Toyota Corolla 2017.jpeg"]
  },
  {id: "toyota corolla 2019", 
    name: "TOYOTA COROLLA 2019",
    description:"Clean and Accident Free",
    status: "New",
    origin: "Ghana",
    image: ["Toyota Corolla 2019.jpeg"]
  },
  {id: "toyota hilux 2025", 
    name: "TOYOTA HILUX 2025",
    featured: true,
    description:"Clean and Accident Free",
    status: "New",
    origin: "Ghana",
    image: ["Toyota Hilux 2025.jpeg"]
  },
  {id: "toyota rav 4", 
    name: "TOYOTA RAV 4 2023",
    description:"Clean and Accident Free",
    status: "New",
    origin: "Ghana",
    image: ["Toyota RAV-4 2023.jpeg"]
    },
    {id: "toyota vitz", 
    name: "TOYOTA VITZ ",
    description:"Clean and Accident Free",
    status: "Used",
    origin: "Ghana",
    image: ["Toyota Vitz.jpeg"]
    }
  ,
{
    id: "hyundai-elantra-2018",
    name: "HYUNDAI ELANTRA 2018",
    featured: false,
    description: "Clean and Accident Free",
    status: "New",
    origin: "Foreign",
    image: ["Hyundai Elantra 2018.jpeg"]
  }
 ];

function loadFeatured() {
    const featuredGrid = document.getElementById('featured-grid');
    const featuredCars = cars.filter(car => car.featured === true);
    
    featuredCars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.innerHTML = `
            <img src="${car.image[0]}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>${car.status} - ${car.origin}</p>
            <button class="btn primary" onclick="addToCart('${car.id}')">Add to Cart</button>
            <button class="btn-contact" onclick="contactDealer('${car.name}', '${car.status}', '${car.origin}')">
              Contact Dealer
            </button>
        `;
        featuredGrid.appendChild(card);
    });
}

loadFeatured();

document.addEventListener("DOMContentLoaded", () => {
  const carGrid = document.querySelector('.car-grid');
  
  cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <img src="${car.image[0]}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>${car.status} - ${car.origin}</p>
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
      cartItems.innerHTML += `<div>${car.name} - ${car.status} - ${car.origin}</div>`;
    });
  }
}

function contactDealer(name, status, origin) {
    const phone = "233591046079";
    const message = `Hello MENSEI DA MOTORS,
I'm interested in purchasing:
🚗 ${name}
📋 ${status} - ${origin}

Please send me more details and price.`;
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const phone = "233591046079";
    let message = `Hello MENSEI DA MOTORS,
I'm interested in these cars:

`;
    
    cart.forEach(item => {
        message += `🚗 ${item.name}
📋 ${item.status} - ${item.origin}

`;
    });
    
    message += "Please send me more details.";
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
});

document.querySelectorAll('.car-card').forEach(card => {
  observer.observe(card);
});
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  themeToggle.innerText = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.innerText = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.innerText = '🌙';
  }
});

function searchCars() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const cars = document.querySelectorAll('.car-card');

  cars.forEach(car => {
    const carName = car.querySelector('h3').innerText.toLowerCase();
    const carDesc = car.querySelector('p').innerText.toLowerCase();
    
    if (carName.includes(filter) || carDesc.includes(filter)) {
      car.classList.remove('hidden');
    } else {
      car.classList.add('hidden');
    }
  });
}

document.getElementById('alertForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const brand = document.getElementById('alertBrand').value;
  const type = document.getElementById('alertType').value;
  const budget = document.getElementById('alertBudget').value;
  const whatsapp = document.getElementById('alertWhatsapp').value;
  
  const message = `Hi MENSEI DA MOTORS, I want alerts for: ${brand} ${type} under GH₵${budget}. My number: ${whatsapp}`;
  const url = `https://wa.me/233591046079?text=${encodeURIComponent(message)}`;
  
  window.open(url, '_blank');
  document.getElementById('alertMsg').innerText = "Opening WhatsApp... We'll contact you!";
  this.reset();
});
