const { registerBlockType } = wp.blocks;
const {
    RichText,
    InspectorControls,
    ColorPalette,
    MediaUpload
} = wp.editor;
const {
    PanelBody,
    IconButton,
    RangeControl
} = wp.components;

registerBlockType('yamnish/m100', {
    title: 'Two column text',
    description: 'A25 Bootstrap block with two column text',
    icon: 'format-image',
    category: 'layout',

    // custom attributes
    attributes: {
        title: {
            type: 'string',
        },
        body: {
            type: 'string',
        },
        title2: {
            type: 'string',
        },
        body2: {
            type: 'string',
        },
    },

    edit({ attributes, setAttributes }) {
        const {
            title,
            body,
            title2,
            body2,
        } = attributes;

        // custom functions
        function onChangeTitle(newTitle) {
            setAttributes( { title: newTitle } );
        }

        function onChangeBody(newBody) {
            setAttributes( { body: newBody } );
        }
        function onChangeTitle2(newTitle) {
            setAttributes( { title2: newTitle } );
        }

        function onChangeBody2(newBody) {
            setAttributes( { body2: newBody } );
        }


        return ([
            <div>
            <RichText key="editable"
            tagName="h2"
            placeholder="Заголовок"
            value={ title }
            onChange={ onChangeTitle }/>
            <RichText key="editable"
            tagName="p"
            placeholder="Текст"
            value={ body }
            onChange={ onChangeBody }/>
            <RichText key="editable"
            tagName="h2"
            placeholder="Заголовок2"
            value={ title2 }
            onChange={ onChangeTitle2 }/>
            <RichText key="editable"
            tagName="p"
            placeholder="Текст2"
            value={ body2 }
            onChange={ onChangeBody2 }/>
            </div>
        ]);
    },

    save({ attributes }) {
        const {
            title,
            body,
            title2,
            body2,

        } = attributes;

        return (
            <div class="row">
            <div class="col col-lg-6 col-md-12 box justify-content-center">
            <RichText.Content tagName="h2" value={ title }/>
            <RichText.Content tagName="p" value={ body }/>
            </div>
            <div class="col col-lg-6 col-md-12 box justify-content-center">
            <RichText.Content tagName="h2" value={ title2 }/>
            <RichText.Content tagName="p" value={ body2 }/>
            </div>
            </div>
        );
    }
});

