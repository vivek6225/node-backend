  
  exports.pageNotFound = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found',currentpage:'404 '}); // Render 404 EJS template
};