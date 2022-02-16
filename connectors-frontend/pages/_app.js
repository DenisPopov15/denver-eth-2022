import { extendTheme, ChakraProvider } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        boxSize: 'border-box',
        color: 'gray.600',
        lineHeight: 'tall',
      },
      a: {
        color: 'teal.500',
      },
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme} >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
