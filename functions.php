<?php
require_once('lib/helpers.php');
require_once('lib/enqueue-assets.php');

?>

<?php
function after_pagination(){
    echo 'This is a do_action_test';
}
add_action( '_themename_after_pagination', 'after_pagination');


function no_post_text($text){
    return $text . 'jsdddlfsd';
}
add_filter( '_themename_no_posts_text', 'no_post_text' );

function filter_title($title){
    return 'Filtered ' . $title;
}

add_filter( 'the_title', 'filter_title');

?>