<?php
$inline_styles_selectors = array (
    'a' => array(
        'color' => 'kappscores_accent_colour',
    ),
    ':focus' => array(
        'outline-color' => 'kappscores_accent_colour',
    ),
    '.c-post.sticky' => array(
        'border-left-color' => 'kappscores_accent_colour',
    ),
    'button, input[type=submit], .header-nav .menu > .menu-item:not(.mega) .sub-menu .menu-item:hover > a' => array(
        'background-color' => 'kappscores_accent_colour',
    )
);

$inline_styles = "";

foreach ($inline_styles_selectors as $selector => $props) {
    $inline_styles .= "{$selector} {";
        foreach ($props as $prop => $value) {
            $inline_styles .= "{$prop}: " . sanitize_hex_color(get_theme_mod( $value, '#20ddae' )) . ";";
        }
    $inline_styles .= "} ";
}