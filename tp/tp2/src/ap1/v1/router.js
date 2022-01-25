const config = require('../../config/env.config');

const utilsRoutes = require('./component/utils/utilsRoutes');
const usersRoute = require('./component/users/usersRoute');



const router = (app) => {
    app.use(config.root_api, utilsRoutes);
    app.use(config.root_api, usersRoute);
    app.use((req, res) => {
        res.status(404).json({ message: 'Not Found'});
    });
}



module.exports = router;