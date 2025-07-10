import { use, useId } from 'react';
import config from './config/config.js'
import { Client, ID ,Storage ,Query,Databases  } from "appwrite";

export class Services{
    client = new Client()
    databases
    bucket 
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setEndpoint(config.appwritProjectId)
            this.databases = new Databases(this.client)
            this.bucket = new Storage(this.client)
    }

    async createPost ({title , slug  ,content ,featuredImage, status ,userID}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatebaseId,
                config.appwriteCollectionId,
                slug ,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID

                }
            )
            
        } catch (error) {
            console.log("Error in createpost method" ,error);

        }

    }

    async updatePost (slug, {title,content ,featuredImage ,status,}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatebaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status   
                }
            )
            
        } catch (error) {
            console.log("this is updatePost Error ",error);
            
            
        }
    }

    async deletePost (slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatebaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
            
        } catch (error) {
            console.log("Error of the DeletePost" ,error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatebaseId,
                config.appwriteCollectionId,
                slug
            )
            
            
        } catch (error) {
            console.log("Error of the hetPost", error);
            return false
            
        }
    }

    async getPosts (queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatebaseId,
                config.appwriteCollectionId,
                queries
            )
            
        } catch (error) {
            console.log("Error of the getPosts" ,error);
            return false
            
            
        }


    }
        
    // File upload Service 
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Error of the uploadFile",error);
            return false
            
            
        }

    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
            
        } catch (error) {
            console.log("Error of the deleteFile" ,error);
            
            
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}

const services = new Services()
export default services