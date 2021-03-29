<?php
   /*
   Plugin Name: Awesomeness Creator
   Plugin URI: http://my-awesomeness-emporium.com
   description: >-
  a plugin to create awesomeness and spread joy
   Version: 1.2
   Author: Mr. Awesome
   Author URI: http://mrtotallyawesome.com
   License: GPL2
   */
function m100-block() {
    wp_register_script(
        'guten-tuts',
        plugins_url( 'js/block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-i18n' )
    );
 
    register_block_type( 'guten-tuts/alert', array(
        'editor_script' => 'guten-tuts',
    ) );
}
add_action( 'init', 'm100-block' );
