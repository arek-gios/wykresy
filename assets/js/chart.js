const  data_zdarzenia = ["01.07.2022","02.07.2022","03.07.2022","04.08.2022","05.08.2022","06.08.2022","07.08.2022","08.08.2022", "01.07.2022","02.07.2022","03.07.2022","04.08.2022","05.08.2022","06.08.2022","07.08.2022","08.08.2022"];
let lokalizacja ="Odra poniżej Jazu Lipki";
const tlen = [11.9, 10.9, 0, 10.4, 8.8, 0, 16, 8, 14.1, 10.9, 11.9, 10.9, 0, 10.4, 8.8, 0, 16, 8, 14.1, 10.9];
const ph = [9, 1, 9, 0, 8, 9, 8, 7, 9, 8, 9, 8, 8, 6, 8, 4, 9, 1, 9, 0, 8, 9, 8, 7, 9, 8, 9, 8, 8, 6, 8, 4];
console.log(ph.length);

const chart = new frappe.Chart("#chart", {
    
    data: {
        labels: [
            data_zdarzenia[0],
            data_zdarzenia[1],
            data_zdarzenia[2],
            data_zdarzenia[3],
            data_zdarzenia[4],
            data_zdarzenia[5],
            data_zdarzenia[6],
            data_zdarzenia[7],
            data_zdarzenia[8],
            data_zdarzenia[9],
            data_zdarzenia[10],
            data_zdarzenia[11],
            data_zdarzenia[12],
            data_zdarzenia[13],
            data_zdarzenia[14],
            data_zdarzenia[15]
        ], 
        datasets: [
            {
                name: "Zawartość Tlen", chartType: 'line',
                values: [
                    tlen[0],
                    tlen[1],
                    tlen[2],
                    tlen[3],
                    tlen[4],
                    tlen[5],
                    tlen[6],
                    tlen[7]
                ]
            },
            {
                name: "pH Wody", chartType: 'line',
                values: [
                    ph[0],
                    ph[1],
                    ph[2],
                    ph[3],
                    ph[4],
                    ph[5],
                    ph[6],
                    ph[7]]
            }
            /*,
            {
                name: "Yet Another", chartType: 'line',
                values: [15, 20, -3, -15, 58, 12, -17, 37]
            } */
        ],
    
        yMarkers: [{ label: "Dopuszczalne pH", value: 30,
            options: { labelPos: 'left' }}],

        // yRegions: [{ label: "Region", start: -10, end: 50,
        //    options: { labelPos: 'right' }}]
        },
    
        title: lokalizacja,
        type: 'axis-mixed', // or 'bar', 'line', 'pie', 'percentage'
        height: 300,
        colors: ['purple', '#ffa3ef', 'light-blue'],
    
        tooltipOptions: {
            formatTooltipX: d => (d + '').toUpperCase(),
            formatTooltipY: d => d + ' pts',
        }
        
});

const chart2 = new frappe.Chart("#chart2", {
  // or a DOM element,
  // new Chart() in case of ES6 module with above usage
  title: "percentage My Awesome Chart",
  data: data,
  type: "percentage",
  height: 250,
  colors: ["#7cd6fd", "#743ee2"],
});

const chart3 = new frappe.Chart("#chart3", {
  // or a DOM element,
  // new Chart() in case of ES6 module with above usage
  title: "line My Awesome Chart",
  data: data,
  type: "line", //, 'scatter', 'pie', 'percentage'
  height: 250,
  colors: ["#7cd6fd", "#743ee2"],
});

const chart4 = new frappe.Chart("#chart4", {
  // or a DOM element,
  // new Chart() in case of ES6 module with above usage
  title: "axis-mixed My Awesome Chart",
  data: data,
  type: "axis-mixed", // or 'bar', 'line', 'scatter', 'pie', 'percentage'
  height: 250,
  colors: ["#7cd6fd", "#743ee2"],
});
