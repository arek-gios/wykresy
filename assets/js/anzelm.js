const anzelm = [1, 2, 3, 4, 5, 6, 7];

console.log(anzelm.length);

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

readTextFile("dane.csv");


fetch('dane.csv')
  .then(response => response.text())
  .then(text => console.log(text))
  // outputs the content of the text file

console.log("----------------------------------------------");

  fetch('anzelm.json')
  .then(response => response.json())
  .then(jsonResponse => console.log(jsonResponse))     
   // outputs a javascript object from the parsed json