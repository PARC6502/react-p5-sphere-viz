function sketch(p, sketchProps, containerWidth, containerHeight) {
  let {
    radius,
    onLoop,
    frameCount,
    phiStep,
    thetaStep,
    maxAngle,
    loopPhi,
    canvasHeight
  } = sketchProps
  p.createCanvas(containerWidth, canvasHeight, p.WEBGL)
  p.background(255)
  p.rotateX(frameCount * 0.0075)
  p.rotateY(frameCount * 0.01)
  p.noFill()
  p.beginShape()
  // let maxAngle = p.PI / 4
  // let phiStep = p.PI / 180
  // let thetaStep = p.PI / 4
  let phi = 0
  let theta = 0
  while ((loopPhi ? phi : theta) < maxAngle) {
    phi += phiStep
    theta += thetaStep

    let x = radius * p.cos(theta) * p.sin(phi)
    let y = radius * p.sin(theta) * p.sin(phi)
    let z = radius * p.cos(phi)

    p.curveVertex(x, y, z)
  }
  p.endShape()
  onLoop()
}

export default sketch
