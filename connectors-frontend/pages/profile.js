import { coordinapeConnector } from "../services/connectors/coordinape"
import { poapConnector } from "../services/connectors/poap"
import { sourcecredConnector } from "../services/connectors/sourcecred"
import { discordConnector } from "../services/connectors/discord"
import { Layout } from "../components/Layout"
import { Container } from "@chakra-ui/react"
const discordAPIUrl = `${process.env.NEXT_PUBLIC_DISCORD_CONNECTOR_API_ENDPOINT}/discordRedirect`
const githubAPIUrl = `${process.env.NEXT_PUBLIC_GITHUB_CONNECTOR_API_ENDPOINT}/githubRedirect`
export default function Connectors() {
  return (
    <Layout>

      <Container>
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
    </Layout>
  )
}
