import styled from 'styled-components'

const appear = keyframes`
 0% {opacity: 0;};
  100% {opacity: 1;};
`

const HeadText = styled.div`
  position: absolute;
  top: 23%;
  left: 25%;
  color: #fcfdfe;
  text-align: center;
  transition: opacity 2s linear 1s;
  animation: ${appear} 2s linear;
`

export default HeadText