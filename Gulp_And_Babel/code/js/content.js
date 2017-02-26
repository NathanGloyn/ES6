import logThing from './extra.js';


export const aValue = 123;

export function greeting(){
	return 'Hello!';
}

export function nameTheThing(name){
	logThing(name);
}

export function add(a, b){
	if(!Number.isInteger(a)) {
		throw new Error('a is not an integer: ' + a);
	}
	
	if(!Number.isInteger(b)) {
		throw new Error('b is not an integer: ' + b);
	}
	
	return a + b;
	
}
