

var xValue = ["Angola", 
"Benin", 
"Burkina Faso", 
"Burundi", 
"Cameroon", 
"Central African Republic", 
"Chad", 
"Congo", 
"Democratic Republic of Congo", 
"Equatorial Guinea", 
"Ethiopia", 
"Gabon", 
"Gambia", 
"Ghana", 
"Guinea", 
"Guinea-Bissau", 
"Kenya", 
"Liberia", 
"Madagascar", 
"Malawi", 
"Mali", 
"Mozambique", 
"Niger", 
"Rwanda", 
"Senegal", 
"Sierra Leone", 
"South Sudan", 
"Tanzania", 
"Uganda", 
"Zambia"];

//malaria cases
var yValue = [80988.66018, 
129641.898, 
184499.4545, 
82717.68931, 
124121.7506, 
550989, 
180512.1769, 
581337, 
303327, 
154968, 
44415.68688, 
66849.9227, 
141511.3369, 
143004.9565, 
115708.317, 
387388, 
84315.22814, 
56437.44642, 
20099.71577, 
151590.4118, 
133664.1072, 
162855.6378, 
825719, 
85166.73794, 
104795.6621, 
79902.09607, 
310441, 
123891.4807, 
151622.8397, 
135771.5529];

//GDP
var yValue2 = [36481.22152, 
11418.40866, 
9023.841399, 
4656.505837, 
16794.67339, 
4571.670575, 
11883.28296, 
32069.49996, 
4053.337999, 
194886.4503, 
7750.574849, 
97426.61149, 
9516.483839, 
21701.91482, 
7273.188915, 
8513.412878, 
15906.86525, 
4614.441586, 
8236.879348, 
6365.14219, 
11129.74309, 
6099.318335, 
5149.591806, 
9152.616276, 
13229.84707, 
8529.493063, 
14868.52818, 
13714.04303, 
9800.536935, 
20986.18903];

var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  name: 'Malaria Cases',
  hoverinfo: 'none',
  opacity: 0.5,
  marker: {
    color: 'rgb(158,202,225)',
    line: {
      color: 'rbg(8,48,107)',
      width: 1.5
    }
  }
};

var trace2 = {
  x: xValue,
  y: yValue2,
  type: 'bar',
  name: 'GDP per capita 2010-2015',
  hoverinfo: 'none',
  marker: {
    color: 'rgba(58,200,225,.5)',
    line: {
      color: 'rbg(8,48,107)',
      width: 1.5
    }
  }
};

var data = [trace1,trace2];

var layout = {
  title: 'GDP Per Capita vs Malaria Cases 2010-2015',
  barmode: 'overlay'
};

Plotly.newPlot('barChart', data, layout);