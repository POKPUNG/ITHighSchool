var test = {a: 59, b: 69, c: 79};
console.log(test.a);
console.log(test.b);
console.log(test.a + test.b + test.c);

// 객체 프로퍼티에 접근하는 방법은 "."
// 객체 안에 객체가 있을 수 있나요?
var test2 = {a: test, b: 4};

console.log(test2.a);
console.log(test2.a.a);
console.log(test2.a.b);

for(key in test) {
	console.log('key: '+key+' value: '+test[key]);
}