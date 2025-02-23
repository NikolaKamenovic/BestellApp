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
        <button onclick="addToCart('${item.name}', ${item.price})">+</button>
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

 let basketContainer = [];

 function addToCart(name, price) {
    let item = basketContainer.find(i => i.name === name);
    if (item) {
      item.amount++;
    } else {
      basketContainer.push({ name, price, amount: 1 });
    }
    renderCart();
 }

 function renderCart() {
    let cartList = document.getElementById("basket-container");
    cartList.innerHTML = "<h2>Warenkorb</h2>";
    basketContainer.forEach((item, index) => {
      let li = document.createElement("li");
      li.innerHTML = `
            ${item.name} - ${item.price}€ x ${item.amount}
            <button onclick="changeQuantity(${index}, -1)">-</button>
            <button onclick="changeQuantity(${index}, 1)">+</button>
            <button onclick="removeItem(${index})">Löschen</button>
        `;
        cartList.appendChild(li);
    });
 }

 function changeQuantity(index, delta) {
  basketContainer[index].amount += delta;
    if (basketContainer[index].amount <= 0) {
      basketContainer.splice(index, 1);
    }
    renderCart();
 }

 function removeItem(index) {
  basketContainer.splice(index, 1);
    renderCart();
 }





// To Do's

// Warenkorb einfügen
// Warenkorb funktionen erstellen
// CSS bearbeiten
// HTML bearbeiten
// Local Storage einbinden
// Footer fertig erstellen
// Impressum / AGB erstellen für den footer