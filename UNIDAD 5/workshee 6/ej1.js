google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  const datasets = [
    [
      ["Partido", "Escaños", { role: "style" }],
      ["PP", 137, "#1E88E5"],
      ["PSOE", 121, "#E53935"],
      ["Vox", 33, "#43A047"],
      ["SUMAR", 31, "#FB8C00"],
      ["ERC", 7, "#8E24AA"],
      ["Junts", 7, "#3949AB"],
      ["EH Bildu", 6, "#6D4C41"],
      ["PNV", 5, "#26C6DA"],
      ["Otros", 3, "gray"]
    ],
    [
      ["Partido", "Escaños", { role: "style" }],
      ["PP", 130, "#1E88E5"],
      ["PSOE", 125, "#E53935"],
      ["Vox", 40, "#43A047"],
      ["SUMAR", 35, "#FB8C00"],
      ["ERC", 8, "#8E24AA"],
      ["Junts", 6, "#3949AB"],
      ["EH Bildu", 7, "#6D4C41"],
      ["PNV", 4, "#26C6DA"],
      ["Otros", 5, "gray"]
    ]
  ];

  let currentIndex = 0;

  function updateChart() {
    const data = google.visualization.arrayToDataTable(datasets[currentIndex]);
    const view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
      { calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation" },
      2]);

    const options = {
      title: "Distribución de escaños en las elecciones generales de España 2023",
      width: 600,
      height: 400,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
      hAxis: { title: "Partidos" },
      vAxis: { title: "Escaños" }
    };

    const chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
    chart.draw(view, options);

    
    currentIndex = (currentIndex + 1) % datasets.length;
  }

  updateChart();
  setInterval(updateChart, 10000);
}