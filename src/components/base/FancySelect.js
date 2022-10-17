import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
  line-height: 1.3;
  color: ${(props) => props.color || props.theme.colors.main};
`
const Value = styled.span``
const Input = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: inherit;
  font-weight: inherit;
  color: transparent;
  background-color: transparent;
  border: none;
  box-shadow: 0px 0.1em 0px 0px
    ${(props) => props.color || props.theme.colors.main};
  transition: box-shadow 300ms ease-out;
  appearance: none;
  cursor: pointer;
`
export default function FancySelect(props) {
  return (
    <Wrapper color={props.color}>
      <Value
        dangerouslySetInnerHTML={{
          __html: props.options.find((option) => option.value === props.value)
            ? props.options.find((option) => option.value === props.value)
                .label + (props.suffix ? ' ' + props.suffix : '')
            : '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
        }}
      />
      <Input
        id={props.name}
        name={props.name}
        value={props.value ? props.value : ''}
        onChange={(e) => {
          props.onChange(e.currentTarget.value)
        }}
        color={props.color}
      >
        {props.options.map((option, index) => (
          <option
            key={option.value + '-' + index}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </Input>
    </Wrapper>
  )
}
