import PropertyModel from '../../../server/models/PropertyModel';

export const createHandler = async ( req, res ) =>{

    if(req.method === 'GET'){
        try {
            const allProperties = await PropertyModel.find({})
            console.log(allProperties)
            res.status(200).json('hello world')
        } catch (error) {
            console.log(`Error occoured in fetching all properties`)
            res.status(404).json({message : 'Error occoured in fetching all properties'})
        }
    }

}