<?php
require_once('lib/customize.php');
require_once('lib/helpers.php');
require_once('lib/enqueue-assets.php');
require_once('lib/sidebars.php');
require_once('lib/theme-support.php');
require_once('lib/navigation.php');
require_once('lib/delete-post.php');
require_once('lib/include-plugins.php');
require_once('lib/comment-callback.php');

//require_once('lib/metaboxes.php');

function _themename_button($atts = [], $content = null, $tag = '') {
    extract(shortcode_atts([
        'color' => 'red',
        'text' => 'text'
    ], $atts, $tag));
    
    return '<button class="_themename_button" style="background-color: ' . esc_attr($color) . '">' . do_shortcode($content) . '</button>';
}
add_shortcode('_themename_button', '_themename_button');