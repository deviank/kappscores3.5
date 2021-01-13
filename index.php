<?php get_header();?>
    <?php if (have_posts()) { ?>
        <?php while (have_posts()){ ?>
            <?php the_post();?>
            <h2>
                <a href="<?php the_permalink()?>"><?php the_title_attribute()?><?php the_title()?></a>
            </h2>
            <div>
                <?php kappscores_post_meta()?>
            </div>
            <div><?php the_excerpt();?></div>
            <div><?php kappscores_readmore_link()?></div>
            <?php } ?>
            <?php the_posts_pagination()?>
        <?php } else { ?>
        <p>Sorry, there are no posts that match your criteria</p>
        <?php } ?>
<?php get_footer();?>