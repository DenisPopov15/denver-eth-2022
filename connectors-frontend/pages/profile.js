import { coordinapeConnector } from "../services/connectors/coordinape"
import { poapConnector } from "../services/connectors/poap"
import { sourcecredConnector } from "../services/connectors/sourcecred"
import { discordConnector } from "../services/connectors/discord"
import { githubConnector } from "../services/connectors/github"

import { Layout } from "../components/Layout"
import { Box, Container, Grid, HStack, GridItem, Heading } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Section } from "../components/Section"
import { Sidebar } from "../components/Sidebar"
import { SkillBox } from "../components/SkillBox"
import { ProjectBox } from "../components/ProjectBox"
import { listenConnectionMetamask, connectMetamask, isMetamaskConnected } from "../services/metamask"
import { useEffect, useState } from "react"
import { LitProtocolService } from "../services/litProtocolService"
import { DeepSkillsService } from "../services/DeepSkillsService"
import CeramicClient from "@ceramicnetwork/http-client"

export default function Connectors({
  ceramicUrl,
}) {
  const [isConnected, setIsConnected] = useState(null)
  const [url, setUrl] = useState({ discord: null, github: null })
  useEffect(() => {
    listenConnectionMetamask(setIsConnected)
    isMetamaskConnected().then(setIsConnected)
  }, [])
  useEffect(() => {
    if (isConnected) {
      LitProtocolService.initlize().then((litProtocolService) => {
        window.litProtocolService = litProtocolService
        const ceramic = new CeramicClient(ceramicUrl)
        const deepSkillsService = new DeepSkillsService(ceramic, window.ethereum)
        return deepSkillsService.pullMySkills()
      }).then(d => console.log('d', d))
    }
    if (isConnected === false) {
      localStorage.removeItem('signedMessage')
      window.location = '/'
    }
  }, [isConnected, ceramicUrl])

  return (
    <>
      <Header hideConnectButton={true} />
      <Grid templateRows='repeat(1, 1fr)'
        templateColumns='repeat(5, 1fr)'>
        <GridItem colSpan={4} px={44}>

          <Section title={"Skills"}>
            <Heading size="md" fontWeight="bold" mb="8">Skills</Heading>
            <Box>
              <SkillBox skill='React' credentials='3' />
              <SkillBox skill='TypeScript' credentials='2' />
              <SkillBox skill='Solidity' credentials='1' />
              <SkillBox skill='Solidity' credentials='1' />
              <SkillBox skill='Solidity' credentials='1' />
            </Box>
          </Section>
          <Section title={"Projects"}>
            <Heading size="md" fontWeight="bold" mb="8">Projects</Heading>
            <Box>
              <ProjectBox organizationName='Deep Work Studio' projectDescription="Description, if there's any" dateRange='10 Mar 2022 - 21 Mar 2022' tag='Full-Stack' giveStatus='200' />
              <ProjectBox organizationName='test' projectDescription="Description, if there's any" dateRange='10 Mar 2022 - 21 Mar 2022' />
            </Box>
          </Section>
          <ul>
            <li>
              <button onClick={() => coordinapeConnector(true)}>coordinApe</button>
            </li>
            <li>
              <button onClick={() => poapConnector(true)}>poap</button>
            </li>
            <li>
              <button onClick={sourcecredConnector}>sourceCred</button>
            </li>
            <li>
              <button onClick={() => discordConnector({
                identifiers: 'dmfilipenko, Dmytro-Filipenko',
                encrypt: true
              }).then((url) => {
                window.location = url
              })}>discord</button>
            </li>
            <li>
              <button onClick={() => githubConnector({
                identifiers: 'dmfilipenko, Dmytro-Filipenko',
                encrypt: true
              }).then((url) => {
                window.location = url
              })}>github</button>
            </li>
          </ul>
        </GridItem>
        <GridItem>
          <Section title={"Skills"}>Some skills</Section>
        </GridItem>
      </Grid>
    </>
  )
}


export async function getServerSideProps() {



  return {
    props:
    {
      ceramicUrl: process.env.CERAMIC_URL,
      chain: process.env.CHAIN
    }
  }
}
