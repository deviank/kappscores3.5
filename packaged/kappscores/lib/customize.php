<?php

function kappscores_customize_register($wp_customize){

    $wp_customize->get_setting('blogname')->transport = 'postMessage';

    $wp_customize->selective_refresh->add_partial('blogname', array(
        'selector' => '.c-header__blogname',
        'container_inclusive' => false,
        'render_callback' => function(){
            bloginfo('name');
        }
    ));

      /*##################  SINGLE SETTINGS ########################*/

      $wp_customize->add_section('kappscores_single_blog_options', array(
        'title' => esc_html__( 'Single Blog Options', 'kappscores' ),
        'description' => esc_html__( 'You can change single blog options from here.', 'kappscores' ),
        'active_callback' => 'kappscores_show_single_blog_section'
    ));

    $wp_customize->add_setting('kappscores_display_author_info', array(
        'default' => true,
        'transport' => 'postMessage',
        'sanitize_callback' => 'kappscores_sanitize_checkbox'
    ));

    $wp_customize->add_control('kappscores_display_author_info', array(
        'type' => 'checkbox',
        'label' => esc_html__( 'Show Author Info', 'kappscores' ),
        'section' => 'kappscores_single_blog_options'
    ));

    function kappscores_sanitize_checkbox( $checked ) {
        return (isset($checked) && $checked === true) ? true : false;
    }

    function kappscores_show_single_blog_section() {
        global $post;
        return is_single() && $post->post_type === 'post';
    }


    /*######################################GENERAL SETTINGS#######################################*/

    $wp_customize->add_section('kappscores_general_options', array(
        'title' => esc_html__( 'General Options', 'kappscores' ),
        'description' => esc_html__( 'You can change general options from here.', 'kappscores' )
    ));

    $wp_customize->add_setting('kappscores_accent_colour', array(
        'default' => '#20ddae',
        //'transport' => 'postMessage',
        'sanitize_callback' => 'sanitize_hex_color'
    ));

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'kappscores_accent_colour', array(
        'label' => __( 'Accent Color', 'kappscores' ),
        'section' => 'kappscores_general_options',
    )));

    $wp_customize->add_setting( 'kappscores_portfolio_slug', array(
		'default'           => 'portfolio',
		'transport'         => 'postMessage',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'kappscores_portfolio_slug', array(
		'type'    => 'text',
        'label'    => esc_html__( 'Portfolio Slug', 'kappscores' ),
        'description' => esc_html__( 'Will appear in the archive url', 'kappscores' ),
		'section'  => 'kappscores_general_options',
    ));


    /*######################################FOOTER SETTINGS#######################################*/

    $wp_customize->selective_refresh->add_partial('kappscores_footer_partial', array(
        'settings' => array('kappscores_footer_bg', 'kappscores_footer_layout'),
        'selector' => '#footer',
        'container_inclusive' => false,
        'render_callback' => function(){
            get_template_part( 'template-parts/footer/widgets');
            get_template_part( 'template-parts/footer/info');
        }
    ));

    $wp_customize->add_section('kappscores_footer_options', array(
        'title' => esc_html__( 'Footer Options', 'kappscores'),
        'description' => esc_html__( 'You can change footer options from here.', 'kappscores' ),
        'priority' => 30
        
    ));

    $wp_customize->add_setting('kappscores_site_info', array(
        'default' => '',
        'sanitize_callback' => 'kappscores_sanitize_site_info',
        'transport' => 'postMessage'
    ));

    $wp_customize->add_control('kappscores_site_info', array(
        'type' => 'text',
        'label' => esc_html__( 'Site Info', 'kappscores'),
        'section' => 'kappscores_footer_options'

    ));

    $wp_customize->add_setting('kappscores_footer_bg', array(
        'default' => 'dark',
        'transport' => 'postMessage',
        'sanitize_callback' => 'kappscores_sanitize_footer_bg'
    ));

    $wp_customize->add_control('kappscores_footer_bg', array(
        'type' => 'select',
        'label' => esc_html__( 'Footer Background', 'kappscores' ),
        'choices' => array(
            'light' => esc_html__( 'Light', 'kappscores' ),
            'dark' => esc_html__( 'Dark', 'kappscores' ),
        ),
        'section' => 'kappscores_footer_options'
    ));

    $wp_customize->add_setting('kappscores_footer_layout', array(
        'default' => '3,3,3,3',
        'transport' => 'postMessage',
        'sanitize_callback' => 'sanitize_text_field',
        'validate_callback' => 'kappscores_validate_footer_layout'
    ));

    $wp_customize->add_control('kappscores_footer_layout', array(
        'type' => 'text',
        'label' => esc_html__( 'Footer Layout', 'kappscores' ),
        'section' => 'kappscores_footer_options'
    ));

}

add_action('customize_register', 'kappscores_customize_register');


function kappscores_validate_footer_layout( $validity, $value) {
    if(!preg_match('/^([1-9]|1[012])(,([1-9]|1[012]))*$/', $value)) {
        $validity->add('invalid_footer_layout', esc_html__( 'Footer layout is invalid', 'kappscores' ));
    }
    return $validity;
}

function kappscores_sanitize_site_info($input){
    $allowed = array('a' => array(
        'href' => array(),
        'title' => array()
    ));
    return wp_kses( $input, $allowed );
}

function kappscores_sanitize_footer_bg($input) {
    $valid = array('light', 'dark');
    if( in_array($input, $valid, true) ) {
        return $input;
    }
    return 'dark';
}

?>