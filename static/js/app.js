
async function makePlot(){
    const defaultURL = "/emoji_char";
    let data = await d3.json(defaultURL);
    data = [data];
    const layout = { 
        margin: { t: 30, b: 100 },
        title: "Expected Technical Skills for 5000+ job postings on Indeed",
        xaxis: { title: "Expected Skills" },
        yaxis: { title: "Total number of jobs" } 
    };
    Plotly.plot("bar", data, layout);
}

function updatePlotly(newdata) {
    Plotly.restyle("bar", "x", [newdata.x]);
    Plotly.restyle("bar", "y", [newdata.y]);
}

// Get new data whenever the dropdown selection changes
async function getData(route) {
    console.log(route);
    let data = await d3.json(`/${route}`);
    updatePlotly(data);
}

makePlot();