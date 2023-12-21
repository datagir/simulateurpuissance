import React, { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextAdapter } from 'next-query-params'
import { QueryParamProvider } from 'use-query-params'
import { init } from '@socialgouv/matomo-next'

import { GlobalStyle } from 'utils/styles'
import fonts from 'utils/fonts.css'

import { StyleProvider } from 'components/providers/StyleProvider'
import { ModalProvider } from 'components/providers/ModalProvider'
import { DataProvider } from 'components/providers/DataProvider'

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      init({ url: 'https://stats.beta.gouv.fr', siteId: 88 })
    }
  }, [])

  return (
    <QueryParamProvider adapter={NextAdapter}>
      <QueryClientProvider client={queryClient}>
        <StyleProvider>
          <DataProvider>
            <ModalProvider>
              <GlobalStyle />
              <Component {...pageProps} />
            </ModalProvider>
          </DataProvider>
        </StyleProvider>
      </QueryClientProvider>
    </QueryParamProvider>
  )
}

export default MyApp
