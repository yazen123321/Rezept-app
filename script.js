const rezepte = [
    {
        name: "Kibbeh",
        beschreibung: "Traditionelles syrisches Gericht aus Bulgur, Hackfleisch und Gewürzen.",
        bild: "images/kibbeh.jpeg"
    },
    {
        name: "Falafel",
        beschreibung: "Knusprige Kichererbsenbällchen, perfekt als Snack oder Vorspeise.",
        bild: "images/falafel.jpeg"
    },
    {
        name: "Fattoush",
        beschreibung: "Frischer Salat mit knusprigem Brot und Zitronen-Dressing.",
        bild: "images/fattoush.jpeg"
    },
    {
        name: "Baklava",
        beschreibung: "Süßes Gebäck aus Blätterteig mit Nüssen und Honigsirup.",
        bild: "images/baklava.jpeg"
    }
];

const rezeptGrid = document.getElementById('rezeptGrid');
const rezeptDetails = document.getElementById('rezeptDetails');

rezepte.forEach((rezept, index) => {
    const card = document.createElement('div');
    card.className = 'rezept-card';

    // إذا ما كانت الصورة موجودة، يستخدم Placeholder
    const imgSrc = rezept.bild ? rezept.bild : "https://via.placeholder.com/200x150";

    card.innerHTML = `
        <img src="${imgSrc}" alt="${rezept.name}" onerror="this.src='https://via.placeholder.com/200x150'">
        <h3>${rezept.name}</h3>
    `;
    card.onclick = () => showDetails(index, card);
    rezeptGrid.appendChild(card);
});

function showDetails(index, cardElement){
    document.querySelectorAll('.rezept-card').forEach(c => c.classList.remove('active'));
    cardElement.classList.add('active');

    const rezept = rezepte[index];
    rezeptDetails.innerHTML = `<h3>${rezept.name}</h3><p>${rezept.beschreibung}</p>`;
}
