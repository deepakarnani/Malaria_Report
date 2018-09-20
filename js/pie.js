
var data = [{
    values: [228043, 172042, 88839, 45609, 334749, 81946, 88637, 54095, 168013, 83788],
    labels: ['Democratic Republic of the Congo', 'Angola', 'Burkina Faso', 'Ghana', 'Kenya', 'Malawi', 'Nigeria', 'Uganda', 'United Republic of Tanzania', 'Zambia'],
    type: 'pie'
  }];
  
var layout = {
    height: 600,
    width: 800,
    title: "Countries with reported deaths exceeding 5000"
  };
  
  Plotly.newPlot('pieplot', data, layout);