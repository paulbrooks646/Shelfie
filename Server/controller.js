  
module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get("db")
        const {name, price, img} = req.body

        dbInstance.create_product([name, price, img])
        .then( () => res.sendStatus(200))
            },
    view: (req, res) => {
        const dbInstance = req.app.get("db")

        dbInstance.view_products()
        .then( products => res.status(200).send(products))
    },
    delete: (req, res) => {
        const dbInstance = req.app.get("db")
        const {id} = req.params
        dbInstance.delete_product(id)
        .then( () => res.sendStatus(200))
},
    retrieve: (req, res) => {
        const dbInstance = req.app.get("db")
        const {id} = req.params
        dbInstance.retrieve_product(id)
        .then( product => res.status(200).send(product))
    },
    update: (req, res) => {
        const dbInstance = req.app.get("db")
        const {id} = req.params
        const {name, price, img} = req.body

        dbInstance.update_product(id, name, price, img)
        .then(() => res.sendStatus(200))
    }
}
