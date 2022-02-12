import Link from "next/link"
import { useEffect } from "react"
import Layout from "../components/Layout"

const IndexPage = () => {
  useEffect(() => {
    import("coordinape")
  }, [])
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
