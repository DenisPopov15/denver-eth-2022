import { Heading, Container } from "@chakra-ui/react"
import {} from "@chakra-ui/react"

export const Section = ({ title, children }) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      {children}
    </Container>
  )
}
