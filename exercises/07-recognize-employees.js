// Write a function "recognizeEmployees" that takes two arguments:
// 1) an array of names of people to be recognized
// 2) an array of employees of the month
// Return an array telling everyone that they did a great job, except employees
// of the month did an outstanding job.
//
// Examples:
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill'])
// > ['Great job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill', 'Susan'])
// > ['Outstanding job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Jennifer', 'Dylan'])
// > ['Great job, Susan!', 'Great job, Anthony!', 'Great job, Bill!']
//
// Hint: What is the best data structure for the employees of the month list?

function recognizeEmployees (names, emplOfMonth) {
  let recognizeArray = []
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < emplOfMonth.length; j++) {
      if (names[i] === emplOfMonth[j]) {
        recognizeArray.push('Outstanding job, ' + names[i] + '!')
        names.splice(i, 1)
      } else {
        recognizeArray.push('Great job, ' + names[i] + '!')
      }
    }
  }
  return recognizeArray
  // needs work
}
