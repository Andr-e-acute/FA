const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const para = document.createElement("p");
para.style.color="red"
para.textContent = "Hey I'm red!";
container.appendChild(para);

const header3 =document.createElement("h3");
header3.style["color"]="blue";
header3.textContent = "I'm a blue h3!"
container.appendChild(header3);

const div =document.createElement("p");
div.style.border="2px solid black";
div.style.backgroundColor="pink";

const header1= document.createElement("h1");
header1.textContent="I'm in a div"
div.appendChild(header1)

const para2 =document.createElement("p");
para2.textContent="ME TOO"
div.appendChild(para2);

container.appendChild(div);

const btn =document.querySelector("#btn");
btn.onclick=()=>alert('Hello World!')
const btn2 =document.querySelector('#btn2');
btn2.addEventListener('click',(e)=>{
    console.log(e.target);
    alert("hello World");
    console.log("eventListern can Handle more then one Thing")
})

