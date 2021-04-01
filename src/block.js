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
		},
		editPackage: {
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
			editDiameter,
			editPackage
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
		// Diameters functions
		//
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
		// Packages functions
		//
		function addToPackages(editPackage) {
			packages.push(editPackage);
			setAttributes( { packages: packages.slice() } );
		}
		function removeFromPackages(editPackage) {
			packages.splice(packages.indexOf( editPackage ), 1);
			setAttributes( { packages: packages.slice() } );
		}
		function onChangeNewPack(newPack) {
			setAttributes( { editPackage: newPack } );
		}
		return ([
			<div>
				{/* add diameters */}
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
				{/* add packages */}
				<RichText key="edible" tagname="p"
					placehlder="pack" value={ editPackage }
					onChange={ onChangeNewPack }/>
				<button onClick={ 
					() => addToPackages(editPackage) }>
					add pack </button>
				<button onClick={ 
					() => removeFromPackages(editPackage) }>
					remove pack </button>
				<ul>
					{packages.map(onePackage => 
						<li>{onePackage}</li>)
					}
				</ul>
			</div>
		]);
	},

	save({ attributes }) {
		const {
			name,
			price,
			diameters,
			packages,
			image
		} = attributes;

		return (
			<div class="custom-widget">
				<ul>
					{diameters.map(diameter => 
						<li>{diameter}</li>)
					}
				</ul>
				<ul>
					{packages.map(onePackage => 
						<li>{onePackage}</li>)
					}
				</ul>
			</div>
			);
		}
});

