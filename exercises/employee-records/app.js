// You are to create a collection of employee's information for your company. Each employee has the following attributes:

// Name
// Job title
// Salary
// Status

// First, you will create an array named employees
var employees = []

// Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time"
// This constructor will also have a method called "printEmployeeForm" that prints the employee's information to the console.
function Employees (name, jobTitle, salary, status) { 
    this.name = name;
    this.title = jobTitle;
    this.salary = salary;
    this.status = status;
    // this.printEmployeeForm = function(arr) {
    //     for(var i = 0; i < arr.length; i++) {
    //         employees.push(arr[i])
    //         console.log(employees)
    //     }   
    // }
   
}
// Employees()

//     var changeStatus = this.changeStatus = function(newStatus) {
//         console.log(`Your status has changed from ${this.status} to ${newStatus}`)
//     }
    // console.log(this.printEmployeeForm)

// Call the "printEmployeeForm" method for each employee
// Put the generated employees into the "employees" array using whichever method you prefer.

// Instantiate three employees
var Jane = new Employees("Jane", 'CEO', '$200k/yr', 'Full Time')
var Stuart = new Employees("Stuart", "CFO", '$150K/yr', 'Full Time')
var Michelle = new Employees("Michelle", "Owner", '$300K/yr', 'Full Time') 


// console.log(Jane)
// console.log(Stuart)
// console.log(Michelle)

// Override the status attribute of one of them to either "Part Time" or "Contract"

// Jane.changeStatus('Part-Time')
// console.log(Jane)

