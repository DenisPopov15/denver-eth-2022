import { coordinapeConnector } from "../services/connectors/coordinape"

export default function Connectors() {
  return (
    <div className="container">
      <ul>
        <li>
          <button onClick={coordinapeConnector}>coordinApe</button>
        </li>
        <li>
          <button>discord</button>
        </li>
        <li>
          <button>github</button>
        </li>
        <li>
          <button>poap</button>
        </li>
        <li>
          <button>sourceCred</button>
        </li>
      </ul>
    </div>
  )
}
