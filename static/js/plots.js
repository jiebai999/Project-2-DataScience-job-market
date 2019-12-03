function init() {
    const data = [{
        values: [723, 376, 296],
        labels: ["data_scientist", "data_analyst", "data_engineer"],
        marker : {colors: ['Red', 'Blue', 'Green']},
        type: "pie",
    }];

    const layout = {
        height: 400,
        width: 600,
        legend: {
          traceorder: 'grouped'
        }
    };

    Plotly.plot("pie", data, layout);
}

function updatePlotly(newdata) {
    const PIE = document.getElementById("pie");
    Plotly.restyle(PIE, "values", [newdata]);
}

function getData(dataset) {
    let data = [];
    switch (dataset) {
        case "dataset1":
        data = [723,376,296];
        break;
        case "dataset2":
        data = [253,230,118];
        break;
        case "dataset3":
        data = [177,85,72];
        break;
        case "dataset4":
        data = [136,117,76];
        break;
        case "dataset5":
        data = [133,86,52];
        break;
        case "dataset6":
        data = [106,66,68];
        break;
        case "dataset7":
        data = [122,57,43];
        break;
        case "dataset8":
        data = [94,55,20];
        break;
        case "dataset9":
        data = [68,48,24];
        break;
        case "dataset10":
        data = [55,46,38];
        break;
        case "dataset11":
        data = [55,56,28];
        break;
        case "dataset12":
        data = [56,59,24];
        break;
        case "dataset13":
        data = [54,54,20];
        break;
        case "dataset14":
        data = [47,25,37];
        break;
        case "dataset15":
        data = [49,33,26];
        break;
        case "dataset16":
        data = [43,44,16];
        break;
        case "dataset17":
        data = [30,39,16];
        break;
        case "dataset18":
        data = [33,37,7];
        break;
        case "dataset19":
        data = [32,29,14];
        break;
        case "dataset20":
        data = [26,27,13];
        break;
        case "dataset21":
        data = [18,26,19];
        break;
        case "dataset22":
        data = [24,15,14];
        break;
        case "dataset23":
        data = [18,20,8];
        break;
        case "dataset24":
        data = [16,21,7];
        break;
        case "dataset25":
        data = [19,11,9];
        break;
        case "dataset26":
        data = [10,17,7];
        break;
        case "dataset27":
        data = [9,10,11];
        break;
        case "dataset28":
        data = [18,8,2];
        break;
        case "dataset29":
        data = [6,15,3];
        break;
        case "dataset30":
        data = [8,7,5];
        break;
        case "dataset31":
        data = [7,6,4];
        break;
        case "dataset32":
        data = [9,6,2];
        break;
        case "dataset33":
        data = [2,6,6];
        break;
        case "dataset34":
        data = [6,6,1];
        break;
        case "dataset35":
        data = [5,4,2];
        break;
        case "dataset36":
        data = [7,1,2];
        break;
        case "dataset37":
        data = [5,1,3];
        break;
        case "dataset38":
        data = [3,2,2];
        break;
        case "dataset39":
        data = [3,2,2];
        break;
        case "dataset40":
        data = [4,1,1];
        break;
        case "dataset41":
        data = [5,1,0];
        break;
        case "dataset42":
        data = [4,2,0];
        break;
        case "dataset43":
        data = [3,2,0];
        break;
        case "dataset44":
        data = [1,2,1];
        break;
        case "dataset45":
        data = [0,2,1];
        break;
        case "dataset46":
        data = [0,2,0];
        break;
        case "dataset47":
        data = [0,1,1];
        break;
        case "dataset48":
        data = [0,0,1];
        break;
        case "dataset49":
        data = [0,0,1];
        break;
        case "dataset50":
        data = [0,1,0];
        break; 


        default:
        data = [136,117,76];
        
  }
  updatePlotly(data);
}

init();
