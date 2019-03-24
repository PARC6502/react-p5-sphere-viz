import React from "react"
import PropTypes from "prop-types"
import Slider from "rc-slider"
import styled from "styled-components"

// const Slider = props => {
//   return (
//     <input
//       type="range"
//       min={props.min}
//       max={props.max}
//       step={props.step}
//       value={props.value}
//       onChange={event => props.onChange(event.target.value)}
//     />
//   )
// }
const StyledSlider = styled(Slider)`
  position: relative;
  height: 14px;
  padding: 5px 0;
  width: 100%;
  border-radius: 6px;
  -ms-touch-action: none;
  touch-action: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  .rc-slider-rail {
    position: absolute;
    width: 100%;
    background-color: #e9e9e9;
    height: 4px;
    border-radius: 6px;
  }
  .rc-slider-track {
    position: absolute;
    left: 0;
    height: 4px;
    border-radius: 6px;
    background-color: #abe2fb;
  }
  .rc-slider-handle {
    position: absolute;
    margin-left: -7px;
    margin-top: -5px;
    width: 14px;
    height: 14px;
    cursor: pointer;
    cursor: -webkit-grab;
    cursor: grab;
    border-radius: 50%;
    border: solid 2px #96dbfa;
    background-color: #fff;
    -ms-touch-action: pan-x;
    touch-action: pan-x;
  }
  .rc-slider-handle:focus {
    border-color: #57c5f7;
    box-shadow: 0 0 0 5px #96dbfa;
    outline: none;
  }
`

const SliderWithLabel = ({ label, ...restProps }) => {
  return (
    <>
      <p>{label}</p>
      <StyledSlider {...restProps} />
    </>
  )
}
SliderWithLabel.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string
}

export default SliderWithLabel
