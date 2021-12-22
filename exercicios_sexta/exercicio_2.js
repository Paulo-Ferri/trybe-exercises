function difference(x){
    let variavel;
    if (x <= 10){
        variavel = 10 - x;
    }else if (x > 10){
      variavel = x - 10;
    }
    return variavel
}
console.log(difference(10))