import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/graphqlreactdb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(db=>console.log('DB'))