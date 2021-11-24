<article <?php post_class("c-post u-margin-bottom-20");?>>
    <div class="c-post__inner">

            <?php if(get_the_post_thumbnail() !== '') {?>
                <div class="c-post__thumbnail">
                    <?php the_post_thumbnail('large');?>
                </div>
            <?php } ?>
            
        <h2 class="c-post__title">
            <a href="<?php the_permalink()?>"><?php the_title()?></a>
        </h2>
        <div class="c-post__meta">
            <?php _themename_post_meta()?>
        </div>
        <div class="c-post__excerpt">
            <?php the_excerpt();?>
        </div>
        <div>
            <?php _themename_readmore_link();?>
            <?php echo _themename_delete_post();?>
            <?php var_dump(get_post_meta( get_the_ID(), 'price' ));?>
        </div>
    </div>
    
</article>