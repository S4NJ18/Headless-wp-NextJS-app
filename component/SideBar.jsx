const Sidebar = async () => {
  const data = await fetch(
    "https://wpgetsolution.com/wp-json/wp/v2/posts?_embed",
    { cache: "no-store" }
  );
  const post = await data.json();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Search Bar Widget */}
      <div className="items-start md:items-center bg-white shadow-lg pt-2 pb-10  pr-5 pl-5 rounded-2xl overflow-hidden h-max space-y-8">
        <form
          action="/search"
          method="GET"
          className="flex items-center max-w-md mx-auto mt-6 bg-white dark:bg-gray-100 border border-gray-200 dark:border-gray-700 rounded-full shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-100 transition">
          <input
            type="text"
            id="search"
            name="query"
            className="w-full px-5 py-2 text-sm text-gray-800 text-gray-900 bg-transparent focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center p-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none rounded-full transition">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6a7.5 7.5 0 010 10.65z"></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>

      {/* Recent Post */}
      <div className="items-start md:items-center bg-white shadow-lg pt-2 pb-10  pr-5 pl-5 rounded-2xl overflow-hidden h-max space-y-8 sticky top-4">
        <h2 className="text-xl font-bold mb-4 border-b pb-2 text-gray-900">
          Recent Posts
        </h2>

        <ul className="space-y-4">
          {post.map((post) => {
            const imageUrl =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <li
                key={post.id}
                className="flex items-start space-x-4">
                {/* Image */}
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={post.title.rendered}
                    className="w-16 h-16 object-cover rounded"
                  />
                )}

                {/* Title */}
                <div>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-800 hover:text-blue-600 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
