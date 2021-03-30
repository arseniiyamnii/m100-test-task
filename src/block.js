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
		diameters_count: {		//maybe unused
			type: 'integer'
		},
		diameters: {
			type: 'array',
			default: []
		},
		packages_count: {	  //maybe unused
			type: 'integer'
		},
		packages: {
			type: 'array',
			default: []
		},
		image: {
			type: 'string'
		}
	
    },

	edit({ attributes, setAttributes }) {
		var {
			name,
			price,
			diameters,
			diameters_count,
			packages,
			packages_count,
			image
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
		}
		function addToPackages(newPackage) {
			packages.push(newPackage);
		}
		function removeFromDiameters(oldDiameter) {
			var diameters = this.state.diameters.splice(
				this.state.diameters.indexOf( oldDiameter ), 1
			);
		}
		function removeFromPackages(oldPackage) {
			var packages = this.state.packages.splice(
				this.state.packages.indexOf( oldPackage ), 1
			);
		}


		return ([
            //<div>
		//<RichText key="editable"
		//tagName="h2"
		//placeholder="Заголовок"
		//value={ title }
		//onChange={ onChangeTitle }/>
		//<RichText key="editable"
		//tagName="p"
		//placeholder="Текст"
		//value={ body }
		//onChange={ onChangeBody }/>
		//<RichText key="editable"
		//tagName="h2"
		//placeholder="Заголовок2"
		//value={ title2 }
		//onChange={ onChangeTitle2 }/>
		//<RichText key="editable"
		//tagName="p"
		//placeholder="Текст2"
		//value={ body2 }
		//onChange={ onChangeBody2 }/>
            //</div>
		]);
	},

	save({ attributes }) {
        //const {
            //title,
            //body,
            //title2,
            //body2,

        //} = attributes;

		return (
			<div>
            //<div class="col col-lg-6 col-md-12 box justify-content-center">
            //<RichText.Content tagName="h2" value={ title }/>
            //<RichText.Content tagName="p" value={ body }/>
            //</div>
            //<div class="col col-lg-6 col-md-12 box justify-content-center">
            //<RichText.Content tagName="h2" value={ title2 }/>
            //<RichText.Content tagName="p" value={ body2 }/>
            //</div>
			</div>
        );
    }
});

