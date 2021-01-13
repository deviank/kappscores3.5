<?php
function post_meta(){

  echo 'Posted on ';
  echo '<a href="' . get_permalink() . '">';
  echo '<time datetime="' . get_the_date('c')'">' . get_the_date() . '</time>';
  echo '</a>'
  echo 'By <a href="' . get_author_posts_url(get_the_author_meta('ID'))'">' . get_the_author() . '</a>';
}
    ?>