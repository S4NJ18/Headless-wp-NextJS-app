'use client'
import Link from 'next/link';

export default function Pagination({ currentPage, totalPages, basePath }) {
  const prev = currentPage > 1 ? currentPage - 1 : null;
  const next = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className="flex justify-center mt-10">
      <nav className="inline-flex items-center space-x-2 bg-white shadow-md rounded-lg px-4 py-2">
        {prev && (
          <Link
            href={`${basePath}/${prev}`}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition">
            ← Prev
          </Link>
        )}

        <span className="px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded">
          Page {currentPage} of {totalPages}
        </span>

        {next && (
          <Link
            href={`${basePath}/${next}`}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition">
            Next →
          </Link>
        )}
      </nav>
    </div>
  );
}
