<?php
function kappscores_post_meta(){
/* translators: %s: Post Date*/
  printf(
    esc_html__( 'Posted on %s', 'kappscores' ),
    '<a href="' . esc_url(get_permalink()) . '"><time datetime="' . esc_attr(get_the_date('c')) .'">' . esc_html(get_the_date()) . '</time></a> '
    
  );

/* translators: %s: Post Author*/
  printf(
    esc_html__( 'By %s', 'kappscores'),
    '<a href="' . esc_url(get_author_posts_url(get_the_author_meta('ID'))) . '">' . esc_html(get_the_author()) . '</a>'
  );  
}

function kappscores_readmore_link(){

  echo '<a class="c-post__readmore" href="' . esc_url(get_permalink()) . '" title="' . the_title_attribute(['echo' => false]) . '">';
/* translators: %s: Post Title*/  
  printf(
    wp_kses(
      __('Read More <span class="u-screen-reader-text">About %s</span>', 'kappscores'),
      [
        'span' => [
          'class' => []
        ]
      ]
        ),
        get_the_title()
      );
  echo '</a>';
}

function kappscores_delete_post() {
  $url = add_query_arg([
      'action' => 'kappscores_delete_post',
      'post' => get_the_ID(),
      'nonce' => wp_create_nonce( 'kappscores_delete_post_' . get_the_ID() )
  ], home_url());
  if(current_user_can( 'delete_post', get_the_ID() )) {
      return "<a href='" . esc_url($url) . "'>" . esc_html__( 'Delete Post', 'kappscores' ) . "</a>";
  }
}

function kappscores_meta($id, $key, $default){
  $value = get_post_meta( $id, $key, true );
  if(!$value && $default){
    return $default;
  }
  return $value;
}
?>