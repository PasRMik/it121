class Card {
    constructor(value, suit) {
        this.value = value; 
        this.suit = suit;   
    }

    getName() {
        if (this.value === 11) return 'Jack';
        if (this.value === 12) return 'Queen';
        if (this.value === 13) return 'King';
        if (this.value === 14) return 'Ace';
        return this.value; 
    }

    getDisplay() {
        return `${this.getName()} of ${this.suit}`;
    }
}

const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let deck = [];

// Create the deck of cards
function createDeck() {
    for (const suit of suits) {
        for (const value of values) {
            deck.push(new Card(value, suit));
        }
    }
}

// Pre-defined hand to display initially
const predefinedHand = [
    new Card(3, 'Hearts'),
    new Card(13, 'Spades'),
    new Card(5, 'Hearts'),
    new Card(14, 'Diamonds'),
    new Card(10, 'Clubs')
];

// Display the hand on the HTML page
function displayHand(cards) {
    const cardHandElement = document.getElementById('card-hand');
    cardHandElement.innerHTML = ''; // Clear existing hand
    cards.forEach(card => {
        const listItem = document.createElement('li');
        listItem.textContent = `- ${card.getDisplay()}`; // Use dash instead of bullets
        cardHandElement.appendChild(listItem);
    });
}

// Initial setup
createDeck(); // Populate the deck
displayHand(predefinedHand); // Display the predefined hand initially

// Event listener for the button
document.getElementById('draw-button').addEventListener('click', () => {
    const randomCards = [];
    while (randomCards.length < 5) {
        const randomIndex = Math.floor(Math.random() * deck.length);
        const selectedCard = deck[randomIndex];

        // Avoid re-using the card
        if (!randomCards.includes(selectedCard) && !predefinedHand.includes(selectedCard)) {
            randomCards.push(selectedCard);
        }
    }
    displayHand(randomCards); // Display new hand
});