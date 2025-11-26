/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
    edit( { context, attributes, setAttributes } ) {
      const postType = context?.postType;
      const { pageLabel, postLabel } = attributes;

      let label = '';
      if (postType) {
        label = String(postType).charAt(0).toUpperCase() + String(postType).slice(1);
      }
      if (pageLabel && postType == 'page') {
        label = pageLabel;
      }
      if (postLabel && postType == 'post') {
        label = postLabel;
      }

      return (
        <>
          <InspectorControls>
            <PanelBody title={ __( 'Labels', 'post-type-label' ) }>
                <TextControl
                  __nextHasNoMarginBottom={true}
                  __next40pxDefaultSize={true}
                  label={ __( 'Page Label', 'post-type-label' ) }
                  value={ pageLabel }
                  onChange={ ( value ) =>
                    setAttributes( { pageLabel: value } )
                  }
                />
                <TextControl
                  __nextHasNoMarginBottom={true}
                  __next40pxDefaultSize={true}
                  label={ __( 'Post Label', 'post-type-label' ) }
                  value={ postLabel }
                  onChange={ ( value ) =>
                    setAttributes( { postLabel: value } )
                  }
                />
            </PanelBody>
          </InspectorControls>
          <div { ...useBlockProps() }>{ label }</div>
        </>
      );
    },
} );
