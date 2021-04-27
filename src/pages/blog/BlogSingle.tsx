import React, { useEffect, useState } from "react"
import gql from "graphql-tag"
import { client } from "../../prismic"
import { useRouteMatch } from "react-router-dom"
import { RichText } from "prismic-reactjs"
import { FiClock, FiHeart, FiMessageCircle, FiUser } from "react-icons/fi"

/*
 * Blog Post query
 */
const blogPostQuery = gql`
  query myNews($uid: String) {
    allBlogs(uid: $uid) {
      # pagination
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      # data
      edges {
        node {
          _meta {
            id
            uid
            type
          }
          title
          heroimage
          body

          author
          date

          category {
            __typename
            ... on Blogcategory {
              type
            }
          }
        }
      }
    }
  }
`

const queryPostByUid = (uid) => {
  const queryOptions = {
    query: blogPostQuery,
    variables: { uid }
  }

  return client.query(queryOptions)
}

const BlogSingle = () => {
  const [blog, setBlog] = useState(null)
  const [notFound, toggleNotFound] = useState(false)
  const { params } = useRouteMatch()
  const id = params["id"]

  // Get the blog post document from Prismic
  useEffect(() => {
    const _ = async () => {
      const prismicContent = await queryPostByUid(id)
      const doc = prismicContent.data.allBlogs.edges.length > 0 ? prismicContent.data.allBlogs.edges[0].node : null

      if (doc) {
        console.log(doc)
        setBlog(doc)
      } else {
        toggleNotFound(true)
      }
    }

    _().then()
  }, [id])

  return (
    <>
      {/* Start Breadcrump Area */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image"
        data-black-overlay="5"
        style={{ backgroundImage: `url(${blog?.heroimage?.url})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title theme-gradient">{blog?.title[0]?.text}</h2>
                <span className="theme-gradient font-500">{blog?.category.type}</span>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    {blog?.date}
                  </li>
                  <li>
                    <FiUser />
                    {RichText.asText(blog?.author)}
                  </li>
                  <li>
                    <FiMessageCircle />
                    15 Comments
                  </li>
                  <li>
                    <FiHeart />
                    Like
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      <div className="rn-blog-details pt--110 pb--70 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <div className="inner">
                  <RichText render={blog?.body} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default BlogSingle
