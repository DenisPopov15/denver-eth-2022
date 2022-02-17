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
import { SkillBox } from "../components/SkillBox"
import { ProjectBox } from "../components/ProjectBox"
import { checkConnectionMetamask, connectMetamask, isMetamaskConnected } from "../services/metamask"
import { useEffect, useState } from "react"
import { LitProtocolService } from "../services/litProtocolService"
import { DeepSkillsService } from "../services/DeepSkillsService"
import CeramicClient from "@ceramicnetwork/http-client"

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
    <>
      <Header hideConnectButton={true} />
      <Layout>

        <Container>
          <SimpleGrid columns={2} rows={1}>
            <Container>
              <Section title={"Skills"}>
                <SkillBox skill='React' credentials='3' />
                <SkillBox skill='TypeScript' credentials='2' />
                <SkillBox skill='Solidity' credentials='1' />
              </Section>
              <Section title={"Projects"}>
                <ProjectBox organizationName='Deep Work Studio' projectDescription="Description, if there's any" dateRange='10 Mar 2022 - 21 Mar 2022' tag='Full-Stack' giveStatus='200' />
                <ProjectBox organizationName='test' projectDescription="Description, if there's any" dateRange='10 Mar 2022 - 21 Mar 2022' />
              </Section>
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
    </>
  )
}


export async function getServerSideProps() {
  let discord = null, github = null
  try {
    discord = await fetch(`${process.env.HOST}/api/discord/redirect`).then(res => res.json())
    github = await fetch(`${process.env.HOST}/api/github/redirect`).then(res => res.json())
  } catch {
  }


  return {
    props:
    {
      githubUrl: github?.url || null,
      discordUrl: discord?.url || null,
      ceramicUrl: process.env.CERAMIC_URL
    }
  }
}
