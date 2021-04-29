

function PhoneBookItem(name, phone, photo){
    this.name = name;
    this.phone = phone;
    this.photo = photo;

    this.toElement = function () {
       let div = document.createElement('div');
       let photo = document.createElement('div');
       let right = document.createElement('div');
       let name = document.createElement('div');
       let phone = document.createElement('div');

       div.className = 'card';
       photo.className = 'photo';
       right.className = 'right';
       name.className = 'name';
       phone.className = 'phone';

       name.appendChild(document.createTextNode(this.name));
       phone.appendChild(document.createTextNode(this.phone));

       div.style.position = 'relative';
       div.style.paddingLeft = '50px';
       div.style.minHeight = '50px';

       photo.style.backgroundImage = `url(${this.photo})`;

       div.appendChild(photo);
       div.appendChild(right);


       right.appendChild(name);
       right.appendChild(phone);


       return div;

    }

}




let page = {

    phones: [],

    addPhone: function () {
        this.phones.push(new PhoneBookItem(
              this.nameInput.value,
              this.phoneInput.value,
              this.photoInput.value.length > 0 ? this.photoInput.value : 'https://www.sightandsound.co.uk/wp-content/uploads/2020/05/minivision_homescreen_v2.jpg'
            ));

        this.redRaw();

    },

    redRaw: function () {

        let _this = this;

        this.phonebook.innerHTML = '';
        this.phones.forEach(function (elem) {
             let li = document.createElement('li');
             li.appendChild(elem.toElement());
             _this.phonebook.appendChild(li);
        })
    },

    events: function() {
        let _this = this;

        this.add.addEventListener('click', function () {
              this.addPhone();
              console.log(this);
        }.bind(this))





    },

    init: function () {

       this.nameInput = document.querySelector('#name');
       this.phoneInput = document.querySelector('#phone');
       this.photoInput = document.querySelector('#photo');
       this.phonebook = document.querySelector('.phone-book-list');
       this.add = document.querySelector('.add');

       this.events();
    }

};

window.addEventListener('load', function () {
    page.init();
    //  document.addEventListener('click', function () {
    //          alert('ok');
    //  })

});