<?php

function _themename_theme_support(){
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'title-tag', array('search-form', 'comment-form', 'gallery', 'caption') );
    add_theme_support( 'cusomize-selective');
    add_theme_support( 'custom-logo', array(
        'height' => 200,
        'width' => 600,
        'flex-height' => true,
        'flex-width' => true,
    ) );
}

add_action( 'after_setup_theme', '_themename_theme_support' );