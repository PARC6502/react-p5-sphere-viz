import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import SyntaxHighlighter from "react-syntax-highlighter"
import { RadioGroup, Radio } from "react-radio-group"

import SketchDisplay from "../presenter/Sketch"
import Slider from "../presenter/Slider"
import sketch from "./sketch"

// const SyntaxHighlighter = React.lazy(() => import("react-syntax-highlighter"))

const DisplayContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
const DisplayItem = styled.div`
  width: 45%;
`

const SketchContainer = props => {
  /** State using hooks */
  const [radius, setRadius] = useState(100)
  const [frameCount, setFrameCount] = useState(0)
  const [phiStep, setPhiStep] = useState(Math.PI / 180)
  const [thetaStep, setThetaStep] = useState(Math.PI / 4)
  const [maxAngle, setMaxAngle] = useState(Math.PI)
  const [loopPhi, setLoopPhi] = useState(true)
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight * 0.8)

  /** Side effects using hooks*/
  useEffect(() => {
    function updateWindowDimensions() {
      let height = window.innerHeight * 0.8
      setCanvasHeight(height)
    }
    window.addEventListener("resize", updateWindowDimensions)
    return () => window.removeEventListener("resize", updateWindowDimensions)
  })

  // codeString is only recalculated if one of the variables included in it changes
  let codeString = useRef()
  useEffect(() => {
    codeString.current = createCodeString({
      phiStep,
      thetaStep,
      maxAngle,
      radius,
      loopPhi
    })
  }, [phiStep, thetaStep, maxAngle, radius, loopPhi])

  /** Rendering */
  return (
    <DisplayContainer>
      <DisplayItem>
        <SketchDisplay
          sketch={sketch}
          radius={radius}
          frameCount={frameCount}
          phiStep={phiStep}
          thetaStep={thetaStep}
          maxAngle={maxAngle}
          canvasHeight={canvasHeight}
          loopPhi={loopPhi}
          onLoop={() => setFrameCount(frameCount + 1)}
        />
      </DisplayItem>
      <DisplayItem>
        <SyntaxHighlighter language="javascript">
          {codeString.current || ""}
        </SyntaxHighlighter>
        <RadioGroup
          name="loopPhi"
          selectedValue={loopPhi}
          onChange={val => setLoopPhi(val)}
        >
          <Radio value={true} />
          phi
          <Radio value={false} />
          theta
        </RadioGroup>
        <Slider
          label="radius"
          min={10}
          max={500}
          step={10}
          value={radius}
          onChange={val => setRadius(Number(val))}
        />
        <Slider
          label="maximum angle"
          min={Math.PI / 5}
          max={Math.PI * 3}
          step={Math.PI / 10}
          value={maxAngle}
          onChange={val => setMaxAngle(Number(val))}
        />
        <Slider
          label="phi step"
          min={Math.PI / 360}
          max={Math.PI / 2}
          step={Math.PI / 360}
          value={phiStep}
          onChange={val => setPhiStep(Number(val))}
        />
        <Slider
          label="theta step"
          min={Math.PI / 360}
          max={Math.PI / 2}
          step={Math.PI / 360}
          value={thetaStep}
          onChange={val => setThetaStep(Number(val))}
        />
      </DisplayItem>
    </DisplayContainer>
  )
}

function createCodeString({ maxAngle, phiStep, thetaStep, radius, loopPhi }) {
  return decimalize`let phi = theta = 0
while (${loopPhi ? "phi" : "theta"} < ${maxAngle}) {
  phi += ${phiStep}
  theta += ${thetaStep}
  
  let x = ${radius} * cos(theta) * sin(phi)
  let y = ${radius} * sin(theta) * sin(phi)
  let z = ${radius} * cos(phi)
  
  curveVertex(x, y, z)
}`
}

function decimalize(strings, ...values) {
  console.log("rerun")
  let result = ""
  for (let i = 0; i < strings.length; i++) {
    result += strings[i]
    if (typeof values[i] === "number" && values[i] % 1 !== 0) {
      result += Number(values[i]).toFixed(2)
    } else if (values[i]) {
      result += values[i]
    }
  }
  return result
}

export default SketchContainer
