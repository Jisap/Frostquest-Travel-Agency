import React, { useState } from 'react';
import { blogPosts } from '../../data/blogData.js';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiSearch, FiCalendar, FiX } from 'react-icons/fi';
import { BsAsterisk } from 'react-icons/bs';

import SectionBanner from '../SectionBanner';

import blogAuthor from './../../assets/blog-author.jpeg';

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const excerpt = "Non libero hac commodo torquent finibus metus. Duis in nisi diam nunc habitasse lorem elit. Ante porta accumsan sociosqu faucibus ultrices posuere. Vivamus id efficitur tristique hac elit egestas Sed efficitur fringilla habitant tempus tincidunt facilisis auctor pellentes sem.";

  const categories = [
    { name: "All", count: blogPosts.length },
    { name: "Adventure", count: 2 },
    { name: "City Tours", count: 4 },
    { name: "Cruises Tour", count: 3 },
    { name: "Sea Tour", count: 2 }
  ];

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
  };

  return (
    <>
      <SectionBanner title="Blog" currentPage="Blog" />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* ================= COLUMNA IZQUIERDA: Lista de Posts ================= */}
            <div className="lg:col-span-8 space-y-8">

              {/* Indicador de filtros activos */}
              {(searchQuery || selectedCategory) && (
                <div className="flex flex-wrap items-center gap-3 pb-4 border-b border-gray-200">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Filtering by:
                  </span>
                  {selectedCategory && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--primary-color)] text-white text-sm font-medium">
                      {selectedCategory}
                      <button onClick={() => setSelectedCategory(null)} className="hover:text-gray-200">
                        <FiX size={14} />
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-200 text-gray-700 text-sm font-medium">
                      Search: "{searchQuery}"
                      <button onClick={() => setSearchQuery('')} className="hover:text-gray-900">
                        <FiX size={14} />
                      </button>
                    </span>
                  )}
                  <button
                    onClick={clearFilters}
                    className="text-sm text-[var(--primary-color)] font-semibold hover:underline ml-2"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog-details/${post.id}`}
                    className="block bg-white border border-[var(--border-color)] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    <article key={post.id} className="bg-white border border-[var(--border-color)] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                      <div className="overflow-hidden">
                        <img
                          src={post.img}
                          alt={post.title}
                          className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-6 md:p-8">
                        <span className="inline-block px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary-color)] text-xs font-bold uppercase tracking-wider mb-4">
                          {post.category}
                        </span>

                        <div className="flex items-center gap-4 mb-4">
                          <img src={blogAuthor} alt="Author" className="w-12 h-12 rounded-full object-cover border-2 border-gray-100" />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--pg-color)] mb-4 hover:text-[var(--primary-color)] transition-colors cursor-pointer">
                          {post.title}
                        </h3>

                        <p className="text-lg text-[var(--pg-color)] leading-relaxed mb-6">
                          {excerpt}
                        </p>

                        <a href="#" className="inline-flex items-center gap-3 text-lg font-bold text-[var(--secondary-color)] uppercase group/link">
                          Explore More
                          <span className="w-10 h-10 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center group-hover/link:bg-[var(--primary-dark)] transition-colors duration-300">
                            <FiArrowUpRight size={20} />
                          </span>
                        </a>
                      </div>
                    </article>
                  </Link>
                ))
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mb-4">
                    <FiSearch size={32} className="text-gray-400" />
                  </div>
                  <p className="text-xl text-gray-600 font-medium mb-2">
                    No posts found matching your filters
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-[var(--primary-color)] font-semibold hover:underline transition-all"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>

            {/* ================= COLUMNA DERECHA: Sidebar Compacto ================= */}
            <aside className="lg:col-span-4 space-y-6">

              {/* Widget: Búsqueda */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-2xl border border-gray-200/50">
                <h4 className="text-lg font-bold text-[var(--pg-color)] mb-4 flex items-center gap-2">
                  <FiSearch size={18} className="text-[var(--primary-color)]" />
                  Search
                </h4>
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-12 pl-4 pr-12 rounded-lg bg-white border border-gray-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 outline-none text-sm text-gray-700 placeholder-gray-400 transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-12 top-0 h-12 w-8 text-gray-400 hover:text-gray-700 flex items-center justify-center"
                    >
                      <FiX size={16} />
                    </button>
                  )}
                  <button className="absolute right-0 top-0 h-12 w-12 bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white rounded-r-lg flex items-center justify-center hover:opacity-90 transition-opacity">
                    <FiSearch size={16} />
                  </button>
                </div>
              </div>

              {/* Widget: Categorías */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-2xl border border-gray-200/50">
                <h5 className="text-lg font-bold text-[var(--pg-color)] mb-4 flex items-center gap-2">
                  <BsAsterisk size={18} className="text-[var(--primary-color)]" />
                  Categories
                </h5>
                <ul className="space-y-1">
                  {categories.map((cat, idx) => {
                    const isActive = cat.name === selectedCategory || (cat.name === "All" && !selectedCategory);
                    return (
                      <li
                        key={idx}
                        onClick={() => setSelectedCategory(cat.name === "All" ? null : cat.name)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-all ${isActive
                          ? 'bg-white shadow-sm border border-gray-200'
                          : 'hover:bg-white/70'
                          }`}
                      >
                        <span className={`text-sm font-medium transition-colors ${isActive ? 'text-[var(--primary-color)] font-semibold' : 'text-gray-700'
                          }`}>
                          {cat.name}
                        </span>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full transition-all ${isActive
                          ? 'bg-[var(--primary-color)] text-white'
                          : 'bg-gray-200 text-gray-600'
                          }`}>
                          {cat.count}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Widget: Publicaciones Recientes */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-2xl border border-gray-200/50">
                <h4 className="text-lg font-bold text-[var(--pg-color)] mb-4 flex items-center gap-2">
                  <FiCalendar size={18} className="text-[var(--primary-color)]" />
                  Recent Posts
                </h4>
                <div className="space-y-3">
                  {blogPosts.slice(0, 4).map((post, idx) => (
                    <Link
                      key={idx}
                      to={`/blog-details/${post.id}`}
                      className="flex gap-3 group cursor-pointer pb-3 border-b border-gray-200/50 last:border-0 last:pb-0"
                    >
                      <div key={idx} className="flex gap-3 group cursor-pointer pb-3 border-b border-gray-200/50 last:border-0 last:pb-0">
                        <img
                          src={post.img}
                          alt={post.title}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0 group-hover:opacity-80 transition-opacity"
                        />
                        <div className="flex flex-col justify-center min-w-0">
                          <span className="flex items-center gap-1 text-xs font-semibold text-[var(--primary-color)] mb-0.5">
                            <FiCalendar size={10} /> May 11, 2024
                          </span>
                          <p className="text-sm font-bold text-[var(--pg-color)] leading-tight group-hover:text-[var(--primary-color)] transition-colors line-clamp-2">
                            {post.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;