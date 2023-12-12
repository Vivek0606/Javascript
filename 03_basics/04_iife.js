// Immediately Invoked Function Expressions (IIFE)

//Named IIFE
(function chai(){
    console.log('Db connected');
} )();
// Use semicolon to execute next IIFE code.




( (name) => {
    console.log(`DB connected TWO ${name}`);
} )('VIVEK')

// Many times variables from global scope cause pollution to prevent that we use IIFE 