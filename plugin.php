<?php
   /*
   Plugin Name: Awesomeness Creator2
   Plugin URI: http://my-awesomeness-emporium.com
   description: >-
  a plugin to create awesomeness and spread joy
   Version: 1.2
   Author: Mr. Awesome
   Author URI: http://mrtotallyawesome.com
   License: GPL2
   */
function m100block() {
	wp_register_script(
		'm100-block',
		plugins_url( 'js/block.js', __FILE__ ),
		array(
			'wp-blocks',
			'wp-element',
			'wp-i18n',
			'wp-editor',
			'wp-components')
	);
    register_block_type( 'yamnish/m100', array(
		'editor_script' => 'm100-block',
	));
}
add_action( 'init', 'm100block' );
