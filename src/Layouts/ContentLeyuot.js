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
        const itemKey = Object.keys(item)[0]
        console.log(item)
        switch (itemKey) {
          case "title":
            return <Title title={item.title} />
          case "paragraph":
            return <Paragraph paragraph={item.paragraph} />
          case "titleprimary":
            return <TitlePrimary title={item.title} />
          case "phototitle":
            return <PhotoTitle title={item.title} photo={item.photo.url} />
          case "photo":
            return <Photo photo={item.photo.url} />
          case "list":
            return <List item={item.listitem} />
          case "header":
            return (
              <Header
                title={item.title}
                description={item.description}
                button={item.button}
                photo={item.photo.url}
                href={item.href}
              />
            )
          case "belt":
            return (
              <Belt
                title={item.title}
                description={item.description}
                button={item.button}
                href={item.href}
              />
            )
          case "tile":
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
