<?php
function kappscores_assets(){
    wp_enqueue_style( 'kappscores-stylesheet', get_template_directory_uri() . '/dist/assets/css/bundle.css', array(), '1.0.0', 'all' );
}

add_action( 'wp_enqueue_scripts', 'kappscores_assets');
?>