  
module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get("db")
        const {name, price, img} = req.body

        dbInstance.create_product([name, price, img])
        .then( () => res.sendStatus(200))
        .catch ( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
        })
    },
    view: (req, res, next) => {
        const dbInstance = req.app.get("db")

        dbInstance.view_products()
        .then( products => res.status(200).send(products))
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
        })
    }
}

