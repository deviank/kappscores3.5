<?php get_header();?>
    <div class="o-container u-margin-bottom-40">
        <div class="o-row">
        <div class="o-row__column o-row__column--span-12 o-row__column--span-12">
        <header>
            <?php the_archive_title( '<h1>', '</h1>')?>
            <?php the_archive_description( '<p>', '</p>' )?>
        </header>
        </div>
            <div class="o-row__column o-row__column--span-12 o-row__column--span-<?php echo         is_active_sidebar( 'primary-sidebar' ) ? '8' : '12'; ?>@medium">
                <main role="main">
                    <?php if (have_posts()) { ?>
                        <?php while (have_posts()){ ?>
                            <?php the_post();?>
                            <article <?php post_class("c-post u-margin-bottom-20");?>>
                                <h2 class="c-post__title">
                                    <a href="<?php the_permalink()?>"><?php the_title_attribute()?><?php the_title()?></a>
                                </h2>
                                <div class="c-post__meta">
                                    <?php _themename_post_meta()?>
                                </div>
                                <div class="c-post__excerpt">
                                    <?php the_excerpt();?>
                                </div>
                                <div>
                                    <?php _themename_readmore_link()?>
                                </div>
                                <?php } ?>
                            </article>
                            <?php the_posts_pagination()?>
                            <?php do_action( '_themename_after_pagination');?>
                        <?php } else { ?>
                        <p><?php echo apply_filters('_themename_no_posts_text',esc_html__('Sorry, there are no posts that match your criteria.', '_themename'))?></p>
                    <?php } ?>
                </main>
            </div>
            <?php if(is_active_sidebar( 'primary-sidebar' )){?>
                <div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium">
                    <?php get_sidebar();?>
                </div>
            <?php } ?>
        </div>
    </div>
<?php get_footer();?>