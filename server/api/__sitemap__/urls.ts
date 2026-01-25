export default defineSitemapEventHandler(async (event) => {
  const projects = await queryCollection(event, 'projects').all()

  return projects.map(project => ({
    loc: project.path,
    lastmod: new Date().toISOString(),
  }))
})
