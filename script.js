
let page  = {



    init: function () {
        let div = document.createElement('div');
        div.style.background = '#369';
        div.className = 'div-1';

        let textNode = document.createTextNode('hello world');

        div.appendChild(textNode);
        let comment = document.createComment('comment hello world');

        let attr = document.createAttribute('name');
        attr.value = 'vasya';
        div.setAttributeNode(attr);


        // document.body.appendChild(div);
        // document.body.appendChild(div.cloneNode(true));
        //document.body.appendChild(comment);

       // document.body.insertBefore(comment, document.body.firstChild);
      //  document.body.insertBefore(comment, document.body.children[10]);
       // document.body.insertBefore(comment, document.body.children[1]);
       // document.body.insertBefore(comment, undefined);

        // let elem = document.body.children[1];
        // elem.parentNode.insertBefore(comment, elem);

        //comment.parentNode.removeChild(comment);
      //  comment.remove();
       // document.body.append(div);
       // document.body.prepend(textNode);
       // document.body.replaceChild(comment, document.body.firstChild);

       // div.insertAdjacentHTML("beforebegin", "<b>bold</b>");

        let fragment = document.createDocumentFragment();

        for (let i = 0; i < 500; i++){
           fragment.appendChild(div.cloneNode(true));
        }

        document.body.appendChild(fragment);


       // console.log(fragment);


    }
}

window.onload = function () {
  page.init();
}