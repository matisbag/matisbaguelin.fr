import { serverQueryContent } from "#content/server"

export default defineSitemapEventHandler(async (e) => {
  const docs = await serverQueryContent(e).find()

  return docs.map((doc) => {
    return {
      loc: "/projects" + doc._path,
      lastmod: new Date(),
    }
  })
})
