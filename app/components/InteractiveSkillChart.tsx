"use client"
import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import * as d3 from 'd3'

interface Skill {
  name: string
  level: number
  color: string
}

interface SkillChartProps {
  skills: Skill[]
  width?: number
  height?: number
}

export default function InteractiveSkillChart({ 
  skills, 
  width = 600, 
  height = 300 
}: SkillChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const controls = useAnimation()
  const isInView = useInView(svgRef)

  useEffect(() => {
    if (!svgRef.current || !isInView) return

    const svg = d3.select(svgRef.current)
    const radius = Math.min(width, height) / 2 - 30

    // Clear previous content
    svg.selectAll("*").remove()

    // Create the pie layout
    const pie = d3.pie<Skill>()
      .value(d => d.level)
      .sort(null)

    // Create arc generator
    const arc = d3.arc<d3.PieArcDatum<Skill>>()
      .innerRadius(radius * 0.6)
      .outerRadius(radius)

    // Create group element
    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`)

    // Add the arcs
    const paths = g
      .selectAll("path")
      .data(pie(skills))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", d => d.data.color)
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 0.8)
      .on("mouseover", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .style("opacity", 1)
          .attr("transform", "scale(1.05)")
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .style("opacity", 0.8)
          .attr("transform", "scale(1)")
      })

    // Add labels
    const labels = g
      .selectAll("text")
      .data(pie(skills))
      .enter()
      .append("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .style("fill", "white")
      .style("font-size", "12px")
      .style("pointer-events", "none")
      .text(d => d.data.name)

    // Animate on load
    paths
      .style("opacity", 0)
      .transition()
      .duration(1000)
      .delay((_, i) => i * 100)
      .style("opacity", 0.8)

    labels
      .style("opacity", 0)
      .transition()
      .duration(1000)
      .delay((_, i) => i * 100 + 500)
      .style("opacity", 1)

  }, [skills, width, height, isInView])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="w-full flex justify-center py-2"
    >
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="overflow-visible"
      />
    </motion.div>
  )
} 