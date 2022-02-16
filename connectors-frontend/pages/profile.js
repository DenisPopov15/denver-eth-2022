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
import { discordAPIUrl } from "../_api/discord"
import { githubAPIUrl } from "../_api/github"
import { checkConnectionMetamask, connectMetamask, isMetamaskConnected } from "../services/metamask"
import { useEffect, useState } from "react"
import { LitProtocolService } from "../services/litProtocolService"
import { DeepSkillsService } from "../services/DeepSkillsService"
import CeramicClient from "@ceramicnetwork/http-client"
const CERAMIC_URL = 'https://ceramic-clay.3boxlabs.com'

export default function Connectors() {
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

      const ceramic = new CeramicClient(CERAMIC_URL)
      console.log('ceramic!!!', ceramic)
      const deepSkillsService = new DeepSkillsService(ceramic, window.ethereum)
      console.log('deepSkillsService!!!', deepSkillsService)
      const documents = await deepSkillsService.pullMySkills()
      console.log('documents!!', documents)
    } catch {}
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
                <a href={discordAPIUrl}>discord</a>
                {/* <button
            onClick={() =>
              discordConnector({
                did: "did:web:discord.com:123456789",
              })
            }
          >
            discord
          </button> */}
              </li>
              <li>
                <a href={githubAPIUrl}>github</a>
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
