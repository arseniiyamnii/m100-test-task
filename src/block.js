var el = wp.element.createElement,
    __ = wp.i18n.__,
    registerBlockType = wp.blocks.registerBlockType,
    RichText = wp.blocks.RichText,
    blockStyle = { backgroundColor: '#900', color: '#fff', padding: '20px' };
registerBlockType( 'guten-tuts/alert', {
    title: __( 'Guten Tuts - Alert' ),

    icon: 'megaphone',

    category: 'layout',

    attributes: {
        text : {
            type: 'array',
            source: 'children',
            selector: 'div',
        }
    },

    edit: function( props ) {
        var content = props.attributes.text;

        function onChangeText( newText ) {
            props.setAttributes( { text: newText } );
        }

        return el(
            RichText,
            {
                tagName: 'div',
                className: props.className,
                onChange: onChangeText,
                value: content,
                isSelected: props.isSelected,
                style: blockStyle
            }
        );
    },

    save: function( props ) {
        var text = props.attributes.text;

        return el( 'div', { style: blockStyle, className: props.className }, text );
    },
} );
