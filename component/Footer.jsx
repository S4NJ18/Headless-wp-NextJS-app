const FooterComponent =()=>{
    return(
<footer className="w-full border-t border-b mt-10 bg-[#132238]">
  <div className="max-w-7xl mx-auto px-2 py-2 flex flex-col  sm:flex-row justify-between items-center text-center text-sm text-white-600">
    <p className="mb-2 sm:mb-0 ">
      &copy; {new Date().getFullYear()} Sanjib Mondal. All rights reserved.
    </p>
    <p className="flex items-center gap-1">
      Made with <span className="text-red-500">❤️</span> using <strong>NextJs & Tailwind CSS</strong>
    </p>
  </div>
</footer>


    )
}

export default FooterComponent