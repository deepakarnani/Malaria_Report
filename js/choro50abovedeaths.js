Plotly.d3.csv('https://raw.githubusercontent.com/one171717/malaria-spread/master/static/Deaths_50_69.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: unpack(rows, 'country '),
        z: unpack(rows, 'Deaths50-69'),
        text: unpack(rows, 'country '),
        autocolorscale: true
    }];

    var layout = {
      title: 'Average reported deaths of Malaria (50 - 69) in the last decade',
      geo: {
          projection: {
              type: 'robinson'
          }
      }
    };

    Plotly.plot("geomap2", data, layout, {showLink: false});

});