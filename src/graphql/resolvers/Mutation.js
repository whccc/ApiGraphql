import Message from '../../models/Message'
const Mutation = {
    createMessage:async(_,{title,content,author})=>{
        //Logica db
        const MessageMD= new Message({
            title,content,author
        })
        return await MessageMD.save()
    }

};

export default Mutation;
