import React from "react"
import ReactDOM from "react-dom"
import { createGlobalStyle } from "styled-components"
import SphereSketch from "./SphereSketch"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`

ReactDOM.render(
  <>
    <GlobalStyle />
    <SphereSketch />
  </>,
  document.getElementById("app")
)

module.hot.accept()
