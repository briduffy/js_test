// attach listener to run test button
// run all tests
//empty counts and lists when button clicked

var passed = 0;
var failed = 0;
var pCount = $('#p_count')
var fCount = $('#f_count')
var passedList = $('#passed_tests')
var failedList = $('#failed_tests')
var $btn = $('#run')

function makeLi(text) {
  return '<li>' + text + '</li>'
}

function addPass(name){
  pCount.text(++passed)
  passedList.append(makeLi(name))
}

funtion addFail(name, err){
  fCount.text(++failed)
  failedList.append(makeLi(name + ' - ' + err))
}
function runTest(name, actual, expected){
  try {
    epxect(actual).toEqual(expected)
    addPass(name)
  } catch (err) {
    addFail (name, err.message)
  }
}

function run(){
  runTest('sum', sum(2,3), 5)
  var arr = [1,2,3]
  var total = arr.reduce(sumArray, 0)
  runTest('sum array', sum, 6)
  runTest('avg array', avgArray(arr), 2)
}

function sum(x,y){
  return x + y
}

function sumArray(total, num){
  return total + num
}

function avgArray(arr){
  return arr.reduce (sumArray, 0) / arr.length
}

btn.on('click', function(){
  passed = 0
  failed = 0
  pCount.text(passed)
  fCount.text(failed)
  passedList.empty()
  failedList.empty()
  run()

})