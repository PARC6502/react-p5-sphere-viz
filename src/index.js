import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import { createGlobalStyle } from "styled-components"
import SphereSketch from "./SphereSketch"
const GithubCorner = React.lazy(() => import("react-github-corner"))

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`

ReactDOM.render(
  <>
    <GlobalStyle />
    <SphereSketch />
    <Suspense fallback={null}>
      <GithubCorner href="https://github.com/PARC6502/react-p5-sphere-viz" />
    </Suspense>
  </>,
  document.getElementById("app")
)

module.hot.accept()
