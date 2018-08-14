// You are to create a collection of employee's information for your company. Each employee has the following attributes:

// Name
// Job title
// Salary
// Status

// First, you will create an array named employees
var employees = []
var Jane = new Employees("Jane", 'CEO', '$200k/yr')
var Stuart = new Employees("Stuart", "CFO", '$150K/yr')
var Michelle = new Employees("Michelle", "Owner", '$300K/yr') 
// Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time"
// This constructor will also have a method called "printEmployeeForm" that prints the employee's information to the console
function Employees (name, jobTitle, salary, status = "Full Time") { 
    this.name = name;
    this.title = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = 
        function (){
            console.log(`Name: ${this.name} Title: ${this.title} Salary: ${this.salary} Status: ${this.status}`)
        }
    }
   
    // Instantiate three employees
    // Override the status attribute of one of them to either "Part Time" or "Contract"
    // Call the printEmployeeForm method for each employee
    // Put the generated employees into the employees array using whichever method you prefer.


Jane.status = "Part Time"

Jane.printEmployeeForm()
Stuart.printEmployeeForm()
Michelle.printEmployeeForm()

employees.push(Jane)
employees.push(Stuart)
employees.push(Michelle)

console.log(Employees)

