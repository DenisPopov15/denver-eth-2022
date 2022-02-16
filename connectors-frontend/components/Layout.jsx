import { Center } from "@chakra-ui/react"

export const Layout = ({ children }) => {
  return (
    <Center maxW={1200} flexDirection={"column"}>
      {children}
    </Center>
  )
}
