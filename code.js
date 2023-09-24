function fib(n) {
    var f1 = 0, f2 = 1;
    var arr = new Array(n + 1);
    switch(true){
        case n > 1:
            fibonacci(arr, f1, f2, n - 2);
        case n == 1:
            arr[1] = f2;
        case n == 0:
            arr[0] = f1;
            return arr;
        }
}

function fibonacci(arr, f1, f2, i) {
    arr[(arr.length - 1) - i] = f1 + f2;
    if(i > 0)
        fibonacci(arr, f2, f1 + f2, --i);
    else
        return arr;
}
