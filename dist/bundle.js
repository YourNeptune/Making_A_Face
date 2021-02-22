'use strict';

var d3 = require('d3');

const svg = d3.select('svg');
const width = parseFloat(svg.attr('width'));
const height = +svg.attr('height');

const g = svg
    .append('g')
        .attr('transform', `translate(${width/2}, ${height/2})`);

g
    .append('circle')
        .attr('r', height/2)
        .attr('fill', 'yellow')
        .attr('stroke', 'black');

const eyeSpacing = 100;
const eyeYOffset = -70;
const eyeRadius = 30;
const eyebrowWidth = 70;
const eyebrowHeight = 20;

const eyesG = g
    .append('g')
        .attr('transform', `translate(0, ${eyeYOffset})`);

eyesG
    .append('circle')
        .attr('r', eyeRadius)
        .attr('cx', - eyeSpacing);

eyesG
    .append('circle')
        .attr('r', eyeRadius)
        .attr('cx', + eyeSpacing);

const eyebrowsG = eyesG
    .append('g')
        .attr('transform', 'translate(0, 0)');

eyebrowsG
    .transition().duration(2000)
        .attr('transform', 'translate(0, -50)')
    .transition().duration(2000)
        .attr('transform', 'translate(0, 0)');

eyebrowsG
    .append('rect')
        .attr('width', eyebrowWidth)
        .attr('height', eyebrowHeight)
        .attr('x', - eyeSpacing)
        .attr('y', - eyeRadius);

eyebrowsG
    .append('rect')
        .attr('width', eyebrowWidth)
        .attr('height', eyebrowHeight)
        .attr('x', eyeSpacing)
        .attr('y', - eyeRadius);
    

g
    .append('path')
        .attr('d', d3.arc()({
            innerRadius: 150,
            outerRadius: 170,
            startAngle: Math.PI / 2,
            endAngle: Math.PI * 1.5
        }));
