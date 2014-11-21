var screenEl = document.getElementById('screen')
var sing, result1 = 0, result2 = 0, buf = 0, flag = 0
//Callbacks

var onNum = function(num) {
  // Логгирование
   console.log(num)
   var a = number(num)
   screenEl.innerHTML = a
}

function calcDisplay(num) {
	screenEl.innerHTML = num
}

var onAdd = function() {
	sing = addNumber
	addNumber(result1, result2)
	result2 = 0
	flag = 1
}

function onSub() {
	sing = subNumber
	subNumber(result1, result2)
	result2 = 0
	flag = 1

}

function onMul() {
	sing = mulNumber
	mulNumber(result1, result2)
	result2 = 0
	flag = 1
}

function onDiv() {
	sing = divNumber
	result2 = 0
	flag = 1

}
// onDiv/Mul/Sub ...

var onReset = function() {
  screenEl.innerHTML = '0'
  result1 = 0;
  result2 = 0;
  sing = null
  flag = 0
}

function number(num) {
	var a = num
	if  (flag == 0) {
		buf = result1
		result1 = 10 * buf + a
		return result1
	} else {
		buf = result2
		result2 = 10 * buf + a
		return result2
	}
}

function onCompute() {
	sing(result1, result2)
	result2 = 0
}

function addNumber(num1, num2) {
	result1 += result2
	calcDisplay(result1)
}

function subNumber() {
	result1 -= result2
	calcDisplay(result1)
}

function divNumber() {
		result1 /= result2
		calcDisplay(result1)
}

function mulNumber() {
	if (result2 == 0) {
		result2 = 1
	}
	result1 *= result2
	calcDisplay(result1)
}


