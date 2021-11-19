<?php

function kappscores_sidebar_widgets(){
    register_sidebar(array(
        'id' => 'primary-sidebar',
        'name' => esc_html__( 'Primary Sidebar', 'kappscores'),
        'description' => esc_html__( 'This sidebar appears in the blog posts page', 'kappscores'),
        'before_widget' => '<section id="%1s" class="c-sidebar-widget u-margin-bottom-20 %2s">',
        'after-widget' => '</section>',
        'before-title' =>  '<h5>',
        'after-title' => '</h5>'
    ));
}

$footer_layout = sanitize_text_field(get_theme_mod('kappscores_footer_layout', '3,3,3,3'));
$footer_layout = preg_replace('/\s+/', '', $footer_layout);
$columns = explode(',', $footer_layout);
$footer_bg = get_theme_mod( 'kappscores_footer_bg', 'dark' );
$widget_theme = '';
if($footer_bg == 'light'){
    $widget_theme = 'c-footer--dark';
}  else {
    $widget_theme = 'c-footer--light';
}


foreach ($columns as $i => $column) {
    register_sidebar(array(
        'id' => 'footer-sidebar-' . ($i + 1),
        'name' => sprintf(esc_html__( 'Footer Widgets Column %s', 'kappscores'), $i + 1),
        'description' => esc_html__( 'Footer Widgets', 'kappscores'),
        'before_widget' => '<section id="%1s" class="c-sidebar-widget u-margin-bottom-20 %2s">',
        'after-widget' => '</section>',
        'before-title' =>  '<h5>',
        'after-title' => '</h5>'
    ));
}

add_action('widgets_init', 'kappscores_sidebar_widgets');

?>