function addChar(input, char) {
	if(input.value == null || input.value == "0")
		input.value = char;
	else
		input.value += char;
}

function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}

function cos(form) {
	form.display.value = Math.cos(form.display.value);
}

function sin(form) {
	form.display.value = Math.sin(form.display.value);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

function rad(form) {
	var x=form.display.value;
	var pi = Math.PI;
	form.display.value=x * (pi/180);
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}
function sqrt3(form) {
	var x=1/3;
	form.display.value = Math.pow(form.display.value,x);
}

function ln(form) {
	form.display.value = Math.log(form.display.value);
}

function lg10(form) {
	form.display.value = Math.log10(form.display.value);
}

function percent(input) {
  val = input.value;
  input.value = input.value/100;
}



function exp(form) {
	form.display.value = Math.exp(form.display.value);
}

function pow2(form) {
	form.display.value = Math.pow(form.display.value,2);
}
function pow3(form) {
	form.display.value = Math.pow(form.display.value,3);
}
function pow10(form) {
	form.display.value = Math.pow(10,form.display.value);
}
function div(form) {
	form.display.value = 1/form.display.value;
}

function factorial(form){
	var x=form.display.value;
	form.display.value=1;
	for (i=1; i<=x; i++){
		form.display.value=form.display.value*i;
	}
}
function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
    form.display.value = eval(form.display.value);
  }

