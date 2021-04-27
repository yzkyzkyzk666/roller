import React, { useEffect, useState } from "react"
import gql from "graphql-tag"
import { client } from "../../prismic"
import { Link, useRouteMatch } from "react-router-dom"
import SliderBreadcrumb from "../../components/SliderBreadcrumb"
import { useTranslation } from "react-i18next"
import { Section } from "../../components/styled/layouts"

/*
 * Blog Post query
 */
const blogListQuery = gql`
  query myBlogs($uid: String) {
    allBlogs(uid: $uid) {
      edges {
        node {
          _meta {
            id
            uid
            type
          }
          title
          heroimage
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

const queryPostByUid = () => {
  const queryOptions = {
    query: blogListQuery,
    variables: {}
  }

  return client.query(queryOptions)
}

const BlogList = () => {
  const [t] = useTranslation()

  const [blogs, setBlogs] = useState([])
  const { params } = useRouteMatch()

  // Get the blog post document from Prismic
  useEffect(() => {
    const _ = async () => {
      const prismicContent = await queryPostByUid()
      const docs = prismicContent.data.allBlogs.edges.map(({ node }) => node)
      if (docs) {
        console.log(docs)
        setBlogs(docs)
      }
    }

    _().then()
  }, [])

  return (
    <>
      <SliderBreadcrumb
        title={t("Blog")}
        breadcrumb={[
          { to: "/", text: t("Home") },
          {
            text: t("Blog")
          }
        ]}
      />
      <Section>
        <div className="container">
          <div className="row">
            {blogs.map((node) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" key={node._meta.uid}>
                <div className="im_box">
                  <div className="thumbnail">
                    <Link to={`/blog/${node._meta.uid}`}>
                      <img className="w-100" src={node.heroimage.url} alt={node.title[0].text} />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="inner">
                      <div className="content_heading">
                        <div className="category_list">
                          <Link to={`/blog/${node._meta.uid}`}>{node.category.type}</Link>
                        </div>
                        <h4 className="title">
                          <Link to={`/blog/${node._meta.uid}`}>{node.title[0].text}</Link>
                        </h4>
                      </div>
                      <div className="content_footer">
                        <Link to={`/blog/${node._meta.uid}`} className="rn-btn btn-opacity">
                          Read More
                        </Link>
                      </div>
                    </div>
                    <Link className="transparent_link" to={`/blog/${node?._meta?.uid}`}></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
export default BlogList
