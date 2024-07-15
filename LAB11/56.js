// continuation-passing Style
function sum(n1, n2, myFun) {
    let add = parseInt(n1) + parseInt(n2);
    myFun(add);
}
const answer = (ans) => {
    console.log("Output is : "+ans);
}
sum(5, 10, answer);