// class Animal { 
//   constructor(peso) {
//     this.peso = peso;
//   }

//   comer(animal){
//     return new Animal(this.peso + animal.peso);
//   }

//   andar(km){
//     return new Animal(this.peso -= 0.01 * km);
//   }
// }

// class AnimalQueGrita extends Animal {
//   constructor(peso){
//     super(peso);
//   }

//   gritar(){
//     return new AnimalQueGrita(this.peso - 0.5);
//   }
// }

// class AnimalQueVoa extends Animal {
//   constructor(peso){
//     super(peso);
//   }

//   voa(){
//     return new AnimalQueGrita(this.peso - 1);
//   }
// }

// let mula = new Animal(10); 
// let cavalo = new Animal(15);
// let tigre = new AnimalQueGrita(15);

// let resultado = tigre // 
//   .gritar()
//   .comer(cavalo) // 30
//   .andar(100) // 29 
//   .comer(tigre.comer(cavalo)) // 59 
  
// console.log(resultado);

// mula = 2;
// cavalo = 4;
// tigre = 7;
// const subtracao = (x, y) => x - y;
// const dobroSoma = (x, y) => (x + y) * 2;

// result = subtracao(subtracao(dobroSoma(tigre, cavalo), 1), 0.5);
// console.log(result);

// const nome = 'Rogerio junior' 

// const split = (value, arg) => value.split(arg)

// console.log(split('Rogerio junior', ' '));

const compose = (fns) => {
  (args) => {
    state = args;
    for(const fn of fns){
      state = fn(state)
      return state
    }    
  }
}

const consoleLog = console.log
const request = callback => callback('oi')
const get = request

const match = args => args[0] === args[1] ? true : false 
const reduce = (array = [], callback) => array.reduce(callback)
const map = (array, callback) => array.map(callback) 
const self = arg => arg
const expect = ['sucess', 'user: 1']
const result = ['error', '500']
const numbers = [1,2,3]

const patternMatch = (expect = [], result = []) => {
    if(expect.length >= 1 && result.length >= 1 && expect.length === result.length){
      const [hd, ...rest] = expect
      const [hd1, ...rest1] = result
      const isValid = match([hd, hd1] )
      if(!isValid) {
       return new Error('No match')
      }
      if(rest.length >= 1 && result.length >= 1){
        return patternMatch(rest, rest1)
      }
    } else {
      return new Error('No match')
    } 
}

const returnMatch = (expect = [], result = []) => {
  if(expect.length >= 1 && result.length >= 1 && expect.length === result.length){
    const [hd, ...rest] = expect
    const [hd1, ...rest1] = result
    const isValid = match([hd, hd1])
    if(isValid) {
      if(rest.length >= 1 && rest1.length >= 1){
        returnMatch(rest,rest1, expect)
      } else {
        console.log(result);
      }
    } else {
      return new Error('No match')
    }
  } else {
    return new Error('No match')
  } 
}

returnMatch(expect, expect)
patternMatch(expect, expect)

const interator = (array = [], callback) => {
  if(array.length >= 1 && Array.isArray(array)){
    const [hd, ...rest] = array
    callback(hd)
    if(rest.length >= 1){
      interador(rest, callback)
    }
  } else {
    return new Error('Invalid array')
  }
}

const interatorCurry = callback => (array = []) => {
  if(array.length >= 1 && Array.isArray(array)){
    const [hd, ...rest] = array
    callback(hd)
    if(rest.length >= 1){
      interador(rest, callback)
    }
  } else {
    return new Error('Invalid array')
  }
}

interador([0], console.log)
const instanceInterator = interadorCurry(console.log)

state = ['0x1234', 'ok:key:1', '0', '3', '5']

console.log(state.reverse())

//Interator reverse

