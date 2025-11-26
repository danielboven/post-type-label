<?php
// This file is generated. Do not modify it manually.
return array(
	'label' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'post-type-label/label',
		'version' => '0.1.0',
		'title' => 'Post Type Label',
		'category' => 'widgets',
		'icon' => 'text',
		'description' => 'Displays whether the current item is a Page or Post.',
		'example' => array(
			
		),
		'attributes' => array(
			'pageLabel' => array(
				'type' => 'string'
			),
			'postLabel' => array(
				'type' => 'string'
			)
		),
		'supports' => array(
			'html' => false,
			'spacing' => array(
				'margin' => true,
				'padding' => true
			),
			'color' => true,
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'textAlign' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true
			)
		),
		'textdomain' => 'post-type-label',
		'usesContext' => array(
			'postType'
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js'
	)
);
