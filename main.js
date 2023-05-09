// document.getElementById('btn').addEventListener('click', function () {});
// document.querySelector('#btn').addEventListener('click', function () {});
// document.querySelectorAll('.btn').addEventListener('click', function () {});
// document
// 	.getElementsByClassName('btn')
// 	.addEventListener('click', function () {});

// Document Object Model (DOM)
// DOM is a programming interface for HTML and XML documents
// It represents the page so that programs can change the document structure, style, and content
// The DOM represents the document as nodes and objects
// That way, programming languages can connect to the page

// DOM Tree
// The DOM represents the document as nodes and objects
// That way, programming languages can connect to the page
// A Web page is a document
// This document can be either displayed in the browser window or as the HTML source
// But it is the same document in both cases
// The DOM is a W3C (World Wide Web Consortium) standard
// The DOM defines a standard for accessing documents

// DOM Nodes
// The DOM tree is a model of your HTML page
// The tree consists of elements, attributes, text, and comments
// The HTML DOM model is constructed as a tree of Objects
// With the object model, JavaScript gets all the power it needs to create dynamic HTML
// The HTML DOM is a standard object model and programming interface for HTML
// It defines:
// The HTML elements as objects
// The properties of all HTML elements
// The methods to access all HTML elements
// The events for all HTML elements
// In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements

// Tipos de datos en JS
// String
// Number
// Boolean
// Undefined
// Null
// Object

const name = 'John'; // Se recomienda usar const
// (x1)
name = 'Steve'; // No se puede reasignar una constante

let age = 25; // Se recomienda usar let
// (x2)
age = 30; // Se puede reasignar una variable

var lastName = 'Carter'; // No se recomienda usar var porque es global, se puede usar en cualquier parte del código, let y const son locales
// (x4)

// En remumen: usar const y let

// Condicionales en JS
booleano = true;

const age1 = 26;
const age2 = '26';

console.log(age1 == age2); // true
console.log(age1 === age2); // false

if (age > 18 || age < 30) {
	// code
} else if (booleano) {
	// code
} else {
	// code
}

// Operadores lógicos
// && (and)
// || (or)
/* ! (not) */

// Operadores de comparación
// == (igual)
// === (estrictamente igual)
/* != (diferente) */
/* !== (estrictamente diferente) */
// > (mayor que)
// < (menor que)
// >= (mayor o igual que)
// <= (menor o igual que)

// Operadores aritméticos
// + (suma)
// - (resta)
// * (multiplicación)
// / (división)
// % (módulo)
// ++ (incremento)
// -- (decremento)

age++; // age = age + 1
++age; // age = age + 1
age--; // age = age - 1
--age; // age = age - 1

function procesarEdad(edad) {
	console.log(edad);
}

procesarEdad(age++); // 30
procesarEdad(++age); // 32

// Operadores de asignación
// = (asignación)
// += (suma y asignación)
// -= (resta y asignación)
// *= (multiplicación y asignación)
// /= (división y asignación)
// %= (módulo y asignación)

age += 5; // age = age + 5
age -= 5; // age = age - 5
age *= 5; // age = age * 5
age /= 5; // age = age / 5
age %= 5; // age = age % 5

// Funciones en JS

function saludar() {
	console.log('Hola');
}

saludar();

function saludar2(nombre) {
	console.log(`Hola ${nombre}`); // Template string o template literal o string literal o string template
}

saludar2('John');

function saludar3(nombre = 'John') {
	console.log(`Hola ${nombre}`);
}

saludar3();
saludar3('Steve');

function sumar(a, b) {
	return a + b;
}

console.log(sumar(1, 2));

const sumar2 = function (a, b) {
	return a + b;
};

console.log(sumar2(1, 2));

const sumar3 = (a, b) => {
	return a + b;
};

const sumar4 = (a, b) => a + b; // Si la función solo tiene una línea de código se puede omitir el return y las llaves
console.log(sumar3(1, 2));

// OOP (Object Oriented Programming)
// Clases
// Objetos
// Propiedades
// Métodos
// Herencia
// Encapsulamiento
// Polimorfismo

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

// La herencia es un mecanismo que permite que un objeto adquiera todas las propiedades y comportamientos de otro objeto

class Cliente extends Persona {
	constructor(nombre, edad, telefono, email) {
		super(nombre, edad);
		this.telefono = telefono;
		this.email = email;
	}

	pagar() {
		console.log('Pagando...');
	}
}

const cliente1 = new Cliente(
	'Steve',
	32,
	'123456789',
	'urtubeycarlos.0510@outlook.com'
);

cliente1.saludar();
cliente1.pagar();

class Vendedor extends Persona {
	constructor(nombre, edad, area) {
		super(nombre, edad);
		this.area = area;
	}

	trabajar() {
		console.log('Trabajando...');
	}
}
