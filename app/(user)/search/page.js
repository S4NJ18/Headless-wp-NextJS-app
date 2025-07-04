import Sidebar from "@/component/SideBar";
import Link from "next/link";
import Image from "next/image";
import { notFound } from 'next/navigation';

const SearchPage = async ({ searchParams }) => {
  const query = searchParams?.query;
  if (!query) return notFound();

  const res = await fetch(
    `https://wpgetsolution.com/wp-json/wp/v2/posts?search=${query}&_embed`,
    { cache: "no-store" }
  );

  const SearchData = await res.json();

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className={SearchData.length == 0 ? "":"flex flex-col md:flex-row"}>
        { SearchData.length == 0 ? "" : <div className="max-w-4xl mx-auto px-4 py-8 space-y-8"> 
        {SearchData.map((post) => {
          return (
            <div
              key={post.id}
              className="items-start md:items-center bg-white shadow-lg rounded-2xl overflow-hidden">
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
                    className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full shadow hover:opacity-90 transition">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        

      </div>

    }

      {SearchData.length == 0 ? notFound():<Sidebar />}

    </div>
  );
};

export default SearchPage;
