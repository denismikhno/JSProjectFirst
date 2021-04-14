function Cards(name, desc, url, width, height, bgcolor) {
    this.name = name;
    this.desc = desc;
    this.url = url;
    this.width = width;
    this.height = height;
    this.bgColor = bgcolor;
    this.printCard = function () {
        return `
            <div class="card" style="background: ${this.bgColor}; width: ${this.width}px; height: ${this.height}px">
                <div class="card-img" style="background-image: url(${this.url}); width: ${this.width}px; height: ${this.height - 50}px" ></div>
                <div class="card-name">${this.name}</div>
                <div class="card-desc">${this.desc}</div>
            </div>     
        `;
    }
} // class Cards

let main = {

    cards: [],

    createCard: function () {
        let name = document.getElementById('name');
        let desc = document.getElementById('desc');
        let url = document.getElementById('url');
        let width = document.getElementById('width');
        let height = document.getElementById('height');
        let bgcolor = document.getElementById('bgcolor');
        this.cards.push(new Cards(name.value, desc.value, url.value, width.value, height.value, bgcolor.value));
        this.showCards();
    },

    showCards: function () {
        let view = document.getElementById('cards');
        view.innerHTML = '';
        for (let i = 0; i < this.cards.length; i++) {
            view.innerHTML += this.cards[i].printCard();
        }
    }
}; // class main