const express = require('express')
const router = express.Router()
// const radioButtonRedirect = require('radio-button-redirect')
// router.use(radioButtonRedirect)

// Add your routes here - above the module.exports line

// current sprint
router.post('/current/queries/create-query', (req, res, next) => {
  console.log('/current/queries/create-query', req.session.data)
  const name = req.session.data['query-content']
  const section = req.session.data.source

  const queries = req.session.data.queries || []
  queries.push({ name, section })
  req.session.data.queries = queries
  res.redirect('/current/set-action/set-action-preparing-food')
})

router.post('/current/set-action/set-action-preparing-food', (req, res, next) => {
  console.log('this is preparing food')
  console.log(req.session.data)
  req.session.data.queries[req.session.data.queries.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/current/task-list')
})

// sprint 24 and 25
router.post('/sprint-24-25/queries/create-query', (req, res, next) => {
  console.log('/sprint-24-25/queries/create-query', req.session.data)
  const name = req.session.data['query-content']
  const section = req.session.data.source

  const queries = req.session.data.queries || []
  queries.push({ name, section })
  req.session.data.queries = queries
  res.redirect('/sprint-24-25/set-action/set-action-preparing-food')
})

router.post('/sprint-24-25/set-action/set-action-preparing-food', (req, res, next) => {
  console.log('this is preparing food')
  console.log(req.session.data)
  req.session.data.queries[req.session.data.queries.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/sprint-24-25/task-list')
})

// GET SPRINT NAME - useful for relative templates
// router.use('/', (req, res, next) => {
//   req.folder = req.originalUrl.split('/')[1];
//   req.subfolder = req.originalUrl.split('/')[2];
//   res.locals.currentURL = req.originalUrl;
//   res.locals.prevURL = req.get('Referrer');
//   res.locals.folder = req.folder;
//   res.locals.subfolder = req.subfolder;
//   res.locals.name = req.query.n
//   res.locals.unallocated = req.query.ua
//
//   console.log('folder : ' + res.locals.folder + ', subfolder : ' + res.locals.subfolder  );
//   console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
//   next();
// });

// Start folder specific routes
router.use('/sprint-24-25', require('./views/sprint-24-25/_routes'));
// current sprint, remember to add older sprint when adding a new folder!
router.use('/current', require('./views/current/_routes'));

module.exports = router
//router.all('/current/check-router', function(req, res, next){
//  var testQ = req.session.data['query-content']

/*var preparingFood = "";
  if (req.session.data['query-content'] && req.session.data['query-content'] == "true") {
    //preparingFood = "query-content"; // quick way to append apointee journey to relevant screens
    console.log(preparingFood);
  }
});*/

/*router.all('/current/query-check', function(req, res) {
  if (req.session.data['query-content'] && req.session.data['query-content'] == "true") {
    //preparingFood = "query-content"; // quick way to append apointee journey to relevant screens
    console.log(preparingFood);
  }
});*/
/*function checkButton() {
if(document.getElementById('A').checked) {
      document.getElementById("disp").innerHTML
          = "A";
  }
  else if(document.getElementById('B').checked) {
      document.getElementById("disp").innerHTML
          = "B";
  }
*/
//});
