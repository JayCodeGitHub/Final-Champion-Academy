import React from "react"
import { graphql } from "gatsby"
import PageLayout from "../../Layouts/PageLayout"
import ContentLayout from "../../Layouts/ContentLeyuot"

const NartyPage = ({data}) => {
  return (
    <PageLayout>
        <ContentLayout data={data.datoCmsNartySnowboard} />
    </PageLayout>
  )
}

export const query = graphql`
  query {
    datoCmsNartySnowboard {
      content {
        ... on DatoCmsTitle {
          title
          __typename
        }
        ... on DatoCmsParagraph {
          paragraph
          __typename
        }
        ... on DatoCmsList {
          list
          __typename
          listitem
        }
        ... on DatoCmsHeader {
          header
          __typename
          button
          description
          href
          title
          photo {
            url
          }
        }
        ... on DatoCmsBelt {
          belt
          __typename
          button
          description
          href
          title
        }
        ... on DatoCmsPhototitle {
          phototitle
          __typename
          title
          photo {
            url
          }
        }
        ... on DatoCmsTile {
          tile
          __typename
          title
          description
          photoone {
            url
          }
          photothree {
            url
          }
          phototwo {
            url
          }
        }
        ... on DatoCmsTitleprimary {
          titleprimary
          __typename
          title
        }
        ... on DatoCmsPhoto {
          photo {
            url
          }
          __typename
        }
      }
    }
  }
`


export default NartyPage
