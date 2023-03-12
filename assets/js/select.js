let url = "assets/data/select.txt";

fetch(url)
    .then(response => response.text())
    .then(data => {
        const dataArray = data.split(',');
        console.log("_+_+_+_");
        console.log(dataArray);
        for (i = 1; i < dataArray.length; i++) {
            let insert = document.getElementById("miesiace");
            const opt = document.createElement("option");
            opt.value = dataArray[i];
            const opis = dataArray[i];
            opt.text = month(opis);
            insert.add(opt, null);
        }
    });


function month(input) {
    console.log(input + ' input ' + i)
    const month_name = [" Styczeń ", " Luty ", " Marzec ", " Kwiecień ", " Maj ", " Czerwiec ", " Lipiec ", " Sierpień ", " Wrzesień ", " Październik ", " Listopad ", " Grudzień "];
    let year = input.substr(1, 4);
    let month_id = input.substr(5, 6);
    month_id = parseInt(month_id, 10);
    select = month_name[month_id - 1] + " " + year;
    return select;
}
