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
	title: 'M100',
	description: 'M100 block',
	icon: 'format-image',
	category: 'layout',
	attributes: {
		name: {
			type: 'string'
		},
		price: {
			type: 'string'
		},
		diameters: {
			type: 'array',
			default: []
		},
		packages: {
			type: 'array',
			default: []
		},
		image: {
			type: 'string'
		},
		newDiameter: {
			type: 'string'
		}

		},

	edit({ attributes, setAttributes }) {
		const {
			name,
			price,
			diameters,
			packages,
			image,
			newDiameter
		} = attributes;

		function onChangePrice(newPrice) {
			setAttributes( { price: newPrice } );
		}
		function onChangeName(newName) {
			setAttributes( { name: newName } );
		}
		function onChangeImage(newImage) {
			setAttributes( { image: newImage } );
		}
		function addToDiameters(newDiameter) {
			diameters.push(newDiameter);
			setAttributes( { diameters: diameters.slice() } );
		}
		function removeFromDiameters(newDiameter) {
			setAttributes( { diameters: diameters.splice(
				diameters.indexOf( newDiameter ), 1
			) } );
			console.log(diameters);
		}

		function onChangeNewDia(newDia) {
			setAttributes( { newDiameter: newDia } );
		}


		return ([
			<div>
				<RichText key="edible" tagname="p"
					placehlder="dia" value={ newDiameter } onChange={ onChangeNewDia }/>
				<button onClick={ () => addToDiameters(newDiameter) }> add diameters </button>
				<button onClick={ () => removeFromDiameters(newDiameter) }> remove diameter </button>
				
			</div>
			
		]);
	},

	save({ attributes }) {

		return (
			<div>
			</div>
			);
		}
});

