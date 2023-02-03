// Task 1

// const MAX_CONTRACT_VALUE = 5;
// let factory = {
//     facName : 'Volkswagen Wolfsburg Plant',
//     calculateWorkload : function (){
//         const employeeWorkData = this.employeeWeeklyWorkload;
//         const  workResult = [];
//         if(employeeWorkData && employeeWorkData.length > 0){
//             for(let emp of employeeWorkData){
//                 workResult.push(emp.workload || emp.timeSpent)
//             }
//             return workResult;
//         } else 'Invaild Data';
//     },
//     formatArray : function (name) {
//         const employeeData = this.employees;
//         if(employeeData && employeeData.lenght > 0){
//             employeeData.find((el) => el.name === name );
//             return {name: emp.name, timeLeft: MAX_CONTRACT_VALUE - emp.timeSpent};
//         }else return 'Invaild Data';
//     } 
// }

// let factoryEmployees = {
//     employees : [{name : "John", timeSpent : 1 } , {name : "Sam", timeSpent : 3 },{name : "Maria", timeSpent : 2 },{name : "Dan", timeSpent : 4 },{name : "Lorelai", timeSpent : 5 }],
// }

// let workloadData = {
//     employeeWeeklyWorkload : [{name : "John", workload : 40 } , {name : "Sam", timeSpent : 25 },{name : "Maria", timeSpent : 28 },{name : "Dan", timeSpent : 30 },{name : "Lorelai", timeSpent : 31 }]
// }

// let workArray = factory.calculateWorkload.bind(workloadData)();
// let formattedUser = factory.calculateWorkload.bind(factoryEmployees, 'Sam')();
// console.log(workArray);
// console.log(formattedUser);

// Task 2


// function sumOfNumbers (...array){
//  let sum = 0;
//  for(let num of array){
//     sum += num
//  }  return sum;
// }
// console.log(sumOfNumbers.apply(null,[11,12,31,45,67]));

// Task 3

// function checkIfEven(n){
//     n = Math.abs(n)
//     if(n == 0) return true;
//     else if(n === 1) return false;
//     return checkIfEven(n -2)
// }

// console.log(checkIfEven(-12));


// Task 4

// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

// function normilize(array){
//     let resultArray = [];
//     for(let i =1; i < array.length; i++){
//         let text = '';
//         if(i % 10 === 1){
//             text = `${i}st choise is ${array[i -1]}`
//         }else if (i % 10 === 2){
//             text = `${i}nd choise is ${array[i -1]}`
//         }else if (i % 10 === 3){
//             text = `${i}rd choise is ${array[i -1]}`
//     }else {
//         text = `${i}th choise is ${array[i -1]}`
//     }
//     resultArray.push(text)
// }
//     return resultArray;
// }

// console.log(normilize(color));

// Task 5

// let array = [NaN, 0, 15, false, -22, '',undefined, 47, null];

// function filterArray(array){
//     let resultArray = [];
//     for(let el of array){
//          if(!el){
//             continue;
//          } else resultArray.push(el)
//     }
//     return resultArray;
// }

// console.log(filterArray(array));

// Task 6

// let array1 = [1,2,3];
// let array2 = [2,1,30];
// function mergeArray (array1,array2){
//     let array3 = array1.concat(array2);
//     let uniqueArray = [];
//     for (let i of array3){
//         if(uniqueArray.indexOf(i)=== -1){
//             uniqueArray.push(i);
//         }
//     }
//     return uniqueArray;
// }

// mergeArray(array1,array2);

// Task 7

// let testFirst = [1,10,12,13];
// let testSecond = [4,5];

// function addTwoArray(arr1,arr2){
//     let mainArr = arr1.length >= arr2.length ? arr1: arr2;
//     return mainArr.map((el, index) => {
//         if(index < arr2.length){
//             return el + arr2[index]
//         } else return el;
//     })
// }
// console.log(addTwoArray(testFirst, testSecond));
