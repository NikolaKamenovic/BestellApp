// Zugriff auf das Div-Element, in das die Gerichte eingefügt werden
const inputVorspeisenDiv = document.getElementById('input_Vorspeisen');
const inputHauptgerichteDiv = document.getElementById('input_Hauptgerichte');
const inputDessertDiv = document.getElementById('input_Dessert');
const inputGetränkeDiv = document.getElementById('input_Getränke');
const inputAlkoholischeGetränkeDiv = document.getElementById('input_AlkoholischeGetränke');

// Titelbilder für die Kategorien
const titleImages = {
  Vorspeisen: './assets/img/breakfast.jpg',
  Hauptgerichte: './assets/img/main-dishes.jpg',
  Dessert: './assets/img/dessert.jpg',
  Getränke: './assets/img/soft-drinks.jpg',
  AlkoholischeGetränke: './assets/img/alcoholic-drinks.jpg'
};

// Titel für die einzelnen Gerichte
const titleDishes = {
  Vorspeisen: "Vorspeisen",
  Hauptgerichte: "Hauptgerichte",
  Dessert: "Dessert",
  Getränke: "Getränke",
  AlkoholischeGetränke: "Alkoholische Getränke:"
}

function renderCategory(category, containerId, titleImage,titleDishes) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container mit der ID "${containerId}" nicht gefunden.`);
    return;
  }

  // HTML-String für das Titelbild und die Gerichte generieren
  let html = `
    <div class="category-header">
      <img src="${titleImage}" alt="Kategorie-Titelbild" class="category-image" />
      <h2>${titleDishes}</h2>
    </div>
  `;

  // Gerichte hinzufügen
  category.forEach(item => {
    html += `
      <div class="menu-item">
        <button onclick='addToBasket(${JSON.stringify(item)})'>+</button>
        <h3>${item.name}</h3>
        <p>${item.price.toFixed(2)} €</p>
        <p>${item.description}</p>
      </div>
    `;
  });

  // HTML in den Container einfügen
  container.innerHTML = html;
}

renderCategory(Vorspeisen, 'input_Vorspeisen', titleImages.Vorspeisen, titleDishes.Vorspeisen);
renderCategory(Hauptgerichte, 'input_Hauptgerichte', titleImages.Hauptgerichte, titleDishes.Hauptgerichte);
renderCategory(Dessert, 'input_Dessert', titleImages.Dessert, titleDishes.Dessert);
renderCategory(Getränke, 'input_Getränke', titleImages.Getränke, titleDishes.Getränke);
renderCategory(AlkoholischeGetränke, 'input_AlkoholischeGetränke', titleImages.AlkoholischeGetränke, titleDishes.AlkoholischeGetränke);

let dishes = [Vorspeisen, Hauptgerichte, Dessert, Getränke, AlkoholischeGetränke];

let warenkorb = [];

// Funktion für button (addToBasket)
function addToBasket(dishes) {
  let findDish = warenkorb.find(item => item.id === dishes.id);

  if (findDish) {
    findDish.amount++; // Menge erhöhen
  } else {
    warenkorb.push({ ...dishes, amount: 1 });
  }

  renderWarenkorb();
}

// Menge erhöhen oder verringern
function changeAmount(id, operation) {
  let dishes = warenkorb.find(item => item.id === id);

  if (dishes) {
    if (operation === 'plus') {
      dishes.amount++;
    }else if (operation === 'minus' && dishes.amount > 1) {
      dishes.amount--;
    }
  }

  renderWarenkorb();
}

// Gericht aus dem Warenkorb entfernen
function deleteBasket(id) {
  warenkorb = warenkorb.filter(item => item.id !== id);
  renderWarenkorb();
}

function renderBasket() {
  let container = document.getElementById('basket-container');
  container.innerHTML = ''; // Leeren

  warenkorb.forEach(item => {
    let div = document.createElement('basket-container');
    div.innerHTML = `${item.name} - ${item.amount} Stück 
      <button onclick="changeAmount(${item.id}, 'plus')">+</button>
      <button onclick="changeAmount(${item.id}, 'minus')">-</button>
      <button onclick="deleteBasket(${item.id})">X</button>`;

    container.appendChild(div);
  });
}

// Local Storage
function save() {
  localStorage.setItem('warenkorb', JSON.stringify(warenkorb));
}

function load() {
  let saved = localStorage.getItem('warenkorb');
  if (saved) warenkorb = JSON.parse(saved);
}

// To Do's

// Warenkorb einfügen
// CSS bearbeiten
// HTML bearbeiten
// Warenkorb funktionen erstellen
// Local Storage einbinden
// Footer fertig erstellen
// Impressum / AGB erstellen für den footer