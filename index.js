const express = require('express');
const app = express();

app.use(express.json());
// JSON es un formato de texto que permite representar objetos de JavaScript
// JSON = JavaScript Object Notation

class Persona {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
	}

	saludar() {
		console.log(`Hola, mi nombre es ${this.nombre}`);
	}
}

const persona1 = new Persona('John', 30);
const persona2 = new Persona('Steve', 40);
const persona3 = new Persona('Jane', 50);

const listaPersonas = [persona1, persona2, persona3];

// GET para obtener datos
app.get('/personas', (req, res) => {
	res.send(listaPersonas);
});

app.get('/personas/:nombre', (req, res) => {
	const nombre = req.params.nombre;
	const persona = listaPersonas.find((persona) => persona.nombre === nombre);
	if (persona) {
		res.send(persona);
	} else {
		const json = {
			error: 'Persona no encontrada',
			adicion: 'Escribí bien, manco',
		};
		res.status(404).send(json);
	}
});

// POST para crear datos
app.post('/personas', (req, res) => {
	const nombreNuevo = req.body.nombre;
	const edadNueva = req.body.edad;
	const persona = new Persona(nombreNuevo, edadNueva);
	listaPersonas.push(persona);
	res.send(200);
});

// PUT o PATCH para actualizar datos

// DELETE para eliminar datos
app.delete('/personas/:nombre', (req, res) => {
	const nombre = req.params.nombre;
	const persona = listaPersonas.find((persona) => persona.nombre === nombre);
	if (persona) {
		const index = listaPersonas.indexOf(persona);
		listaPersonas.splice(index, 1);
		res.send(200);
	} else {
		const json = {
			error: 'Persona no encontrada',
			adicion: 'Escribí bien, manco',
		};
		res.status(400).send(json);
	}
});

app.listen(3005, () => {
	console.log('Example app listening on http://localhost:3005');
});
