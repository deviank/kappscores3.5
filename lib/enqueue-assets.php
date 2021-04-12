<?php
function kappscores_assets(){
    wp_enqueue_style( 'kappscores-stylesheet', get_template_directory_uri() . '/dist/assets/css/bundle.css', array(), '1.0.0', 'all' );

    wp_enqueue_script( 'kappscores-scripts', get_template_directory_uri(  ) .  '/dist/assets/css/bundle.js', array('jquery'), '1.0.0', true);
}

add_action( 'wp_enqueue_scripts', 'kappscores_assets');

function kappscores_admin_assets(){
    wp_enqueue_style( 'kappscores-admin-stylesheet', get_template_directory_uri() . '/dist/assets/css/admin.css', array(), '1.0.0', 'all' );

    wp_enqueue_script( 'kappscores-admin-scripts', get_template_directory_uri() . '/dist/assets/css/admin.js', array(), '1.0.0', 'all' );
}

add_action( 'admin_enqueue_scripts', 'kappscores_admin_assets');

?>
