var cred = require('./credentials');

module.exports = {
    getDatabaseConnectionString: function () {
        return 'mongodb://' + cred.username + ':' + cred.password + '@ds157844.mlab.com:57844/hostel-db-demo'
    }
}