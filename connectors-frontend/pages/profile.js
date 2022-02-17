import { coordinapeConnector } from "../services/connectors/coordinape"
import { poapConnector } from "../services/connectors/poap"
import { sourcecredConnector } from "../services/connectors/sourcecred"
import { discordConnector } from "../services/connectors/discord"

import { Layout } from "../components/Layout"
import { Container, SimpleGrid } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Wallet } from "../components/Buttons/Wallet"
import { Navigation } from "../components/Header/Navigation"
import { Section } from "../components/Section"
import { Sidebar } from "../components/Sidebar"

import { checkConnectionMetamask, connectMetamask, isMetamaskConnected } from "../services/metamask"
import { useEffect, useState } from "react"
import { LitProtocolService } from "../services/litProtocolService"
import { DeepSkillsService } from "../services/DeepSkillsService"
import CeramicClient from "@ceramicnetwork/http-client"
const CERAMIC_URL = 'https://ceramic-clay.3boxlabs.com'

export default function Connectors({
  discordUrl,
  githubUrl,
  ceramicUrl
}) {
  const [isConnected, setIsConnected] = useState(false)
  // const [ceramic, setCeramic] = useState()
  useEffect(() => {
    checkConnectionMetamask(setIsConnected)
    isMetamaskConnected().then(setIsConnected)
  }, [])
  const connectMetamaskHandler = async () => {
    try {
      await connectMetamask()
      setIsConnected(true)

      const litProtocolService = await LitProtocolService.initlize()
      window.litProtocolService = litProtocolService

      const ceramic = new CeramicClient(ceramicUrl)
      const deepSkillsService = new DeepSkillsService(ceramic, window.ethereum)
      const documents = await deepSkillsService.pullMySkills()
      console.log('documents!!', documents)
    } catch (e) {
      console.log('SOME ERRORS', e)
      console.log(e)
    }
  }
  return (
    <Layout>
      <Header>
        <Navigation>
          {isConnected ? null : (
            <Wallet onClick={connectMetamaskHandler}>Connect wallet</Wallet>
          )}
        </Navigation>
      </Header>
      <Container>
        <SimpleGrid columns={2} rows={1}>
          <Container>
            <Section title={"Skills"}>Some skills</Section>
            <Section title={"Projects"}>Some skills</Section>
            <ul>
              <li>
                <button onClick={coordinapeConnector}>coordinApe</button>
              </li>
              <li>
                <button onClick={poapConnector}>poap</button>
              </li>
              <li>
                <button onClick={sourcecredConnector}>sourceCred</button>
              </li>
              <li>
                <a href={discordUrl}>discord</a>
              </li>
              <li>
                <a href={githubUrl}>github</a>
              </li>
            </ul>
          </Container>
          <Sidebar>
            <Section title={"Skills"}>Some skills</Section>
          </Sidebar>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}


export async function getServerSideProps() {
  const discord = await fetch(`${process.env.HOST}/api/discord/redirect`).then(res => res.json())
  const github = await fetch(`${process.env.HOST}/api/github/redirect`).then(res => res.json())

  return {
    props:
    {
      githubUrl: github.url,
      discordUrl: discord.url,
      ceramicUrl: process.env.CERAMIC_URL
    }
  }
}
