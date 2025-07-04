import Sidebar from "@/component/SideBar"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"


const getPageData = async (slug) => {
  const res = await fetch(
    `https://wpgetsolution.com/wp-json/wp/v2/pages?slug=${slug}&_embed`, 
    { cache: "no-store" }
  );
  
  if (!res.ok) return null;
  
  const data = await res.json();
  return data[0] || null;
}


export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const page = await getPageData(slug);
  
  if (!page) return {};

  return {
    title: page.rankMath.assessor.serpData.title || 'Untitled Page',
    description: page.rankMath.assessor.serpData.description || "",
    keywords: [page.rankMath.assessor.serpData.focusKeywords],

  };
}



const AllPage = async({params})=>{

    const {slug} = await params
  
    const actualData = await getPageData(slug)

    if(!actualData) return notFound()

  return (
    <div className="flex flex-col md:flex-row">
    <div className="max-w-4xl mx-auto px-4 py-8">
        <Link className="text-sm text-gray-500 mb-4" href={`/blog/${actualData.title.rendered}`}>{`/blog/${actualData.title.rendered}`} </Link>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: actualData.title.rendered }} />

      {actualData._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
        <Image
          src={actualData._embedded['wp:featuredmedia'][0].source_url}
          alt={actualData.title.rendered}
          width={850}
          height={750}
          className="w-full mb-6 rounded-xl"
        />
      )}

      <div className="text-gray-700 leading-relaxed mb-4 inner-content" dangerouslySetInnerHTML={{ __html: actualData.content.rendered }} />

    </div>

        <Sidebar/>


    </div>
  );
}

export default AllPage