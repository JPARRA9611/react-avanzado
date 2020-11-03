import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
  width: 100%;
`
export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  border: 1px solid #95a5a6;
  height: 45px;
  outline: none;
  border-radius:1px;
  background-color:rgb(195, 195, 195, .1);
  &[disabled] {
    opacity: .3;
  };
  &::placeholder {
    padding:5px;
    font-size: 15px
  }
`
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.span`
  color: red;
  font-size: 14px
`

export const Div = styled.div`
  padding:5%;
  margin:5%;
  border: 1px solid #ecf0f1;
  border-radius: 5px;
  height:300px;
`
