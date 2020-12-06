import React, { useEffect } from 'react'
import * as d3 from "d3";

function LineChart({data}) {

    useEffect(() => {
        // console.log(data.length)
        if(data.length > 0)
            draw()
    }, [data])

    // d3.select('#linechart')
    // .select('svg')
    // .remove();

    // d3.select('#linechart')
    //     .select('.tooltip')
    //     .remove();

    const draw = () => {
        const margin = { top: 50, right: 50, bottom: 50, left: 50 };
        const yMinValue = d3.min(data, d => d.value);
        const yMaxValue = d3.max(data, d => d.value);
        const xMinValue = d3.min(data, d => d.label);
        const xMaxValue = d3.max(data, d => d.label);
        const width = window.innerWidth - 250
        const height = 200

        const svg = d3
            .select('#linechart')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
        const tooltip = d3
            .select('#linechart')
            .append('div')
            .attr('className', 'box')
            .attr('class', 'tooltip')
            .style('opacity', 0);

        const xScale = d3
            .scaleLinear()
            .domain([xMinValue, xMaxValue])
            .range([0, width]);
        const yScale = d3
            .scaleLinear()
            .range([height, 0])
            .domain([0, yMaxValue]);
        const line = d3
            .line()
            .x(d => xScale(d.label))
            .y(d => yScale(d.value))    
        const line2 = d3
            .line()
            .x(d => xScale(d.label))
            .y(d => yScale(d.error))    
        svg
            .append('g')
            .attr('class', 'grid')
            .call(
                d3.axisLeft(yScale)
                .tickSize(-width)
                .tickFormat(''),
            )
            .attr('color', 'rgb(250, 250, 250)')
        svg
            .append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom().scale(xScale).tickSize(0))
        svg
            .append('g')
            .attr('class', 'y-axis')
            .call(d3.axisLeft().scale(yScale).tickSize(0));
        svg
            .append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', 'rgb(74, 162, 221)')
            .attr('stroke-width', 2)
            .attr('class', 'line') 
            .attr('d', line);
        
        svg
            .append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', 'rgb(160, 233, 251)')
            .attr('stroke-width', 2)
            .attr('class', 'line') 
            .attr('d', line2);

        const focus = svg
            .append('g')
            .attr('class', 'focus')
            .style('display', 'none');

        focus.append('circle').attr('r', 5).attr('class', 'circle').attr('fill', 'rgb(74, 162, 221)');
            
        // const tooltip = d3
        //     .select('#container')
        //     .append('div')
        //     .attr('class', 'tooltip')
        //     .style('opacity', 0);

        svg
            .append('rect')
            .attr('class', 'overlay')
            .attr('width', width)
            .attr('height', height)
            .style('opacity', 0)
            .on('mouseover', () => {
                focus.style('display', null);
            })
            .on('mouseout', () => {
                tooltip
                    .transition()
                    .duration(300)
                    .style('opacity', 0);
            })
           .on('mousemove', mousemove);
           
        function mousemove(event) {
            const bisect = d3.bisector(d => d.label).left;
            const xPos = d3.pointer(event)[0]; 
            const yPos = d3.pointer(event)[1]
            const x0 = bisect(data, xScale.invert(xPos));
            const d0 = data[x0];
            focus.attr(
                'transform',
                `translate(${xScale(d0.label)},${yScale(d0.value)})`,
            );
            tooltip
                .transition()
                .duration(300)
                .style('opacity', 0.9);
            tooltip
                .html(d0.tooltipContent || d0.label)
                .style(
                    'transform',
                    `translate(${xScale(d0.label) + 30}px,${yScale(Math.max(d0.value, d0.error)) - 230}px)`,
            );
        }
    }

    return (
        <div id='linechart' className='box' style={{height: '300px', width: 'fit-content', margin: '0px auto'}}></div>
    )
}

export default LineChart
