import React, { useEffect } from "react"
import styled from "styled-components"
import p5 from "p5/lib/p5.min.js"
// import p5 from "p5"

const SketchContainer = styled.div`
  width: 100%;
  height: 100%;
`

const Sketch = props => {
  let { sketch, ...sketchProps } = props
  let sketchContainer = React.createRef()

  useEffect(() => {
    let { width, height } = sketchContainer.current.getBoundingClientRect()
    let canvas = new p5(
      p => sketch(p, sketchProps, width, height),
      sketchContainer.current
    )
    return () => {
      canvas.remove()
    }
  })
  return <SketchContainer ref={sketchContainer} />
}

export default Sketch
