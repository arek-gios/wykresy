// const data_zdarzenia = ["01.07.2022", "02.07.2022", "03.07.2022", "04.08.2022", "05.08.2022", "06.08.2022", "07.08.2022", "08.08.2022", "01.07.2022", "02.07.2022", "03.07.2022", "04.08.2022", "05.08.2022", "06.08.2022", "07.08.2022", "08.08.2022"];
// let lokalizacja = "Odra poniżej Jazu Lipki";
// const temperatura = [8.8, 0, 16, 8, 14.1, 10.9, 11.9, 10.9, 0, 10.4, 8.8, 0, 16, 8, 14.1, 10.9];
// const cisnienie = [9, 1, 9, 0, 8, 9, 8, 7, 9, 8, 9, 8, 8, 6, 8, 4];
// const tlen = [28.8, 0, 16, 8, 14.1, 10.9, 11.9, 10.9, 0, 38, 9, 8, 27, 9]
// const przewodnosc = [8.8, 0, 16, 8, 14.1, 10.9, 11.9, 10.9, 0, 10.4, 8.8, 0, 16, 8, 14.1, 10.9];
// const ph = [9, 1, 9, 0, 8, 9, 8, 7, 9, 8, 9, 8, 8, 6, 8, 4];
// const siarczany = [28.8, 0, 16, 8, 14.1, 10.9, 11.9, 10.9, 0, 38, 9, 8, 27, 9]
// const chlorki = [9, 1, 9, 0, 8, 9, 8, 7, 9, 8, 9, 8, 8, 6, 8, 4];
// const sod = [9, 1, 9, 0, 8, 9, 8, 7, 9, 8, 9, 8, 8, 6, 8, 4];

// console.log("data " + data_zdarzenia.length);
// console.log("tlen " + tlen.length);
// console.log("ph " + ph.length);
// console.log("nacl " + nacl.length);

const data1 = {
    labels: data_zdarzenia,
    datasets: [
        {
            name: "Temperatura", type: "line",
            values: temperatura
        }
    ]
}

const data2 = {
    labels: data_zdarzenia,
    datasets: [
        {
            name: "Ciśnienie", type: "line",
            values: cisnienie
        }
    ]
}

const data3 = {
    labels: data_zdarzenia,
    datasets: [
        {
            name: "Tlen rozpuszczony", type: "line",
            values: tlen
        }
    ]
}

const data4 = {
    labels: data_zdarzenia,
    datasets: [
        {
            name: "Przewodność", type: "line",
            values: przewodnosc
        }
    ]
}

const data5 = {
    labels: data_zdarzenia,
    datasets: [
        {
            name: "Przewodność", type: "line",
            values: ph
        }
    ]
}

const data6 = {
    labels: data_zdarzenia,
    datasets: [
        {
            name: "Siarczany", type: "line",
            values: siarczany
        }
    ]
}

const data7 = {
    labels: data_zdarzenia,
    datasets: [
        {
            name: "Chlorki", type: "line",
            values: chlorki
        }
    ]
}

const data8 = {
    labels: data_zdarzenia,
    datasets: [
        {
            name: "Sód", type: "line",
            values: sod
        }
    ]
}





const chart1 = new frappe.Chart("#chart1", {
    title: "Temperatura",
    data: data1,
    type: 'line',
    height: 250,
    colors: ["#7cd6fd"],
    tooltipOptions: {
        formatTooltipX: d => (d + '').toUpperCase(),
        formatTooltipY: d => d + ' C<sup> o</sup>',
    }
});

const chart2 = new frappe.Chart("#chart2", {
    title: "Ciśnienie",
    data: data2,
    type: 'line',
    height: 250,
    colors: ["#111111"],
    tooltipOptions: {
        formatTooltipX: d => (d + '').toUpperCase(),
        formatTooltipY: d => d + ' hPa',
    }
});

const chart3 = new frappe.Chart("#chart3", {
    title: "Tlen rozpuszczony",
    data: data3,
    type: 'line',
    height: 250,
    colors: ["red"],
    tooltipOptions: {
        formatTooltipX: d => (d + '').toUpperCase(),
        formatTooltipY: d => d + ' mg/l',
    }

});

const chart4 = new frappe.Chart("#chart4", {
    title: "Przewodność",
    data: data4,
    type: 'line',
    height: 250,
    colors: ["orange"],
    tooltipOptions: {
        formatTooltipX: d => (d + '').toUpperCase(),
        formatTooltipY: d => d + ' µS/cm',
    }
});


const chart5 = new frappe.Chart("#chart5", {
    title: "Poziom pH",
    data: data5,
    type: 'line',
    height: 250,
    colors: ["green"],
    tooltipOptions: {
        formatTooltipX: d => (d + '').toUpperCase(),
        formatTooltipY: d => d + ' pH',
    }
});

const chart6 = new frappe.Chart("#chart6", {
    title: "Siarczany",
    data: data6,
    type: 'line',
    height: 250,
    colors: ["#eeff11"],
    tooltipOptions: {
        formatTooltipX: d => (d + '').toUpperCase(),
        formatTooltipY: d => d + ' mg/l',
    }
});

const chart7 = new frappe.Chart("#chart7", {
    title: "Chlorki",
    data: data7,
    type: 'line',
    height: 250,
    colors: ["violet"],
    tooltipOptions: {
        formatTooltipX: d => (d + '').toUpperCase(),
        formatTooltipY: d => d + ' mg/l',
    }
});

const chart8 = new frappe.Chart("#chart8", {
    title: "Sód",
    data: data8,
    type: 'line',
    height: 250,
    colors: ["red"],
    tooltipOptions: {
        formatTooltipX: d => (d + '').toUpperCase(),
        formatTooltipY: d => d + ' mg/l',
    }
});


document.getElementById("export1").addEventListener('click', function () { chart1.export(); });
document.getElementById("export2").addEventListener('click', function () { chart2.export() });
document.getElementById("export3").addEventListener('click', function () { chart3.export() });
document.getElementById("export4").addEventListener('click', function () { chart4.export() });
document.getElementById("export5").addEventListener('click', function () { chart5.export() });
document.getElementById("export6").addEventListener('click', function () { chart6.export() });
document.getElementById("export7").addEventListener('click', function () { chart7.export() });
document.getElementById("export8").addEventListener('click', function () { chart8.export() });



// read param from url
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

select_month = params.title

// h1 termin pomiarów
if (isNaN(select_month)) {
    document.getElementById("title_termin").insertAdjacentHTML(
        'beforeend',
        'ostatnich 30 dni',
    );
} else {
    let month_name = month(select_month.substr(5, 6))
    let opis = month_name + select_month.substr(0, 4);
    document.getElementById("title_termin").insertAdjacentHTML(
        'beforeend',
        opis,
    );
}

function month(month) {
    const month_name = [" Styczeń ", " Luty ", " Marzec ", " Kwiecień ", " Maj ", " Czerwiec ", " Lipiec ", " Sierpień ", " Wrzesień ", " Październik ", " Listopad ", " Grudzień "];
    select = month_name[month - 1];
    return select;
}

let ms = document.getElementById("miesiace");

document.getElementById("miesiace").addEventListener('change', function () { reload(ms.options[ms.selectedIndex].value) });

console.log(ms.options[ms.selectedIndex].value + " ms.opions z reload");

function reload(zmiana_daty) {
console.log(zmiana_daty + " zmiana daty " + typeof(zmiana_daty) + " typeof" );
    if (isNaN(zmiana_daty)) {
        window.location.href = "index.html";
    } else {
        window.location.href = "index.html?title=" + zmiana_daty;
    }
}


let response = await fetch(asserts/data/202301);

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let text = await response.text();
} else {
  alert("HTTP-Error: " + response.status);
}

console.log("response -> " + response);
