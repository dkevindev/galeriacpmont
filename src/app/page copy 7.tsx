'use client'

import { Header } from "@/components/Header";
import { PostsProvider } from "@/components/contexts/PostContext";



const Page = () => {
  
    

  return (
    <div className="container mx-auto">
      <PostsProvider>
        <Header/>
      </PostsProvider>
      
    </div>
    
  )
};

export default Page;