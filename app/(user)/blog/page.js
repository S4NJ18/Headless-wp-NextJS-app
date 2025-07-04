import { Suspense } from "react";
import Sidebar from "@/component/SideBar"
import Link from "next/link";
import Image from "next/image";
import Loading from "../loading";
import Pagination from "@/component/Pagination";
// const { default: PostDataFetch } = require("@/component/DataFetch")

const Blog = async()=>{
    return(
      <Suspense fallback={<Loading/>}>
        <div className="flex flex-col md:flex-row">
        
        <PostDataFetch />
        <Sidebar/>
       
        </div>
 </Suspense>
      
    )
}


const PostDataFetch = async () => {

  const data = await fetch(
    `https://wpgetsolution.com/wp-json/wp/v2/posts?_embed`, {
    next: { revalidate: 60 },  
  });

  if (!data.ok) throw new Error("Failed to fetch posts");

  const posts = await data.json();
   

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
    return(
      
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {posts.map((post)=> { 
        
        return (
        
  <div key={post.id} className="items-start md:items-center bg-white shadow-lg rounded-2xl overflow-hidden">
   
    <div className="w-full pt-3 pb-0 pr-6 pl-6">
      {/* Title */}
      <h2
        className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      {/* Date */}
      <p className="text-sm text-gray-500 mb-4">
        {formatDate(post.date)}
      </p>
      </div>
    <div className="flex flex-col md:flex-row pt-3 pb-3 pr-6 pl-6">
         {/* Featured Image */}

    <div className="md:w-1/2 w-full">
             <Image
              src={post._embedded["wp:featuredmedia"][0].source_url}
              
            //   src={imageUrl}
              width="768"
              alt={post.title.rendered}
              height="432"
              className="object-cover w-full h-full rounded-t-2xl md:rounded-l-2xl md:rounded-r-2xl"
            />
    </div>


    {/* Content */}
    <div className="md:w-1/2 w-full p-6">

      {/* Excerpt */}
      <div
        className="text-gray-700 leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />

      {/* Read More Button */}
      <Link
        href={`/blog/${post.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full shadow hover:opacity-90 transition"
      >
        Read more
      </Link>
    </div>
    </div>
  </div>
  
  )})}

</div>
    );
};

export default Blog