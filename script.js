let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
    arr.map(printMap);

    function printMap(emp){
        if(emp.profession === "developer"){
            console.log(emp);
        }
    }
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
    arr.forEach(emp =>{
        if(emp.profession === "developer"){
            console.log(emp);
        }
    })
}

function addData() {
  //Write your code here, just console.log
    let newEmp = {id: 4 , name : "susan", age : "20", profession : "intern"};
    arr.push(newEmp);
    console.log(arr);
} 

function removeAdmin() {
  //Write your code here, just console.log
    let remAD = arr.filter(function(emp){
        if(emp.profession !== "admin"){
            return emp;
        }
    })
    console.log(remAD);
}

function concatenateArray() {
  //Write your code here, just console.log
    let arr2 = [
        { id: 5, name: "rohan", age: "23", profession: "admin" },
        { id: 6, name: "sumit", age: "21", profession: "developer" },
        { id: 7, name: "vikas", age: "22", profession: "intern" },
    ];

    let concatARR = arr.concat(arr2);
    console.log(concatARR);
}
