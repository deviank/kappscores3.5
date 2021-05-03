<?php 
    $footer_layout = '3,3,3,3';
    $columns = explode(',', $footer_layout);
    $footer_bg = 'dark';
    $widget_theme = '';
?>

<div class="c-footer c-footer--<?php echo $footer_bg?>">
    <div class="o-container">
        <div class="o-row">
            <?php foreach ($columns as $i => $column) {?>
                <div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium">
            <?php } ?>
        </div>
    </div>
</div>

<?php wp_footer();?>
</body>
</html>