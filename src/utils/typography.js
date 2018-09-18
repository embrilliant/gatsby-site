import Typography from 'typography'
// import stardustTheme from 'typography-theme-stardust'

const typography = new Typography({
	baseFontSize: '22px',
	scaleRatio: 1.7,
	googleFonts: [
	  {
	    name: 'Merienda',
	    styles: [
	      '700'
	    ]
	  },
	  {
	  	name: 'Philosopher',
	  	styles: [
	  		'700'
	  	]
	  },
	  {
	  	name: 'Poiret One',
	  	styles: [
	  		'400'
	  	]
	  },
	  {
	  	name: 'Allerta Stencil',
	  	styles: [
	  		'400'
	  	]
	  }
	],
	headerFontFamily: [
		'Allerta Stencil', 'sans-serif'
	],
	bodyFontFamily: [
		'Poiret One', 'cursive'
	],
	bodyGray: 45,
	blockMarginBottom: 0
})

export default typography
