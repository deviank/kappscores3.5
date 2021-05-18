<?php
function _themename_register_menus(){
    register_nav_menus(array(
        'main-menu' => esc_html__('Main Menu', '_themename'),
        'footer-menu' => esc_html__('Footer Menu', '_themename'),
    ));
}

add_action( 'init', '_themename_register_menus' );

//Code for when menu has drop down menus for accessibility.

function _themename_aria_hasdropdown($atts, $item, $args){
    if($args->theme_location == 'main-menu'){
        if(in_array('menu-item-has-children', $item -> classes)){
            $atts['aria-haspopup'] = 'true';
            $atts['aria-expanded'] = 'false';
        }
    }
        return $atts;
}
add_filter( 'nav_menu_link_attributes', '_themename_aria_hasdropdown', 10, 3);

function _themename_dropdown_icon($title, $item, $args, $depth){
    if($args->theme_location == 'main-menu'){
        if(in_array('menu-item-has-children', $item -> classes)){
            if($depth == 0){
                $title .= '<i class="fa fa-angle-down" aria-hidden="true"></i>';
            } else {
                $title .= '<i class="fa fa-angle-right" aria-hidden="true"></i>';
            }
            
        }
        
    }
        return $title;
}

add_filter( 'nav_menu_item_title', '_themename_dropdown_icon', 10, 4);
?>