function buildMetadata(sample) {
    // @TODO: Complete the following function that builds the metadata panel
    var url = `/metadata/${sample}`;
    // Use `d3.json` to fetch the metadata for a sample
    d3.json(url).then(metadata => {
        // Use d3 to select the panel with id of `#sample-metadata`
        var panel = d3.select("#sample-metadata")
            // Use `.html("") to clear any existing metadata
        panel.html("");
        // Use `Object.entries` to add each key and value pair to the panel
        Object.entries(metadata).forEach(data => {
            panel.append("h5")
                .html(`${data[0]}: ${data[1]}`)
        });

        //  Build the Gauge Chart
        //buildGauge(data.WFREQ);
    });
}

function buildCharts(sample) {

    // Use `d3.json` to fetch the sample data for the plots
    var url = `/samples/${sample}`;
    d3.json(url).then(data => {
        //  Build a Bubble Chart using the sample data

        var trace_Bubble = {
            x: data.otu_ids,
            y: data.sample_values,
            mode: "markers",
            marker: {
                size: data.sample_values,
                color: data.otu_ids
            },
            text: data.otu_labels
        };

        var data_Bubble = [trace_Bubble];

        var layout_Bubble = {
            title: "<b>Belly Buttons Biodiversity</b>",
            xaxis: { title: "Microbial Species - OTU ID" },
            yaxis: { title: "OTU Sample Values)" }
        };

        Plotly.newPlot("bubble", data_Bubble, layout_Bubble);

        // Build a Pie Chart
        var trace_Pie = {
            labels: data.otu_ids.slice(0, 10),
            values: data.sample_values.slice(0, 10),
            hovertext: data.otu_labels.slice(0, 10),
            type: "pie"
        }

        var data_Pie = [trace_Pie];

        var layout_Pie = {
            title: "<b>Top 10 Samples of Belly Buttons Bateria Species</b>",
            showlegend: true
        }

        Plotly.newPlot("pie", data_Pie, layout_Pie);
    });

}

function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    d3.json("/names").then((sampleNames) => {
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });

        // Use the first sample from the list to build the initial plots
        const firstSample = sampleNames[0];
        buildCharts(firstSample);
        buildMetadata(firstSample);
    });
}

function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildCharts(newSample);
    buildMetadata(newSample);
}

// Initialize the dashboard
init();