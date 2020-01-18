exports.pageNotFound = (req, res) => {
  res.status(400).render('404', {
    pageTitle: 'Error Page',
    path: '404'
  })
}