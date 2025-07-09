const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwritProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatebase: String(import.meta.env.VITE_APPWRITE_DATABASE),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default config