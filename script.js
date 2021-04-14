// function PageCart(name, url) {
//     this.name = name;
//     this.url = url;
//     this.printHtml = function () {
//         return `
//              <div class="page-card">
//                 <div class="img" style="background-image: url(${this.url})"></div>
//                 <div class="name">${this.name}</div>
//              </div>
//              `;
//     }
// }
//
// let page = {
//     // cats:[new PageCart('Vasya', 'https://www.wallpaperflare.com/static/642/294/549/cat-grass-leaves-autumn-wallpaper.jpg')],
//     cats: [],
//
//     addCard: function () {
//         let name = document.getElementById('page-name');
//         let url = document.getElementById('page-url');
//         this.cats.push(new PageCart(name.value, url.value));
//         this.showCats();
//     },
//
//     showCats: function () {
//         let view = document.getElementById('page');
//         view.innerHTML = '';
//
//         for (let i in this.cats) {
//             view.innerHTML += this.cats[i].printHtml();
//         }
//
//     }
// };

function Runner(name) {
    this.name = name;
    this.speed = 0;



    this.stop = function () {
        this.speed = 0;
    }

    this.info = function () {
        document.write('<hr>');
        document.write(`Бегун - ${this.name}`);
        if (this.speed > 0) document.write(` бежит со скоростью - ${this.speed}`);
        else document.write(` стоит`);

        document.write('<hr>');

    }

}

Runner.prototype.acceleration = function () {
    this.speed ++;
}


// let vasya = new Runner('Vasya');
//
// vasya.info();
// vasya.acceleration();
// vasya.info();
// vasya.acceleration();
// vasya.info();
// vasya.stop();
// vasya.info();

function MotoRunner(name, moto) {

    this.moto = moto;
    Runner.call(this, name);

}

MotoRunner.prototype = Object.create(Runner.prototype);

MotoRunner.prototype.info = function () {
    document.write('<hr>');
    document.write(`Мотобегун - ${this.name}`);
    if (this.speed > 0) document.write(` едет со скоростью - ${this.speed}`);
    else document.write(` стоит`);

    document.write('<hr>');
}


let petya = new MotoRunner('Petya', 'Yamaha');

petya.info();
petya.acceleration();
petya.info();
petya.acceleration();
petya.info();
petya.stop();
petya.info();

let animal = {
    type: 'anumal',
    go: function () {
       alert('Go');
    }
}

let rabbit = {
    __proto__: animal,

    jump: function () {
        alert('jump');
    }

}

function A() {
   alert(this);
}

// A.call('hello');

function B (val) {
  this.x = val
}

let a  = {y:10};

B.call(a, 60);

// console.log(a);

//rabbit.jump();

//alert(rabbit.hasOwnProperty('go'));

