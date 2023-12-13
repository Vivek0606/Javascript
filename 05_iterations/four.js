const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    console.log(myObj[key]);
}


const programming = ['js', "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}