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

function renderCategory(category, containerId, titleImage,) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container mit der ID "${containerId}" nicht gefunden.`);
    return;
  }

  // HTML-String für das Titelbild und die Gerichte generieren
  let html = `
    <div class="category-header">
      <img src="${titleImage}" alt="Kategorie-Titelbild" class="category-image" />
      <h2>Titel</h2>
    </div>
  `;

  // Gerichte hinzufügen
  category.forEach(item => {
    html += `
      <div class="menu-item">
        <button>+</button>
        <h3>${item.name}</h3>
        <p>${item.price.toFixed(2)} €</p>
        <p>${item.description}</p>
      </div>
    `;
  });

  // HTML in den Container einfügen
  container.innerHTML = html;
}

renderCategory(Vorspeisen, 'input_Vorspeisen', titleImages.Vorspeisen);
renderCategory(Hauptgerichte, 'input_Hauptgerichte', titleImages.Hauptgerichte);
renderCategory(Dessert, 'input_Dessert', titleImages.Dessert);
renderCategory(Getränke, 'input_Getränke', titleImages.Getränke);
renderCategory(AlkoholischeGetränke, 'input_AlkoholischeGetränke', titleImages.AlkoholischeGetränke);




// To Do's
// h2 bearbeiten das jeder titel seperat und anderst gerendert wird im HTML
// Warenkorb einfügen
// CSS bearbeiten
// HTML bearbeiten
// Warenkorb funktionen erstellen
// Local Storage einbinden
// Footer fertig erstellen
// Impressum / AGB erstellen für den footer