class Employee {
    constructor(Emp_name,Emp_id,Emp_salary){
        this.Emp_name=Emp_name;
        this.Emp_id=Emp_id;
        this.Emp_salary=Emp_salary;
    }
}

let emp1=new Employee('Shiva', 123, 50000);

let emp2=new Employee('Ranjan', 124, 40000);
let emp3=new Employee('Ram', 125, 80000);

console.log(emp1,emp2,emp3);
