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
		editDiameter: {
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
			editDiameter
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
		function addToDiameters(editDiameter) {
			diameters.push(editDiameter);
			setAttributes( { diameters: diameters.slice() } );
		}
		function removeFromDiameters(editDiameter) {
			diameters.splice(diameters.indexOf( editDiameter ), 1);
			setAttributes( { diameters: diameters.slice() } );
		}
		function onChangeNewDia(newDia) {
			setAttributes( { editDiameter: newDia } );
		}
		return ([<div>
				<RichText key="edible" tagname="p"
					placehlder="dia" value={ editDiameter }
					onChange={ onChangeNewDia }/>
				<button onClick={ 
					() => addToDiameters(editDiameter) }>
					add diameters </button>
				<button onClick={ 
					() => removeFromDiameters(editDiameter) }>
					remove diameter </button>
				<ul>
					{diameters.map(diameter => 
						<li>{diameter}</li>)
					}
				</ul>
		</div>]);
	},

	save({ attributes }) {
		const {
			name,
			price,
			diameters,
			packages,
			image,
			editDiameter
		} = attributes;

		return (
			<div>
				<ul>
					{diameters.map(diameter => 
						<li>{diameter}</li>)
					}
				</ul>
			</div>
			);
		}
});

