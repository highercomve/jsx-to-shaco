JSX to Shaco
============

This is a module to use with babel-plugin-transform-jsx and create Shaco Elements using JSX. This allow you to use JSX inside the view function

## Install

First install the necesary dependencies

```
npm install --save-dev babel-plugin-transform-jsx jsx-to-shaco
```

Add to your package.json babel configuration the babel-plugin-transform-jsx and set the jsx-to-shaco module:

```
"plugins": [
	[
		"transform-jsx", { "module": "jsx-to-shaco" }
	]
]
```

if your are using browserify, your browserify configuration on your package.json maybe will se something like this

```
"browserify": {
	"transform": [
		[
			"babelify",
			{
				"plugins": [
					[
						"transform-jsx", { "module": "jsx-to-shaco" }
					]
				],
				"presets": [
					"es2015",
					"stage-2"
				]
			}
		]
	]
}
```

## Example view function

The view function inside a component must have this structore

```js
... // Omitted other parts of the Shaco.ComponentFactory object
view: function() {
	// you can put variables in here
	return (
			<div>
			<h1>Hello World</h1>
			<p>{this.state.usingVariables}</p>
			</div>
		   )
}
...
```

### Using loops

```js
view: function() {
	return (
			<ul>
			{ this.state.someArray.map((someOne, index) => {
					return (
							<li key={index}> { someOne} </li>
						   )
					})}
			</ul>
		   )
}
```

### Passing State to another component

```
view: function() {
	return (
			<todo-item state={stateObj}></todo-item>
		   )
}
```

You can use normal HTML attributes like

- class
- onclick
- onsubmit
- etc

No camel case needed, only regular HTML definition
