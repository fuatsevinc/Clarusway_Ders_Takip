
/* let student = 'Mustafa';

function sayHi(studentName){
    console.log(`Welcome ${studentName}`);
}

sayHi(student) */

// let students = ['John', 'Jane', 'Joe'];
// sayHi(students)

/* function sayHi(studentName){
    console.log(`Welcome ${studentName}`);
}

for (let i = 0; i < students.length; i++) {
    sayHi(students[i])
    
}
 */

/* function sayHi(student){
    for (let i = 0; i < student.length; i++) {
        console.log(`Welcome ${student[i]}`)
    }
}

sayHi(students) */


function sum (){
    let add = 0;
    // console.log(arguments);
    for (let i =0; i < arguments.length; i++){
        add += arguments[i]
    }
    return add;
}

// console.log(sum(1));
// console.log(sum(1,2,3,4,5,6));

/* function sum(a, ...others) {
    console.log(arguments);
    console.log(others);
    let sum =0;
    for (let i=0; i < others.length; i++){
    sum += others[i]
    }
    return sum * a ;
    }

    console.log(sum(5)); */

    const bill = function(tax, ...list){
        console.log(list);
        let total = 0;
        for(let i =0; i < list.length; i++){
            total += list[i]+list[i]*tax;
        }
        return total;
    }

    console.log(bill(0.18, 10,15,20,10))