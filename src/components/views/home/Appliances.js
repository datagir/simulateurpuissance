import React, { useContext } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import ModalContext from 'components/providers/ModalProvider'
import Button from 'components/base/Button'
import Appliance from './appliances/Appliance'

const Wrapper = styled.div`
  width: 16rem;
`
const Title = styled.h2``
const MyAppliances = styled.div``
const AddApplianceButton = styled(Button)``
export default function Appliances() {
  const { appliances } = useContext(DataContext)
  const { setNewAppliance } = useContext(ModalContext)

  return (
    <Wrapper>
      <Title>Mes Appareils</Title>
      <MyAppliances>
        {appliances.map((appliance) => (
          <Appliance appliance={appliance} />
        ))}
      </MyAppliances>
      <AddApplianceButton onClick={() => setNewAppliance(true)}>
        <svg width='14' height='15' viewBox='0 0 14 15'>
          <path d='M14 6.16472V8.83528C14 9.03631 13.8371 9.19945 13.6358 9.19945H8.69947V14.1358C8.69947 14.3371 8.53634 14.5 8.3353 14.5H5.66474C5.46382 14.5 5.30057 14.3371 5.30057 14.1358V9.19945H0.364169C0.162972 9.19945 0 9.03631 0 8.83528V6.16472C0 5.96364 0.162972 5.80055 0.364169 5.80055H5.30057V0.864146C5.30057 0.662869 5.46378 0.499977 5.66474 0.499977H8.3353C8.53634 0.499977 8.69947 0.662869 8.69947 0.864146V5.80055H13.6358C13.8371 5.80055 14 5.96364 14 6.16472Z' />
        </svg>
        Ajouter un appareil
      </AddApplianceButton>
    </Wrapper>
  )
}
