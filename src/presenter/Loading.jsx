import React from "react"
// import styled, { keyframes } from "styled-components"

// const spinnerAnimation = keyframes`
//      0% {
//         transform: rotate(0deg);
//     }
//     100% {
//         transform: rotate(360deg);
//     }
// `
// const StyledSvg = styled.svg`
//   visibility: hidden;
//   opacity: 0;
//   height: 30px;
//   width: 30px;
//   min-width: 30px;
//   min-height: 30px;
//   transform-origin: 40px 40px 40px;
//   transition: 0.5s;
//   animation: ${spinnerAnimation} 1.3s infinite
//     cubic-bezier(0.53, 0.21, 0.29, 0.67);
// `
// const Loading = props => (
//   <svg viewBox="0 0 30 30" {...props}>
//     <defs>
//       <path id="prefix__a" d="M0 0h40v40H0z" />
//     </defs>
//     <g fill="none" fillRule="evenodd">
//       <circle cx={40} cy={40} r={38} stroke="#DEECF9" strokeWidth={2.817} />
//       <g transform="translate(40)">
//         <mask id="prefix__b" fill="#fff">
//           <use xlinkHref="#prefix__a" />
//         </mask>
//         <circle
//           cy={40}
//           r={38}
//           stroke="#0078D7"
//           strokeWidth={2.817}
//           mask="url(#prefix__b)"
//         />
//       </g>
//     </g>
//   </svg>
// )
const Loading = () => <div>Loading...</div>

export default Loading
