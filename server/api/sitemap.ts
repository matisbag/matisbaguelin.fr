import { serverQueryContent } from "#content/server"

export default defineSitemapEventHandler(async (e) => {
  const docs = await serverQueryContent(e, "projects").find()

  return docs.map((doc) => {
    return {
      loc: doc._path as string,
      lastmod: new Date(),
    }
  })
})
