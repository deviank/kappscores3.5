import $ from 'jquery';

$('.c-navigation').on('mouseenter', '.menu-item-has-children', (e) => {
    $(e.currentTarget).addClass('open');
}).on('mouseleave', '.menu-item-has-children', (e) => {
    $(e.currentTarget).removeClass('open');
})

$('.c-navigation').on('click', '.menu .menu-button', (e) => {
    e.preventDefault();
})