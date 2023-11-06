
// function test (){
//     function isfunctionDecleration(){
//         console.log("i'm here")
//     }
//     isfunctionDecleration()
//     var varScope = ("varscope");
//     let letScope='letscope'
//     console.log(letScope)
//     console.log(varScope);
//   }

// console.log(inMap)
//   if (true){
//     function isfunctionDecleration(){
//         console.log("i'm here function decleration")
//     }
//     var functionExpressionLet = function(){
//         console.log("test expression let")
//     }
//     var varScope = "varscope";
//     let letScope='letscope'
//     functionExpressionLet();
//     isfunctionDecleration()
//     console.log(letScope)
//     console.log(varScope);
//   }
//   console.log(varScope)
//   isfunctionDecleration()
//   functionExpressionLet()
//   console.log(letScope)
 
functionDecleration()
// functionDecleration()
function functionDecleration(){
    console.log("im the global version")
 }
if(true){
 function functionDecleration(){
    console.log("im the 1 version in if")
 }

  functionDecleration=function(){
    console.log("i'm the expression verion in if")}
functionDecleration()
}
else{
    function functionDecleration(){
        console.log("im the 2 version in else")
     }
}
functionDecleration()


