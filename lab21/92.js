const childProcess= require("child_process");
const res= childProcess.exec("ls",(err, stout, stdin) =>{
    console.log(stdout);
})