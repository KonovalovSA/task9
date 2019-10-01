    // Контсруктор объекта карт
function objCards(card, cardClassRank, cardClassSuit, cardClassCards, cardClassNone, src) {
    this.img = card;
    this.cardClassRank = cardClassRank;
    this.cardClassSuit = cardClassSuit;
    this.cardClassCards = cardClassCards;
    this.cardClassNone = cardClassNone;
    this.src = src;
}

    // Удаляем класс
let classDel = function(x) {
    for (let i = 0; i < cards; i++) {
        card = deck.getElementsByTagName("img")[i];
        card.classList.remove(x);
    }
}

    // Добавляем класс
let classAdd = function(x) {
    for (let i = 0; i < cards; i++) {
        card = deck.getElementsByTagName("img")[i];
        card.classList.add(x);
    }
}



let arrCards = [];
let deck = document.getElementById("deck");
let cards = deck.getElementsByTagName("img").length;
    for (let i = 0; i < cards; i++) {
        card = deck.getElementsByTagName("img")[i];
        arrCards.push(card);
    }

    // Показать колоду
btnShowTheDeck.onclick = function () {
    for (let i = 0; i < cards; i++) {
        card = deck.getElementsByTagName("img")[i];
        card.classList.remove("none");
    }
}

function compareRandom() {
    return Math.random() - 0.5;
}

    // Перемешать карту
btnSortDeck.onclick = function () {
    classAdd("none");
    arrCards.sort(compareRandom);
    for (let i = 0; i < cards; i++) {
        deck.appendChild(arrCards[i]);
    }
}
    // Показать N карту
btnNCard.onclick = function () {
    let nCard = document.getElementById("nCard").value;
    arrCards[nCard].classList.remove("none");
    deck.appendChild(arrCards[nCard]);
    arrCards = [];
    for (let i = 0; i < cards; i++) {
        card = deck.getElementsByTagName("img")[i];
        arrCards.push(card);
    }
}

    // Показать первую карту
btnFirstCard.onclick = function () {
    arrCards[0].classList.remove("none");
    deck.prepend(arrCards[0]);
    arrCards = [];
    for (let i = 0; i < cards; i++) {
        card = deck.getElementsByTagName("img")[i];
        arrCards.push(card);
    }
}

    // Показать последнюю карту
btnLastCard.onclick = function () {
    let lastCards = cards - 1;
    arrCards[lastCards].classList.remove("none");
    deck.appendChild(arrCards[lastCards]);
}

    // Удалить N карту
btnNCardDel.onclick = function () {
    let nCardDel = document.getElementById("nCardDel").value;
    arrCards[nCardDel].remove();
    arrCards = [];
    for (let i = 0; i < cards; i++) {
        card = deck.getElementsByTagName("img")[i];
        arrCards.push(card);
    }
}



    // Пересобрать колоду 
btnRebuildDeck.onclick = function () {
    cards = deck.getElementsByTagName("img").length;
    arrCards = [];
    for (let i = 0; i < cards; i++) {
        card = deck.getElementsByTagName("img")[i];
        arrCards.push(card);
    }
}
