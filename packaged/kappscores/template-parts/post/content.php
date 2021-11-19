<article
    <?php post_class("c-post u-margin-bottom-20");?>>
        <h2 class="c-post__title">
            <a href="<?php the_permalink()?>"><?php the_title()?></a>
        </h2>
        <div class="c-post__meta">
            <?php kappscores_post_meta()?>
        </div>
        <div class="c-post__excerpt">
            <?php the_excerpt();?>
        </div>
        <div>
            <?php kappscores_readmore_link();?>
            <?php echo kappscores_delete_post();?>
            <?php var_dump(get_post_meta( get_the_ID(), 'price' ));?>
        </div>
</article>