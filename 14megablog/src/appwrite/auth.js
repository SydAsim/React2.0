import config from '../config/config.js'
import { Client, Account, ID } from "appwrite";

// The Client in Appwrite is not the user — it’s an Appwrite SDK object used to:
// 🔹 Connect your app to your Appwrite project
// 🔹 Set the endpoint and project ID
// 🔹 Be passed into other Appwrite services (like Account, Databases, Storage, etc.)
// for better code practice we are creating the class and then
// we are defining the methods inside as an  object so that that 
// object can access it methods simply by .

// meaning whenever the class will be called the values 
// will  be automatically be accessable through Object

export class AuthService {
    client = new Client();
    // account = new Account();

    
    constructor()
     
    {
        // yani yay appwrite main hamaray Project kay 
        // endpoints hain url and id 
         console.log("AUTH CONFIG:", config);
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }
    
    // Sign up 
    async createAccount({ email, password , name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password , name);
            if (userAccount) {
                //call a method
                 return this.login({email ,password })

            }
            else {
                return userAccount
            }

        } catch (error) {
            throw error;
        }

    }

    // Login 
    async login ({email ,password }){
        try {
           return await this.account.createEmailPasswordSession(email ,password )
            
        } catch (error) {
            console.log("Error in the Login function in auth.js:",error);   
        }
    }

    async getCurrentUser(){
        try {
          return  await this.account.get()
            
        } catch (error) {
            throw error  
    }
    
}

async logout(){
    try{
       return   await this.account.deleteSessions()
    }
    catch(error) {
        throw error
    }
}
}




const authService = new AuthService()

export default authService;