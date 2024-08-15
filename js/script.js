

document.querySelector("#btn").addEventListener("click",add);
function add(){
    let name=document.querySelector("#input-1").value;
    let age=document.querySelector("#input-2").value;
    let address=document.querySelector("#input-3").value;
    let email=document.querySelector("#input-4").value;
    if(name&&age&&address&&email){
        let row=document.createElement("tr");
        let newData1=document.createElement("td");
        let newData2=document.createElement("td");
        let newData3=document.createElement("td");
        let newData4=document.createElement("td");
        newData1.innerText=name;
        newData2.innerText=age;
        newData3.innerText=address;
        newData4.innerText=email;
        row.appendChild(newData1);
        row.appendChild(newData2);
        row.appendChild(newData3);
        row.appendChild(newData4);
        let tbody=document.querySelector("tbody");
        tbody.appendChild(row);
        console.log(newData1);
        console.log(newData2);
        console.log(newData3);
        console.log(newData4);
    }
    else{
        alert("Fill the all details..")
    }
}