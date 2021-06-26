<?php
require_once('lib/customize.php');
require_once('lib/helpers.php');
require_once('lib/enqueue-assets.php');
require_once('lib/sidebars.php');
require_once('lib/theme-support.php');
require_once('lib/navigation.php');

?>


<?php
function no_post_text($text){
    return $text ;
}
add_filter( '_themename_no_posts_text', 'no_post_text' );

?>