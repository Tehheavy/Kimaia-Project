import axios from 'axios';

class Auth {
    constructor(){
        this.email=""
        this.authenticated=false;
        console.log(this.authenticated)
    }
    async login(data,cb){
        try{
            console.log(data.email)
            let response = await axios.post('/users/login',data)
            if(response.status===200)
            {
                this.email=data.email;
                this.authenticated=true;
                console.log(response)
                cb([true,false]);
            }

        }
        catch(e){
            console.log(e);
            cb([false,true])
        }
      //  cb();
    }
    async signup(data,cb){
        try{
            let response = await axios.post('/users/signup',data)
            if(response.status===201)
            {
                this.email=data.email;
                this.authenticated=true;
                console.log(response)
                cb([true,false]);
            }

        }
        catch(e){
            console.log(e);
            cb([false,true])
        }
    }
    logout(cb){
        this.authenticated=false;
     //   cb();
    }
    isAuthenticated(){
        return this.authenticated;
    }
    Authenticate(){

    }
}
export default new Auth();