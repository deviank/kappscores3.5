    </div>
    
    <footer id="footer" role="contentinfo">
        <?php get_template_part( 'template-parts/footer/widgets');?>
        <?php get_template_part( 'template-parts/footer/info');?>
    </footer>

    <?php wp_footer();?>
</body>
</html>

<style>
    body {
        background-color: <?php echo get_theme_mod('_themename_accent_colour')?>
    }
</style>