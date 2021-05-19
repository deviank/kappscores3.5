import $ from 'jquery';

$('.c-navigation').on('mouseenter', '.menu-item-has-children', (e) => {
    $(e.currentTarget).addClass('open');
}).on('mouseleave', '.menu-item-has-children', (e) => {
    $(e.currentTarget).removeClass('open');
})

//Code for making arrow icon open and close when clicked

$('.c-navigation').on('click', '.menu .menu-button', (e) => {
    e.preventDefault();
    let menu_button = $(e.currentTarget);
    let menu_link = menu_button.parent();
    let menu_item = menu_link.parent();

    if(menu_item.hasClass('open')){
        menu_item.add(menu_item.find('menu-item.open')).removeClass('open');
        menu_link.add(menu_item.find('a')).attr('aria-expanded', 'false');
        menu_button.find('.menu-button-show').attr('aria-hidden', 'false');
        menu_button.find('.menu-button-hide').attr('aria-hidden', 'true');
    } else {
        menu_item.siblings('.open').find('>a>.menu-button').trigger('click')
        menu_item.addClass('open');
        menu_link.attr('aria-expanded', 'true');
        menu_button.find('.menu-button-show').attr('aria-hidden', 'true');
        menu_button.find('.menu-button-hide').attr('aria-hidden', 'false');

    }

})