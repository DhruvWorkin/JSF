function repeat(prompt) {
    console.log(prompt)
}
function oddEven(n, myFun) {
    if (n % 2 == 0) {
        myFun("Even")
    } else {
        myFun("Odd")
    }
}
oddEven(2, repeat)