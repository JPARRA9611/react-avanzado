import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

export const Image = styled.img`
  border: 1px solid #ddd;
  border-radius: 50%;
  height: auto;
  overflow:hidden;
  object-fit:cover;
  width:75px;
  height: 75px;
  ${props => props.active ? 'box-shadow: 0px 10px 14px rgb(149, 165, 166)' : ''}
`
