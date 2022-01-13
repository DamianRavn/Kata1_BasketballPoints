function points(twoPoints, threePoints)
{
    return (twoPoints * 2) + (threePoints * 3);
}

function displayPoints()
{
    let twoPoints = document.getElementById("twoPoint").value;
    let threePoints = document.getElementById("threePoint").value;

    let result = points(twoPoints, threePoints);

    let temp = document.getElementsByClassName("result");
    temp[0].innerHTML = "Result: "+ result;
}

console.log(points(1,1));
console.log(points(7,5));
console.log(points(38,8));
console.log(points(0,1));
console.log(points(0,0));