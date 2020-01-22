import axios from 'axios';

class Auth {
    constructor(){
        this.email=""
        this.authenticated=false;
        this.admin=false;
        console.log(this.authenticated)
    }
    async login(data,cb){
        try{
            console.log(data.email)
            let response = await axios.post('/users/login',data)
            if(response.status===200)
            {
                if(response.data.admin===true){
                    this.admin=true;
                    console.log("IS ADMIN");
                }
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
        this.admin=false;
     //   cb();
    }
    isAuthenticated(){
        return this.authenticated;
    }
    isAdmin(){
        return this.admin;
    }
    Authenticate(){

    }
    GetEmail(){
        return this.email;
    }
}
export default new Auth();