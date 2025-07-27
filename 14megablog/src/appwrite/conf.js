import config from '../config/config.js'
import { Client, ID ,Storage ,Query,Databases  } from "appwrite";

export class Services{
    client = new Client()
    databases
    bucket 
    constructor(){
         console.log("AUTH CONFIG:", config);
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
            this.databases = new Databases(this.client)
            this.bucket = new Storage(this.client)
    }

async createPost({ title, slug, content, featuredImage, status, userid }) {
  try {
    return await this.databases.createDocument(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      slug || ID.unique(),
    //  ID.unique(),

      {
        title,
        content,
        featuredimage: featuredImage,
        status,
        userid, // ✅ now this matches what you're passing
      }
    );
  } catch (error) {
    console.log("❌ createPost error:", error.message);
    return false;
  }
}



    async updatePost (slug, {title,content ,featuredImage ,status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage: featuredImage,
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
                config.appwriteDatabaseId,
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
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            
            
        } catch (error) {
            console.log("Error of the hetPost", error);
            return false
            
        }
    }

// Get all active posts (public feed)
// async getPosts() {
//   try {
//     const queries = [Query.equal("status", "active")];
//     return await this.databases.listDocuments(
//       config.appwriteDatabaseId,
//       config.appwriteCollectionId,
//       queries
//     );
//   } catch (error) {
//     console.log("Error of the getPosts", error);
//     return false;
//   }
// }

getPosts(userId = null, status = 'active') {
  try {
    const queries = [Query.equal('status', status)];
    if (userId) {
      queries.push(Query.equal('userid', userId));
    }

    return this.databases.listDocuments(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      queries
    );
  } catch (error) {
    console.log("Error of the getPosts", error);
    return false;
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
            
            
        } catch (error) {
            console.log("Error of the deleteFile" ,error);   

        }
    }

    getFilePreview(fileId){
        return this.bucket.getFileView(
            config.appwriteBucketId,
            fileId
        )
    }
}

const Service = new Services()
export default Service