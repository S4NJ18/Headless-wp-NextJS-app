import Sidebar from "@/component/SideBar";
import Image from "next/image";
import Link from "next/link";






export default async function BlogDetails({ params }) {
  const { slug } = await params;

  const res = await fetch(`https://wpgetsolution.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  const data = await res.json();
  const post = data[0]; // Only one post matches the slug

  if (!post) return <div>Post not found</div>;

  return (
    <div className="flex flex-col md:flex-row">
    <div className="max-w-4xl mx-auto px-4 py-8">
        <Link className="text-sm text-gray-500 mb-4" href={`/blog/${post.title.rendered}`}>{`/blog/${post.title.rendered}`} </Link>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <p className="text-sm text-gray-500 mb-4">{new Date(post.date).toLocaleDateString()}</p>

      {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
        <Image
          src={post._embedded['wp:featuredmedia'][0].source_url}
          alt={post.title.rendered}
          width={850}
          height={750}
          className="w-full mb-6 rounded-xl"
        />
      )}

      <div className="text-gray-700 leading-relaxed mb-4 inner-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

    </div>

        <Sidebar/>


    </div>
  );
}
