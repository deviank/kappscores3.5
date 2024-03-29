<?php

require_once get_template_directory() . '/lib/class-tgm-plugin-activation.php';

add_action('tgmpa_register', 'kappscores_register_required_plugins');

function kappscores_register_required_plugins(){
    $plugins = array(
        array(
            'name' => 'kappscores metaboxes',
            'slug' => 'kappscores-metaboxes',
            'source' => get_template_directory_uri() . '/lib/plugins/kappscores-metaboxes.zip',
            'required' => true,
            'version' => '1.0.0',
            'force_activation' => false,
            'force_deactivation' => false,
        ),
        array(
            'name' => 'kappscores shortcodes',
            'slug' => 'kappscores-shortcodes',
            'source' => get_template_directory_uri() . '/lib/plugins/kappscores-shortcodes.zip',
            'required' => true,
            'version' => '1.0.0',
            'force_activation' => false,
            'force_deactivation' => false,
        ),
        array(
            'name' => 'kappscores post types',
            'slug' => 'kappscores-post-types',
            'source' => get_template_directory_uri() . '/lib/plugins/kappscores-post-types.zip',
            'required' => true,
            'version' => '1.0.0',
            'force_activation' => false,
            'force_deactivation' => false,
        )
    );

    $config = array(

    );

    tgmpa($plugins, $config);
}