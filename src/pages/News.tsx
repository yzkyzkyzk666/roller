import React, { useEffect, useState } from "react"
import gql from "graphql-tag"
import { client } from "../prismic"
import { useRouteMatch } from "react-router-dom"
import Slider from "../components/Slider"

/*
 * Blog Post query
 */
const blogPostQuery = gql`
  query myNews($uid: String) {
    allNewss(uid: $uid) {
      edges {
        node {
          _meta {
            id
            uid
            type
          }
          title
          body
        }
      }
    }
  }
`

const queryPostByUid = (id) => {
  const queryOptions = {
    query: blogPostQuery,
    variables: { id }
  }

  return client.query(queryOptions)
}

const News = () => {
  const [prismicDoc, setPrismicDoc] = useState(null)
  const [notFound, toggleNotFound] = useState(false)
  const { params } = useRouteMatch()
  const id = params["id"]

  // Get the blog post document from Prismic
  useEffect(() => {
    const fetchPrismicData = async () => {
      const prismicContent = await queryPostByUid(id)
      const doc = prismicContent.data.allNewss.edges.length > 0 ? prismicContent.data.allNewss.edges[0].node : null

      if (doc) {
        setPrismicDoc(doc)
      } else {
        toggleNotFound(true)
      }
    }

    fetchPrismicData().then()
  }, [id])

  return (
    <>
      <Slider title={prismicDoc?.title[0]?.text} minHeight={500} />
      <p>body: {prismicDoc?.body[0]?.text}</p>
    </>
  )
}
export default News
