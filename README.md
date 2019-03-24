A basic implemetation showing the ability to combine React and p5.js.

This implementation uses hooks, so no class components are used.

The actual element that combines p5 and React is the src/presenter/Sketch.jsx file. It will hopefully be an npm module at some point

## Usage

```javascript
import Sketch from "../presenter/Sketch" //or wherever else you put it

function sketch(p, sketchProps) {
  let { diameter } = sketchProps
  p.setup = function() {
    p.createCanvas(300, 300)
    p.background(255)
    p.stroke(3)
    p.ellipse(p.width / 2, p.height / 2, diameter)
  }
}

const SketchContainer = props => {
  let diameter = 400
  return (
    <>
      <SketchDisplay sketch={sketch} diameter={diameter} />
    </>
  )
}
```
