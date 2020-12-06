import React, { useEffect } from 'react'
import * as d3 from "d3";

function DonutChart({dataset, flag, name}) {

    useEffect(() => {
        if(flag === -1) {
            let extraPerc = 100 - dataset[0].percent
            let count = 0
            while(extraPerc >= 3) {
                extraPerc -= 3;
                dataset.push({name: "temp" + count, percent: 2, color: 'rgb(94, 151, 211)'})
                count++
            }
            if(extraPerc > 0) {
                dataset.push({name: "temp" + count, percent: 2, color: 'rgb(94, 151, 211)'})
            }
        }
        let pie=d3.pie()
        .value(function(d){return d.percent})
        .sort(null)
        .padAngle(.03);
        
        let w=200,h=200;
        
        let outerRadius=w/2;
        let innerRadius=outerRadius-10;
        
        let arc=d3.arc()
        .outerRadius(function(d) {
            if(flag !== -1)
                return outerRadius
            if(d.data.name === 'Data Quality Index') {
                return outerRadius
            } else {
                return outerRadius - 3
            }
        })
        .innerRadius(function(d) {
            if(flag !== -1)
                return innerRadius
            if(d.data.name === 'Data Quality Index') {
                return innerRadius
            } else {
                return innerRadius + 3
            }
        });
        
        let svg=d3.select('#'+name)
        .append("svg")
        .attr("width",w)
        .attr("height",h)
        .append('g')
        .attr("transform",'translate('+w/2+','+h/2+')');
        
        let path=svg.selectAll('path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr('d', arc)
        //   .attr('stroke-linejoin', 'round')
        .attr('fill', function(d) {
            return d.data.color
        })
        
        path.transition()
        .duration(1000)
        .attrTween('d', function(d) {
            let interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
            return function(t) {
                return arc(interpolate(t));
            };
        });
        
        let restOfTheData=function(){
     
            svg.append('text')
                .attr('transform', 'translate(-30, -60)')
                .attr('font-size', '15px')
                .style('fill', 'rgb(192, 192, 192)')
                .text('Currently')
            
            if(flag !== -1) {
                svg.append('svg:foreignObject')
                .attr('transform', 'translate(-60, -45)')
                .attr("width", 50)
                .attr("height", 50)
                .append("xhtml:body")
                .html('<i class="fas fa-dollar-sign fa-3x"></i>')
                .style('color', '#000')
            }

            svg.append('text')
                .attr('transform', 'translate(-35, 0)')
                .attr('class', name+'val')
                .attr('font-size', '65px')
                .text(function() {
                    if(flag === -1) {
                        let temp = dataset[0].percent.toString()
                        if(temp.length === 1) {
                            temp = '0' + temp;
                        }
                        return temp;
                    } else {
                        return dataset[flag].val
                    }
                })

            svg.append('svg:foreignObject')
                .attr('transform', 'translate(-25, 10)')
                .attr("width", 50)
                .attr("height", 50)
                .append("xhtml:body")
                .html('<i class="fas fa-arrow-up fa-2x"></i>')
                .style('color', function() {
                    if(flag === -1) {
                        return 'rgb(100, 206, 181)'
                    } else {
                        return dataset[flag].color
                    }
                })

            svg.append('text')
                .attr('transform', 'translate(5, 42)')
                .attr('font-size', '40px')
                .attr('class', name+'difference')
                .text(function() {
                    if(flag === -1) {
                        let temp = dataset[0].difference.toString()
                        // if(temp.length == 1) {
                        //     temp = '0' + temp;
                        // }
                        return temp;
                    } else {
                        return dataset[flag].difference
                    }
                })
                .style('fill', function() {
                    if(flag === -1) {
                        return 'rgb(100, 206, 181)'
                    } else {
                        return dataset[flag].color
                    }
                })
            svg.append('text')
                .attr('transform', 'translate(-45, 60)')
                .attr('font-size', '15px')
                .style('fill', 'rgb(192, 192, 192)')
                .text('from last month')
        };
        let timer = setTimeout(restOfTheData,1000);
        return () => {
            clearTimeout(timer)
        }
    }, [])

    useEffect(() => {
        // console.log(flag, dataset)
        if(flag !== -1) {
            d3.select('.'+name+'val')
            .text(dataset[flag].val)
            d3.select('.'+name+'difference')
            .text(dataset[flag].difference)
        }
    }, [flag])

    return (
        <div id={name}></div>
    )
}

export default DonutChart
