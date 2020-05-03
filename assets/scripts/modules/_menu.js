class Menu{
    constructor(){
        this.menuBtn = document.querySelector('.menu-icon');
        this.menu = document.querySelector('.menu');

        this.closeBtn = document.querySelector('.menu .menu__actions .btn');
        this.events();
    }

    events(){
        this.menuBtn.addEventListener('click', this.toggleMenu.bind(this));
        this.closeBtn.addEventListener('click', this.toggleMenu.bind(this));
    }

    toggleMenu(){
        this.menu.classList.toggle('menu--visible');
    }

}

export default Menu;