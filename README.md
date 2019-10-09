# Belly Button Biodiversity

Check out the output @ https://bellybuttonspecials.herokuapp.com/

![Bacteria by filterforge.com](Images/bacteria_by_filterforgedotcom.jpg)

An interactive dashboard to explore the [Belly Button Biodiversity DataSet](http://robdunnlab.com/projects/belly-button-biodiversity/).

## 1 - App.js
Use Plotly.js to build interactive charts for the dashboard.
* Create a PIE chart that uses data from the samples route (`/samples/<sample>`) to display the top 10 samples.
  * Use `sample_values` as the values for the PIE chart.
  * Use `otu_ids` as the labels for the pie chart.
  * Use `otu_labels` as the hovertext for the chart.

![PIE Chart](Images/pie_chart.png)
  
* Create a Bubble Chart that uses data from the samples route (`/samples/<sample>`) to display each sample.
  * Use `otu_ids` for the x values.
  * Use `sample_values` for the y values.
  * Use `sample_values` for the marker size.
  * Use `otu_ids` for the marker colors.
  * Use `otu_labels` for the text values.
  
  ![Bubble Chart](Images/bubble_chart.png)
  
* Display the sample metadata from the route `/metadata/<sample>`
  * Display each key/value pair from the metadata JSON object somewhere on the page.
* Update all of the plots any time that a new sample is selected.
  
## 2 - Heroku
  * Deploy the Flask app to Heroku.
  
![Deployed_Page](https://bellybuttonspecials.herokuapp.com/)


### Funke Olaleye | Data Analytics and Visualization
