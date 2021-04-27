import React from "react"
import { Link } from "react-router-dom"
import { PrismicLink } from "apollo-link-prismic"
import { InMemoryCache } from "apollo-cache-inmemory"
import ApolloClient from "apollo-client"

import Prismic from "@prismicio/client"

const apiEndpoint = "https://roller.cdn.prismic.io/api/v2"
const gqlEndpoint = "https://roller.cdn.prismic.io/graphql"
const accessToken =
  "MC5ZSVdCTnhBQUFDTUFKUmlh.77-977-9Kh3vv70i77-9M--_vSYeCWjvv73vv70oSO-_ve-_ve-_ve-_ve-_vU8b77-9Te-_ve-_ve-_ve-_vVVU"

const Client = Prismic.client(apiEndpoint, { accessToken })

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === "post") return `/blog/${doc.uid}`
  return "/"
}

// Helper function to convert Prismic Rich Text links to React Link components
export const customLink = (type, element, content, children, index) => (
  <Link to={linkResolver(element.data)} key={index}>
    {content}
  </Link>
)

// Client method to query documents from the Prismic repo using GraphQL
export const client = new ApolloClient({
  link: PrismicLink({
    uri: gqlEndpoint,
    accessToken:
      "MC5ZSVdCTnhBQUFDTUFKUmlh.77-977-9Kh3vv70i77-9M--_vSYeCWjvv73vv70oSO-_ve-_ve-_ve-_ve-_vU8b77-9Te-_ve-_ve-_ve-_vVVU",
    repositoryName: "roller"
  }),
  cache: new InMemoryCache()
})
