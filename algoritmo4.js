
//Configura un array para que los valores negativos 
//se transformen en 0. Por ejemplo, resetNegativos([1,2,-1,-3])
//debiera dar como resultado [1,2,0,0].

function resetnegativo(x){
    for(i = 0 ;  i < x.length ; i++){
        if(x[i] < 0){
            x[i] = 0
        }
    }
    return x
}
z = resetnegativo([1,2,-1,-3])
console.log (z)



//Dado un array, mueve todos los valores un espacio de derecha a izquierda
 //eliminando el primer valor y dejando un 0 para el último valor. 
 //Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].

function mover(x){
    x.shift();
    x.push(0);
    return x
}

z = mover([3,4,6,4])
console.log(z)



//Configura un array para que el resultado sean los valores en el orden contrario.
//Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].

function reverso(x){
    newarr = []
    for( i = x.length - 1 ; i >= 0 ; i --){
        newarr.push(x[i])
    }
    return newarr
}
z = reverso([1,3,4,5,8]);
console.log(z)

//Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden).
// Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function repetir(x){
    newarr = []
    for(i = 0 ; i < x.length ; i++){
        newarr.push(x[i])
        newarr.push(x[i])
    }
    return newarr
}
z = repetir([5,'hola',7,8,'chao'])
console.log(z)