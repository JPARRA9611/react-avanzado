import styled from 'styled-components'

export const DivProgressBar = styled.div`
  background-color: #ecf0f1;
  border-radius: 13px;
  padding: 3px;
  width:100%
`
export const InsideProgressBar = styled.div`
  background-color: #3498db;
  width: ${props => props.width};
  height: 10px;
  border-radius: 10px;
`
