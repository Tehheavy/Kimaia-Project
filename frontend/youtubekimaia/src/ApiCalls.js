import axios from 'axios';
import Auth from './Auth'

class ApiCalls {
    constructor(){
    }
    async search(data,cb){
        try{
            console.log(data)
            let response = await axios.post('/youtube/search',data)
            if(response.status===200)
            {
                console.log(response)
                return cb(response.data);
            }

        }
        catch(e){
            console.log(e);
        }
    }

}
export default new ApiCalls();