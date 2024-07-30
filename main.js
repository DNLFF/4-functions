"use strict";
function getSolutions (a,b,c){
    let D = Math.pow(b,2)-4*a*c;
    let    x1,x2;

    if (D < 0) {

        return {
            D, 
            roots:[]}
    }

    if (D === 0) {
        x1 = -b/(2*a);

        return {
            D, 
            roots:[x1]}
    }

    if (D > 0) {
        x1 = ((-b + Math.sqrt(D)) / (2*a));
        x2 = ((-b - Math.sqrt(D)) / (2*a));  
        

        return {  
            D,
            roots:[x1,x2]}
    }
}

function showSolutionsMessage(a,b,c) {
    let result = getSolutions(a,b,c);

    console.log (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}.`);
    console.log (`Значение дискриминанта: ${result.D}`);

    if (result.D < 0){
        console.log("Уравнение не имеет вещественных корней");
    }

    if (result.D === 0){
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    }

    if (result.D > 0){
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}



function getAverageScore(data) {
    getAverageMark(data);

    let countProp = 0,
        totalData = 0;

    for (let propData in data) {
        totalData += data[propData];
        countProp +=1;
    }

    data.average = totalData / countProp;

    return data;
}

function getAverageMark(marks) {
    
    for(let prop in marks){
        let arrMarks = marks[prop],
         totalMarks = 0;

        for (let mark in arrMarks){
            totalMarks += arrMarks[mark];
        }

        marks[prop] = totalMarks/ arrMarks.length;
    }
   
   return marks;
}


/*console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}))*/


function getPersonData(secretData) {
    let firstName, lastName;

    for(let data in secretData){
        switch (data){

            case 'aaa':
                 firstName = getDecodedValue(secretData[data]);
                break;

            case 'bbb':
                 lastName = getDecodedValue(secretData[data]);
                break;

            default: 
            console.log('error');
        }
    }
    return{
        firstName,
        lastName
    }
}

function getDecodedValue(secret) {
    if (secret===1){
        return "Эмильо";
    }
    return "Родриго";
}

/*console.log( getPersonData({
    aaa: 0,
    bbb: 0
}))

console.log( getPersonData({
    aaa: 1,
    bbb: 0
}))

console.log( getPersonData({
    aaa: 0,
    bbb: 1
}))

console.log( getPersonData({
    aaa: 1,
    bbb: 1
}))*/
