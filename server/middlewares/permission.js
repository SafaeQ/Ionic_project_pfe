const isAuthorized = (...role) => {

    return (req, res, next) => {

        if (!role.includes(req.user.role.name)) {

            res.status(401).json({

                error: "you are not authorized"

            });
        } else {

            next()
        }
    }

}

module.exports = isAuthorized