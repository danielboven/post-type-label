<?php
/**
 * Server-side render for Post Type Label block.
 */

$type = $block->context['postType'];
if (!$type) {
    echo '';
    return;
}


$page_label = $attributes['pageLabel'];
$post_label = $attributes['postLabel'];

$label = ucfirst($type);
if ($type === 'page' && !empty($page_label)) {
    $label = $page_label;
}
if ($type === 'post' && !empty($post_label)) {
    $label = $post_label;
}

$wrapper_attributes = get_block_wrapper_attributes();

echo sprintf(
    '<div %s>%s</div>',
    $wrapper_attributes,
    esc_html( $label )
);

