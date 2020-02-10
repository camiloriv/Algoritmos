function resetnegativo(x){
    for(i = 0 ;  i < x.length ; i++){
        if(x[i] < 0){
            x[i] = 0
        }
    return x
    }
}
z = resetnegativo([1,2,-1,-3])
console.log (z)



//---------------------------------


function mover(x){
    x.shift();
    x.push(0);
    return x
}

z = mover([3,4,6,4])
console.log(z)



//-------------------------------------

function reverso(x){
    newarr = []
    for( i = x.length - 1 ; i >= 0 ; i --){
        newarr.push(x[i])
    }
    return newarr
}
z = reverso([1,3,4,5,8]);
console.log(z)

//---------------------------------


function repetir(x){
    newarr = []
    for(i = 0 ; i < x.length ; i++){
        newarr.push(x[i])
        newarr.push(x[i])
    }
    return newarr
}
z = repertir([5,'hola',7,8,'chao'])
console.log(z)

//-------------------------------------


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