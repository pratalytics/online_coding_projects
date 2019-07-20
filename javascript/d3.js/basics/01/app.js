const canvas = d3.select('.canva')

//d3.select('p').style('color', 'red')
//d3.select('#specPara').style('color', 'red')
//d3.select('.para').style('color', 'red')
//d3.selectAll('p').style('color', 'blue')
//d3.selectAll('.para').style('color', 'blue')

// Selecting Nested Element

//d3.select('table').style('color', 'red')

//d3.select('thead').style('color', 'blue')

//d3.select('tbody').selectAll('td:first-child').style('color', 'Orange')

d3.select('#specPara').text('This paragraph is via d3.')
d3.select('#div1').append('h1').text('H1 tag')
d3.select('#div1').insert('h1').text('Inserted H1 tag')
d3.select('#div1 h1:last-child').remove()
d3.selectAll('.para').html('<button>Fire Button</button>')
d3.select('#div1 p:nth-last-child(3)').attr('class', 'error')
d3.select('input')
    .property('checked', true)
d3.select('#specPara')
    .classed('error', true)
