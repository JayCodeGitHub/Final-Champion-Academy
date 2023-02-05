import React from "react"
import { graphql } from "gatsby"
import PageLayout from "../Layouts/PageLayout"
import Slider from "../components/Slider/Slider"
import ContentLayout from "../Layouts/ContentLeyuot"

const HomePage = ({ data }) => {
  return (
    <PageLayout>
      <Slider
        titleone={data.datoCmsHome.ttileone}
        descriptionone={data.datoCmsHome.descriptionone}
        photoone={data.datoCmsHome.photoone.url}
        buttonone={data.datoCmsHome.buttonone}
        hrefone={data.datoCmsHome.hrefone}
        titletwo={data.datoCmsHome.titletwo}
        descriptiontwo={data.datoCmsHome.descriptiontwo}
        phototwo={data.datoCmsHome.phototwo.url}
        buttontwo={data.datoCmsHome.buttontwo}
        hreftwo={data.datoCmsHome.hreftwo}
        titlethree={data.datoCmsHome.titlethree}
        descriptionthree={data.datoCmsHome.descriptionthree}
        photothree={data.datoCmsHome.photothree.url}
        buttonthree={data.datoCmsHome.buttonthree}
        hrefthree={data.datoCmsHome.hrefthree}
      />
      <ContentLayout data={data.datoCmsHome} />
    </PageLayout>
  )
}

export const query = graphql`
  query {
    datoCmsHome {
      buttonone
      buttonthree
      buttontwo
      titlethree
      titletwo
      ttileone
      descriptionone
      descriptiontwo
      descriptionthree
      hrefone
      hreftwo
      hrefthree
      photoone {
        url
      }
      phototwo {
        url
      }
      photothree {
        url
      }
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

export default HomePage
