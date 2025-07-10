import config from './config/config.js'
import { Client, Account, ID } from "appwrite";

// for better code practice we are creating the class and then
// we are defining the methods inside as an  object so that that 
// object can access it methods simply by .
export class AuthService {
    client = new Client();
    account = new Account();

    
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setEndpoint(config.appwritProjectId)
        this.account = new Account(this.client)
    }
    
    // Sign up 
    async createAccount({ email, passward, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, passward, name);
            if (userAccount) {
                //call a method
                 return this.Login({email ,passward})

            }
            else {
                return userAccount
            }

        } catch (error) {
            throw error;
        }

    }

    // Login 
    async Login ({email ,passward}){
        try {
           return await this.account.createEmailPasswordSession(email ,passward)
            
        } catch (error) {
            console.log("Error in the Login function:",error);   
        }
    }

    async getCurrentUsers({}){
        try {
          return  await this.account.get()
            
        } catch (error) {
            throw error  
    }
    return null;
}

async logOut({}){
    try{
       return   await this.account.deleteSessions()
    }
    catch(error) {
        throw error
    }
}
}




const authService = AuthService()

export default authService;