import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3'
import './BarChartWithResize.css'

const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null)

  useEffect(() => {
    const observerTarget = ref.current
    const resizeObserver = new ResizeObserver((entries) => {
      console.log('entries', entries)
      // set resized dimensions here
      entries.forEach(entry => {
        setDimensions(entry.contentRect)
      })
    });

    resizeObserver.observe(observerTarget);

    return () => {
      resizeObserver.unobserve(observerTarget)
    }
  }, [ref])
  return dimensions;
}

function BarChart({data}) {
  const svgRef = useRef()
  const wrapperRef = useRef()
  const dimensions = useResizeObserver(wrapperRef)

  useEffect(() => {
    const svg = d3.select(svgRef.current)
    console.log('dimensions', dimensions)
    if(!dimensions) {
      return 
    }

    //scales
    const xScale = d3.scaleBand()
      .domain(data.map((datum,index) => index))
      .range([0, dimensions.width])
      .padding(0.1); 

    const yScale = d3.scaleLinear()
      .domain([0,d3.max(data)+50])
      .range([dimensions.height, 0]); 

    const colorScale = d3.scaleLinear()
      .domain([0,d3.max(data)])
      .range(["green", "orange", "red"])
      .clamp(true); 

    const xAxis = d3.axisBottom(xScale).ticks(7).tickFormat(index => index + 1);
    const yAxis = d3.axisRight(yScale);
     
    const g = svg.append('g').attr('id', 'maingroup');
    let xAxisGroup = svg.select(".x-axis")
      //.style("transform", `translateY(${dimensions.height})`)
      .call(xAxis).attr('transform', `translate(${0}, ${dimensions.height})`)
    let yAxisGroup = svg.select(".y-axis")
      .style("transform", `translateY(${dimensions.width})`)
      .call(yAxis).attr('transform', `translate(${dimensions.width}, ${0})`)

    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .style("transform", "scale(1,-1)")
      .attr('x', (value, index) => xScale(index))
      .attr('y', -dimensions.height)
      .attr('width', xScale.bandwidth())
      .on("mouseenter", (event, value) => {
        svg.selectAll(".tooltip")
          .data([value])
          .join(
            enter => enter.append("text")
            .attr("y", yScale(value)+30))
            .attr("class", "tooltip")
            .text(value)
            .attr("x", xScale(data.indexOf(value)) + xScale.bandwidth() /2 - 0.1* xScale.bandwidth())
            //.attr("text-achor", "middle")
            .transition()
            .attr("y", yScale(value) - 8)
            .attr("opacity", 1)
      })
      .on("mouseleave", () => svg.select(".tooltip").remove())
      .transition()
      .attr("fill", colorScale)
      .attr('height', value => dimensions.height - yScale(value))
  }, [data, dimensions])

  return (
    <div className="bar-chart" ref={wrapperRef}>
      <svg ref={svgRef} width='600' height='400' className='svg-file'>
        <g className='x-axis' />
        <g className='y-axis' />
      </svg>
    </div>
  );
}

export default function BarChartWithResize() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75])

  return (
    <div className='bar-chart-app'>
      <br/>
      <BarChart data={data}/>
      <br/>
      <br/>
      <button onClick={() => setData(data.map(d => d + 5))} className='svg-button' >Update data</button>
      <button onClick={() => setData(data.filter(d => d<35))} className='svg-button' >Filter data</button>
      <button onClick={() => setData([...data, Math.round(Math.random()*100)])} className='svg-button'>Add data</button>
      <br />
    </div>
  )
}
