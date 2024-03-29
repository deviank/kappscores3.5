<?php
    $footer_bg = 'dark';
    $site_info = get_theme_mod( 'kappscores_site_info', '');
?>

<?php if($site_info) {?>
<div class="c-site-info c-site-info--<?php echo $footer_bg;?>">
    <div class="o-container">
        <div class="o-row">
            <div class="o-row__column o-row__column--span-12 o-row__column--span-12 c-site-info__text">
            <?php 
            $allowed = array('a' => array(
                'href' => array(),
                'title' => array()
            ));
            echo wp_kses( $site_info, $allowed );?>
        </div>
    </div>
</div>
<?php }?>