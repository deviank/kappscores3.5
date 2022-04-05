<?php
function kappscores_assets(){
    wp_enqueue_style( 'kappscores-stylesheet', get_template_directory_uri() . '/dist/assets/css/bundle.css', array(), '1.0.0', 'all' );

    include(get_template_directory() . '/lib/inline-css.php');
    wp_add_inline_style( 'kappscores-stylesheet', $inline_styles);

    wp_enqueue_script( 'kappscores-scripts', get_template_directory_uri(  ) .  '/dist/assets/js/bundle.js', array('jquery'), '1.0.0', true);

    if( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}

add_action( 'wp_enqueue_scripts', 'kappscores_assets');

function kappscores_admin_assets(){
    wp_enqueue_style( 'kappscores-admin-stylesheet', get_template_directory_uri() . '/dist/assets/css/admin.css', array(), '1.0.0', 'all' );

    wp_enqueue_script( 'kappscores-admin-scripts', get_template_directory_uri() . '/dist/assets/js/admin.js', array(), '1.0.0', 'all' );
}

add_action( 'admin_enqueue_scripts', 'kappscores_admin_assets');


function kappscores_customize_preview_js(){
    wp_enqueue_script( 'kappscores-customize-preview', get_template_directory_uri(  ) . '/dist/assets/js/customize-preview.js', array('customize-preview', 'jquery'), '1.0.0', 'true');

    include(get_template_directory() . '/lib/inline-css.php');
    

    wp_localize_script( 'kappscores-customize-preview', 'kappscores', array('inline-css' => $inline_styles_selectors) );
}

add_action( 'customize_preview_init', 'kappscores_customize_preview_js')

?>
