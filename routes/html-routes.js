var path = require("path");

function routes(app){

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });
}

module.exports = routes;