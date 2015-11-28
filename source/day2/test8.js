var intro = function(name, age){
	console.log('내 이름은 '+name+'이고, 나이는 '+age+'입니다.');	
};

var add = function(a, b){
	return a+b;
}
var sub = function(a, b){
	return a-b;
}
var mul = function(a, b){
	return a*b;
}
var div = function(a, b){
	return a/b;
}
intro('이진혁', 30);
intro('홍길동', 40);

add(4,2);
sub(4,2);
mul(4,2);
div(4,2);

add(4);
add(4,2,2);