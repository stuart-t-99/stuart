import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h2>Strategy | Analytics | Machine Learning | Automation</h2>
    <p>I have over 10 years combined experience in Strategy, Analytics and implementing ML solutions that solve real customer problems.</p>
    <p>Currently managing a large project for the implementation of Microsoft Azure Machine Learning.</p>
    <p>Passionate about getting MLOps frameworks setup to allow ML solutions to scale.</p>
    <h3>Certified Micosoft Azure Data Scientist.</h3>
      <StaticImage
      src="../images/azure-data-scientist-associate-600x600.png"
      width={100}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
   <h3>Certified LUMA Human Centred Design Practitioner.</h3>
<StaticImage
      src="../images/luma_badge.png"
      width={100}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
