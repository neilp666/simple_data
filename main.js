// array of integers for the data join
//  var data = [25, 20, 10, 12, 15]

d3.csv("as.csv").then(function(data){
    data.forEach(function(d) {
        d.age = +d.age;
});

var svg = d3.select("#chart-area").append("svg")
    .attr("width", 700)
    .attr("height", 500);

// var rectangle = svg.append("rect")
//     .attr("x", 50)
//     .attr("y", 100)
//     .attr("width", 105)
//     .attr("height", 85)
//     .attr("fill", "red");

// var circle = svg.append("circle")
//     .attr("cx", 150)
//     .attr("cy", 25)
//     .attr("r", 25)
//     .attr("fill", "blue");

var circles = svg.selectAll("circle")
      .data(data);

    circles.enter()
        .append("circle")
            .attr("cx", function(d, i){
             console.log(d)
                 return (i * 50) + 25;
            })
            .attr("cy", 25)
            .attr("r", function(d) {
                 return d.age * 2;
            })
            .attr("fill", function(d) {
                if(d.name == "Tony") {
                    return 'blue'
                } else {
                    return 'red';
                }
            });
        }).catch(function(error) {
            console.log(error);
        });