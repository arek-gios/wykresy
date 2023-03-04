const  data_zdarzenia = ["01.07.2022","02.07.2022","03.07.2022","04.08.2022","05.08.2022","06.08.2022","07.08.2022","08.08.2022", "01.07.2022","02.07.2022","03.07.2022","04.08.2022","05.08.2022","06.08.2022","07.08.2022","08.08.2022"];
let lokalizacja = "Odra poniżej Jazu Lipki";
const tlen = [8.8, 0, 16, 8, 14.1, 10.9, 11.9, 10.9, 0, 10.4, 8.8, 0, 16, 8, 14.1, 10.9];
const ph = [ 9, 1, 9, 0, 8, 9, 8, 7, 9, 8, 9, 8, 8, 6, 8, 4];
const nacl = [28.8, 0, 16, 8, 14.1, 10.9, 11.9, 10.9, 0, 38, 9, 8, 27, 9]

console.log("data " + data_zdarzenia.length);
console.log("tlen " + tlen.length);
console.log("ph " + ph.length);
console.log("nacl " + nacl.length);

const data = {
    labels: data_zdarzenia,
    datasets: [
        {
            name: "Some Data", type: "bar",
            values: [25, 40, 30, 35, 8, 52, 17, -4]
        },
        {
            name: "Another Set", type: "line",
            values: [25, 50, -10, 15, 18, 32, 27, 14]
        }
    ]
}

const data1 ={ 
    labels: data_zdarzenia,
    datasets: [
        {
            name: "Some Data", type: "bar",
            values: [25, 40, 30, 35, 8, 52, 17, -4]
        }
    ]
}

const chart = new frappe.Chart("#chart", {
    data: {
        labels: data_zdarzenia,
        datasets: [
            {
                name: "Zawartość Tlen", chartType: 'line',
                values: tlen 
            },
            {
                name: "pH Wody", chartType: 'line',
                values: ph
            }
            ,
            {
                name: "NaCl", chartType: 'line',
                values: nacl
            } 
        ],

        yMarkers: [{
            label: "Dopuszczalne pH", value: 24,
            options: { labelPos: 'left' }
        }],

        // yRegions: [{ label: "Region", start: -10, end: 50,
        //    options: { labelPos: 'right' }}]
    },

    title: lokalizacja,
    type: 'axis-mixed', // or 'bar', 'line', 'pie', 'percentage'
    height: 300,
    colors: ['red', 'blue', 'green'],
    tooltipOptions: {
        formatTooltipX: d => (d + '').toUpperCase(),
        formatTooltipY: d => d + ' g/m<sup>3</sup>',
    },
    lineOptions: {
        regionFill: 1 // default: 0 kolorowanie pod linią
    },

});

const chart2 = new frappe.Chart("#chart2", {
    // or a DOM element,
    // new Chart() in case of ES6 module with above usage
    title: "dane z data typ procentowy",
    data: data,
    type: "percentage",
    height: 250,
    colors: ["#7cd6fd", "#743ee2"],
});

const chart3 = new frappe.Chart("#chart3", {
    // or a DOM element,
    // new Chart() in case of ES6 module with above usage
    title: "dane z data typ bar",
    data: data1,
    type: "bar", //, 'scatter', 'pie', 'percentage'
    height: 250,
    colors: ["red"],
});

const chart4 = new frappe.Chart("#chart4", {
    // or a DOM element,
    // new Chart() in case of ES6 module with above usage
    title: "dane z data typ bar",
    data: data1,
    type: "bar", 
        height: 250,
        colors: ["blue"],
        barOptions: {
            spaceRatio: 0.2,
        } ,
});
