
const canvas = d3.select(".canva")

// Add an svg element to it

const svg = canvas.append('svg')
            .attr('width', '800')
            .attr('height', '250')

svg.append('circle')
    .attr('cx', '400')
    .attr('cy', '125')
    .attr('r', '50')
    .attr('fill', 'pink')

svg.append('rect')
    .attr('width', 100)
    .attr('height', 250)
    .attr('x', 200)
    .attr('y', 50)
    .attr('fill', 'green')

svg.append('line')
    .attr('x1', 130)
    .attr('x2', 45)
    .attr('y1', 200)
    .attr('y2', 70)
    .attr('stroke', 'grey')

svg.append('text')
    .text('Hello there')
    .attr('x', 500)
    .attr('y', 50)
