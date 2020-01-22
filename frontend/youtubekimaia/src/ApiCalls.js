import axios from 'axios';
import Auth from './Auth'

class ApiCalls {
    constructor(){
    }
    async search(data,cb){
        try{
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
    async userSelectLog(data){ //email:email , action:action , videoId:videoId
        try{
            let response = await axios.post('/youtube/selectlog',data)
            if(response.status===200)
            {
                console.log(response)
            }

        }
        catch(e){
            console.log(e);
        }
    }
    async userYoutubePlayerLog(data){ //email,action,videoTime,videoId
        try{
            let response = await axios.post('/youtube/playerlog',data)
            if(response.status===200)
            {
                console.log(response)
            }

        }
        catch(e){
            console.log(e);
        }
    }

    async getLogs(cb){
        try{
            let response = await axios.get('/log')
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