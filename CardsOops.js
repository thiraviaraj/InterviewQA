function Card() {
    // Constants
    const randomizer = Math.random();
    const SUITS = ["hearts", "spades", "diamonds", "clubs"];
    const RANKS = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

    this.suit = SUITS[(Math.floor(randomizer*SUITS.length))];
    this.rank = RANKS[(Math.floor(randomizer*RANKS.length))];
};

Card.prototype.getSuit = function() {
    return this.suit;
};

Card.prototype.getRank = function() {
    return this.rank;
};