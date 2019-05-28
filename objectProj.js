let DFA = new Object()
DFA.name = 'Digital Film Academy'
DFA.course = 'Code immersives'
DFA.term = 2
DFA.students = []
DFA.teacher = 'Yury Shkoda'
DFA.classSize = 12

// console.log(DFA)

function Student(name, age, sex){
    this.name = name
    this.age = age
    this.sex = sex
}
// This is intentionally drawn out to go over different methods of adding things
function addClass(){
    let Alex = new Student('Alex', 30, 'Male')
    let Paul = new Student('Paul', 41, 'Male')
    let Jimmy = new Student('Jimmy', 30, 'Male')
    let dumbArray = [Alex, Paul, Jimmy]
    dumbArray.forEach(x=>DFA.students.push(x))
}
addClass()
let studentList = DFA.students.map(x => x.name)
console.log(`Welcome to ${DFA.name} and it's ${DFA.course} course. In term ${DFA.term}, the instructor ${DFA.teacher} runs a class of ${DFA.classSize}, including students such as ${studentList[0]}, ${studentList[1]}, and ${studentList[2]}.`)