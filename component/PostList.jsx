'use client'
import Link from 'next/link';
import Pagination from './Pagination';

export default function PostList({ posts, currentPage, totalPages }) {
  return (
    <>
      {posts.map((post) => {
        const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        return (
          <div key={post.id} className="mb-8 border-b pb-6">
            {image && <img src={image} alt={post.title.rendered} className="w-full h-64 object-cover rounded mb-4" />}
            <h2 className="text-2xl font-semibold mb-2">{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        );
      })}
      <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/blog/page" />
    </>
  );
}
