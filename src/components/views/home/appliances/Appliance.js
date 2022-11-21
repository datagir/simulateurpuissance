import React, { useState } from 'react'
import styled from 'styled-components'

import Occurence from './appliance/Occurence'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  border: 0.125rem solid
    ${(props) => props.theme.colors[props.hover ? 'main' : 'background']};
  border-radius: 1rem 1rem 2rem 2rem;
  transition: border 300ms ease-out;
`
const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.color};
  border-radius: 1rem;
  opacity: ${(props) => (props.hover ? 0.1 : 0)};
  transition: opacity 300ms ease-out;
`
const Title = styled.p`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
  padding: 0.5rem 0.75rem 0;
`
const AddButton = styled.button`
  position: relative;
  display: flex;
  padding: 0.25rem;
  background: transparent;
  border: 0.125rem solid ${(props) => props.theme.colors.main};
  border-radius: 2rem;
  cursor: pointer;

  path {
    fill: ${(props) => props.theme.colors.main};
  }
`
const Occurences = styled.div`
  position: relative;
`
export default function Appliance(props) {
  const [hover, setHover] = useState(false)

  return (
    <Wrapper hover={hover}>
      <Background hover={hover} color={props.appliance.color} />
      <Title>
        {props.appliance.name}
        <AddButton
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <svg width='14' height='15' viewBox='0 0 14 15'>
            <path d='M14 6.16472V8.83528C14 9.03631 13.8371 9.19945 13.6358 9.19945H8.69947V14.1358C8.69947 14.3371 8.53634 14.5 8.3353 14.5H5.66474C5.46382 14.5 5.30057 14.3371 5.30057 14.1358V9.19945H0.364169C0.162972 9.19945 0 9.03631 0 8.83528V6.16472C0 5.96364 0.162972 5.80055 0.364169 5.80055H5.30057V0.864146C5.30057 0.662869 5.46378 0.499977 5.66474 0.499977H8.3353C8.53634 0.499977 8.69947 0.662869 8.69947 0.864146V5.80055H13.6358C13.8371 5.80055 14 5.96364 14 6.16472Z' />
          </svg>
        </AddButton>
      </Title>
      <Occurences>
        {props.appliance.occurences.map((occurence, index) => (
          <Occurence
            key={index}
            index={index}
            appliance={props.appliance}
            occurence={occurence}
            slug={props.appliance.slug}
          />
        ))}
      </Occurences>
    </Wrapper>
  )
}
