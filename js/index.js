let list1 = [true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true];
let list2 = [false, false, false];
let list3 = [true];
let contadorOvejas = 0;


function countSheeps(list) {
    for (index = 0; index < list.length; index++) {
    
    //comprobar si oveja o lobo
    if (list[index]) {
        contadorOvejas++;
    }}

    if (contadorOvejas === 1) {
        console.log ("There is " +  contadorOvejas + " sheep in total");
    }
    if (contadorOvejas !=1) {
        console.log ("There are " +  contadorOvejas + " sheep in total");
    }
    if (contadorOvejas === 0) {
    console.log ("Ups. Sheep have been eaten by wolves");
    }
}

countSheeps (list2);






