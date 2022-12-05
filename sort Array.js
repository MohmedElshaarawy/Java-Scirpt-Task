

//ascending


var x=[2,10,1,20,5,30,3,45]
document.write(x.sort(function myfunction (a,b){
    return a-b;
}));



//Descending order


var x=[2,10,1,20,5,30,3,45]
document.write(x.sort(function myfunction (a,b){
    return b-a;
}));
