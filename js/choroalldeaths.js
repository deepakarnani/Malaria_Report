Plotly.d3.csv('https://raw.githubusercontent.com/one171717/malaria-spread/master/static/Deaths_allages_V3.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: unpack(rows, 'country'),
        z: unpack(rows, 'DeathsAll'),
        text: unpack(rows, 'country'),
        autocolorscale: true
    }];

    var layout = {
      title: 'Average reported deaths of Malaria (all ages) in the last decade',
      geo: {
          projection: {
              type: 'robinson'
          }
      }
    };

    Plotly.plot("geomap5", data, layout, {showLink: false});

});