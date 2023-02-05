import React from "react"
import Title from "../components/Title/Title"
import TitlePrimary from "../components/Title/TitlePrimary"
import Paragraph from "../components/Paragraph/Paragraph"
import PhotoTitle from "../components/Title/PhotoTitle"
import Header from "../components/Header/Header"
import Belt from "../components/Belt/Belt"
import Tiles from "../components/Tiles/Tiles"
import Photo from "../components/Photo/Photo"
import List from "../components/List/List"

function ContentLayout({ data, page }) {
  return (
    <>
      {data.content.map(item => {
        switch (item.__typename) {
          case "DatoCmsTitle":
            return <Title title={item.title} />
          case "DatoCmsParagraph":
            return <Paragraph paragraph={item.paragraph} />
          case "DatoCmsTitleprimary":
            return <TitlePrimary title={item.title} />
          case "DatoCmsPhototitle":
            return <PhotoTitle title={item.title} photo={item.photo.url} />
          case "DatoCmsPhoto":
            return <Photo photo={item.photo.url} />
          case "DatoCmsList":
            return <List item={item.listitem} />
          case "DatoCmsHeader":
            return (
              <Header
                title={item.title}
                description={item.description}
                button={item.button}
                photo={item.photo.url}
                href={item.href}
              />
            )
          case "DatoCmsBelt":
            return (
              <Belt
                title={item.title}
                description={item.description}
                button={item.button}
                href={item.href}
              />
            )
          case "DatoCmsTile":
            return (
              <Tiles
                title={item.title}
                description={item.description}
                photoone={item.photoone.url}
                phototwo={item.phototwo.url}
                photothree={item.photothree.url}
              />
            )
        }
      })}
    </>
  )
}

export default ContentLayout
