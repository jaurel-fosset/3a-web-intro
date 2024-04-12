function helloWorld()
{
    document.body.innerHTML = "<h1>Hello World ! </h1>"
}

function testValue()
{
    valeur = document.querySelector("#text-input").value;

    if (isNaN(valeur))
    {
        document.querySelector("#text-input").style.color = "red";
    }
    else if (valeur % 2 === 0)
    {
        document.querySelector("#text-input").style.color = "green";
    }
    else
    {
        document.querySelector("#text-input").style.color = "blue";
    }
}

function connectClickEvent()
{
    document.querySelector("button").addEventListener("click", testValue);
}


function modif()
{
    document.querySelector("h1").innerHTML = "Polytech Dijon";
    document.querySelector("strong").style.color = "#4691ff";
    document.querySelector("a").href = "https://esirem.u-bourgogne.fr/";
}
modif();
connectClickEvent();