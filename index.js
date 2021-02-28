const { Console } = require("console");
const fetch = require("node-fetch");

async function main(){
    console.log("Dummy Code");
    await fetch("https://jsonkeeper.com/b/2QRI") //Dummy Comment
    .then(res=>res.json())
    .then(json=>{
        if(json.status == 202){
            console.log(json.message);
        }else{
            console.log("Dummy Error");
        }
    });
    await fetch("https://jsonkeeper.com/b/2QRI") //Dummy Comment
    .then(res=>res.json())
    .then(json=>{
        if(json.status == 200){
            console.log(json.message);
        }else{
            console.log("Dummy Error");
        }
    });
}

main();