var unique = [];
var A = [1, 2, 3];
var B = [2, 3, 4];
var C = A.concat(B);
console.log(C);
for (var i = 0; i < A.length; i ++) {
    if (A[i] === C[i]) {
    for (var j = 0; j < B.length; j ++) {

        if ([i] !== [j]) {
          unique.push(i)

    }
        }
    }
}
