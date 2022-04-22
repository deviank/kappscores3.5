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
require_once('lib/most-recent-widget.php');

add_filter('register_post_type_args', '_themename_filter_portfolio', 10, 2);
function _themename_filter_portfolio($args, $post_type) {
    if($post_type === '_themename_portfolio') {
        $args['rewrite']['slug'] = get_theme_mod('_themename_portfolio_slug', 'portfolio');
    }
    return $args;
}

add_action('customize_save_after', '_themename_customize_save_after');

add_action('init', '_themename_flush_rewrite', 99999);

function _themename_flush_rewrite() {
    if(get_theme_mod('_themename_flush_flag', false)) {
        flush_rewrite_rules();
        set_theme_mod('_themename_flush_flag', false);
    }
}

function _themename_customize_save_after() {
    $old = get_post_type_object('_themename_portfolio')->rewrite['slug'];
    $new = get_theme_mod('_themename_portfolio_slug', 'portfolio');
    if($old !== $new) {
        set_theme_mod('_themename_flush_flag', true);
    }
}

function _themename_load_textdomain() {
    load_theme_textdomain('_themename', get_template_directory() . '/languages');
}
add_action('after_setup_theme', '_themename_load_textdomain');

?>