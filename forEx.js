/*
JavaScript 반복 for문 예시
*/

for (let i=0; i<10; i++) {
    console.log(i);
}
var arr = [1,2,3,4,5];

// 요소와 인덱스 동시에
arr.forEach((e,i)=> {
    console.log(e,i);
});

// 요소만
arr.forEach((e)=> {
    console.log(e);
});

// for in (인덱스)
for (let i in arr) {
    console.log(i, arr[i]);
}
// 객체도 가능
var obj = {a:'A',b:'B',c:'C'};
for (let p in obj) {
    console.log(p, obj[p]);
}

// for of (요소)
for (let e of arr) {
    console.log(e);
}