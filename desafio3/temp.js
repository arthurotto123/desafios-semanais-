

let opcao= 2
let num= 32



function celsius(){
    let soma = (num -32)*5/9
    return soma;
}

function far(){
    let soma1 = (num * 9/5)+32
    return soma1;
}

function converter(){
    if (opcao==1){
        console.log(`${num} F são o equivalente a ${celsius()} c`)
        
        
    } else if (opcao == 2){
        console.log(`${num} C são o equivalente a ${far()} F`)
    } else {
        console.log("Opção invalida")
    }
}

converter()