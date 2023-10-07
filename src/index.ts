console.log('hello, world');

// here's some cool stuff about JS....JS is a dynamic language, meaning any variable can be at any time of any type.
// sounds confusing, it's not, it make it very easy.

let x: any;  // x 'any' so it can be anything.  it 

x = 1;      // x is a number
x = "test"  // x is a string
x = {       // x is an object
    first: 'Don'
}

x.last = 'Wizard'   // I just added a last name to x, x is dynamic and can change at will

/*
    So, all of the above goes against everthing we were taught about programming, to keep things strongly typed.
    The reasoning behind strong typed languages (C/C++/Java/C#/etc) is that programmers are stupid and need
    strong typing to write good code.  Bullshit.  Enter typescript.
*/

let y: number;  // now we have all the power of strong typed languge by attaching a type
// y = 'string';   // not gonna allow

// I'm using the {} to tell TS exaclty what type object z is
let z: { first: string, last: string } = {
    first: 'Don',
    last: 'Wizard'
}

z.age = 68      // LOL, won't work anyway, age does not exist on z
