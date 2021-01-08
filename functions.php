<?php
function post_meta()
{?>
    Posted on
    <a href="<?php echo get_permalink() ?>">
        <time datetime="<?php echo get_the_date('c')?>"><?php echo get_the_date()?></time>
    </a>
    By <a href="<?php echo get_author_posts_url(get_the_author_meta('ID'))?>"><?php echo get_the_author();?></a>
<?php } ?>
?>