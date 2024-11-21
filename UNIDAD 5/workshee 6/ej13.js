google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Visitors (millions)'],
        ['France', 89.4],
        ['Spain', 83.7],
        ['United States', 79.3],
        ['China', 65.7],
        ['Italy', 64.5],
        ['Turkey', 51.2],
        ['Mexico', 45.0],
        ['Thailand', 39.8],
        ['Germany', 39.6],
        ['United Kingdom', 39.4],
      ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }