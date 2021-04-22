let page = {

    posLeft: 45,
    posTop: 45,

    left: function () {
        // минимальная граница слева 45px
        if (this.posLeft > 45) {
            this.posLeft -= 15;
            this.moveBlock();
        }
    },

    right: function () {
        // двигаем пока не достигли правой границы окна браузера
        if (this.posLeft < this.brauserWidth) {
            this.posLeft += 15;
            this.moveBlock();
        }

    },

    top: function () {
        // инимальная граница сверху 45px
        if (this.posTop > 45) {
            this.posTop -= 15;
            this.moveBlock();
        }
    },

    bottom: function () {
        // двигаем пока не достигли нижней границы окна браузера
        if (this.posTop < this.brauserHeight) {
            this.posTop += 15;
            this.moveBlock();
        }
    },

    moveBlock: function () {
        this.block.style.left =  this.posLeft + "px";
        this.block.style.top = this.posTop + "px";
        console.log(this.brauserWidth);
        console.log(this.posLeft);
    },

    init: function () {
        this.block = document.querySelector('.block');
        // ширина окна браузера без полос прокрутки
        this.brauserWidth = document.documentElement.clientWidth - 150;
        // высота браузера без полос прокрутки
        this.brauserHeight = document.documentElement.clientHeight - 150;
    }
}

window.onload = function () {
    page.init();
}