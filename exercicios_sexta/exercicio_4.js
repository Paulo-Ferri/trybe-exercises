function multiples_of_3_or_5(roof){
    let contagem = 0
    for (index = 0; index < roof; index += 1){
        if (index % 3 == 0 || index % 5 == 0){
            contagem += index;
        }
    }
    return contagem
}
console.log(multiples_of_3_or_5(10))