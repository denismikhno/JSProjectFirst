/*console.dir(document);
console.dir(document.documentElement);
console.dir(document.body);*/


let page = {

    left: function () {
        if (this.x > 0) this.x--;
        this.fillCurCell();

    },
    right: function () {
        if (this.x < this.w - 1) this.x++;
        this.fillCurCell();
    },
    top: function () {
        if (this.y > 0) this.y--;
        this.fillCurCell();
    },
    bottom: function () {
        if (this.y < this.h - 1) this.y++;
        this.fillCurCell();
    },

    fillCurCell: function () {
        let tds = this.table.querySelectorAll('td');
        for (let i = 0; i < tds.length; i++) {
            tds[i].style.background = '';
        }

        let curTd = this.table.querySelectorAll('tr')[this.y].children[this.x];
        curTd.style.background = 'red';
        //console.log(tds);
    },

    init: function () {
        /*       // let elem = document.querySelectorAll('.y > p');
               //  let elem = document.querySelector('.y > p');
               //
               //  let str = '';
               //  for(let i =0; i< 50; i++){
               //      str += `<b>${i}</b><br>`;
               //  }
               //  elem.innerHTML += str;

               // let str = '';
               //  for(let i =0; i< elem.length; i++){
               //      elem[i].innerText = `<b>hello</b>`;
               //  }
                //console.log(elem);

        /!*       let t = document.querySelector('input[type="text"]');
               t.value = 'hello';
              // t.hidden = true;
               t.disabled = true;*!/

              /!*  let t = document.querySelector('input[type="checkbox"]');
                t.checked = true;
               console.log(t);*!/

           /!*     let t = document.querySelector('input[type="text"]');
                t.setAttribute('class','vasya');
              //  console.log(t.getAttribute('type'));
               // t.removeAttribute('class');
               //  if (t.hasAttribute('type')){
               //      alert('type')
               //  }
                t.className += ' petya dima';
                t.classList.add('colya');
                //t.classList.remove('dima');
              //  t.classList.replace('dima','fedr');
               // t.classList.contains('dima');
                t.classList.toggle('dima');


               t.style.width = '200px';
               t.style.height = '200px';
               t.style.borderRadius = '50%';
               //t.style.cssText =  'width:400px';*!/*/
        this.table = document.querySelector('#my-table');
        this.w = this.table.querySelector('tr').children.length;
        this.h = this.table.querySelectorAll('tr').length;
        this.x = 0;
        this.y = 0;
        this.fillCurCell();
//console.log(this.h);
    }

};

window.onload = function () {
    page.init();
}

