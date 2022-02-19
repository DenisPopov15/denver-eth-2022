import { coordinapeConnector } from "../services/connectors/coordinape"
import { poapConnector } from "../services/connectors/poap"
import { sourcecredConnector } from "../services/connectors/sourcecred"
import { discordConnector } from "../services/connectors/discord"
import { githubConnector } from "../services/connectors/github"
import { Text, Box, Container, Grid, HStack, GridItem, Heading } from "@chakra-ui/react"
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Layout } from "../components/Layout"
import { Header } from "../components/Header"
import { OrgBox } from "../components/OrgBox"
import { Section } from "../components/Section"
import { Sidebar } from "../components/Sidebar"
import { SkillBox, SkillBoxLoading } from "../components/SkillBox"
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
  useEffect(() => {
    listenConnectionMetamask(setIsConnected)
    isMetamaskConnected().then(setIsConnected)
  }, [])
  const [graph, setGraph] = useState(null)
  useEffect(() => {
    if (isConnected) {
      LitProtocolService.initlize().then((litProtocolService) => {
        window.litProtocolService = litProtocolService
        const ceramic = new CeramicClient(ceramicUrl)
        const deepSkillsService = new DeepSkillsService(ceramic, window.ethereum)
        return deepSkillsService.pullMySkills()
      }).then(d => setGraph(d))
    }
    if (isConnected === false) {
      localStorage.removeItem('signedMessage')
      window.location = '/'
    }
  }, [isConnected, ceramicUrl])
  const [skills, setSkills] = useState(null)
  useEffect(() => {
    // console.log(graph)
    const apeprofiles = graph?.filter(x => x.type === 'apeprofiles')
    const poaps = graph?.filter(x => x.type === 'poaps')
    const github = graph?.filter(x => x.type === 'githubs')
    const apeSkills = Array.from(new Set(apeprofiles?.flatMap(x => x.skills))).slice(0, 3)
    const githubSkills = Array.from(new Set(github?.flatMap(x => x.languages))).slice(0, 3)
    const poapsSkill = Array.from(new Set(poaps?.flatMap(x => ({
      title: x.title,
      description: x.description,
      image: x.image
    }))))
    // setSkills()
    console.log(github, githubSkills, poapsSkill, apeSkills.join(', '))
    setSkills({
      poaps: poapsSkill,
      ape: apeSkills,
      github: githubSkills
    })
  }, [graph])
  return (
    <>
      <Header hideConnectButton={true} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          templateRows='repeat(1, 1fr)'
          templateColumns='repeat(5, 1fr)'
          px={44}
        >
          <GridItem colSpan={4}>
            <Section title="Skills">
              <Heading size="md" fontWeight="bold" mb="8" color="black">Skills</Heading>
              <Box ml="-10px" mt="-10px">
                {!graph ? <SkillBoxLoading /> : skills?.poaps.map((skill, idx) => (
                  <SkillBox
                    key={idx}
                    skill={skill.title}
                    description={skill.description}
                    source={"Poaps"}
                  />
                ))}
                {!graph ? <SkillBoxLoading /> : <SkillBox skill={skills?.ape.join(', ')} source={"Coordinape"} />}
                {!graph ? <SkillBoxLoading /> : <SkillBox skill={skills?.github.join(', ')} source={"Github"} />}
                {/* <SkillBox skill='TypeScript' credentials='2' />
                <SkillBox skill='Solidity' credentials='1' />
                <SkillBox skill='Solidity' credentials='1' />
                <SkillBox skill='Solidity' credentials='1' /> */}
              </Box>
            </Section>
            <Section title="Projects">
              <Heading size="md" fontWeight="bold" mb="8" color="black">Projects</Heading>
              <Box mt="-10px">
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
                <button onClick={() => sourcecredConnector(false)}>sourceCred</button>
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
            <Section>
              <Heading size="md" fontWeight="bold" mb="8" color="black">Reputation</Heading>

              <OrgBox organizationName='Deep Work Studio' reputationScore1="84" />
            </Section>
            <Section>
              <Heading size="md" fontWeight="bold" mb="8" color="black">Collaborators</Heading>
              <OrgBox organizationName='Deep Work Studio' reputationScore1="84" />
            </Section>
          </GridItem>
        </Grid>
      </Box>
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
