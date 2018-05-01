import AppWrapper from "./app";
const port = 4040;
let app = AppWrapper.app;
app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});