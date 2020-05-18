const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query
    const user = req.body;
    if (user == null) {
      res.end('This user is sleepping!');
    } else {
       res.send(user);
      }
   //    not ready
   next();
}

exports.responseMiddleware = responseMiddleware;