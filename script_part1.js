let area = "VIDE";

const width = 1920;
const height = 1080;

area = width * height;
console.log("Area = ", area);

///////

try
{
    height = 50;
}
catch(exception)
{
    console.log("height ne peut étre modifié");
    console.log(exception);
}

///////

const array = [];
array.push(50);
array.push("Hello !")

console.log(array);

///////

const notTrue = false;
const zero = 0;

if (notTrue === zero)
{
    console.log("Elles sont égale");
}
else
{
    console.log("Elles ne sont pas égale");
}

///////

const tableau = [];
for (let i = 0; i < 30; i++)
{
    tableau.push(Math.random());
}
console.log(tableau);

///////

function moyenne(array)
{
    moyenne = 0;
    for (const entier of array)
    {
        moyenne += entier;
    }

    moyenne /= array.length;
    return moyenne;
}
console.log(moyenne(tableau));
