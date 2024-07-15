// continuation-passing Style
function check(n, myFun) {
    let x = parseInt(n);
    myFun(x);
}
const answer = (n) => {
   if (n % 2 == 0) {
        console.log(n+" is even")
    } else {
        console.log(n+" is odd")
    }
}
check(5, answer);