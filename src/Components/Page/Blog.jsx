import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search, Asterisk, Calendar, X } from 'lucide-react';

import SectionBanner from '../SectionBanner';

import blogAuthor from './../../assets/blog-author.jpeg';
import blog1 from './../../assets/blog1.webp';
import blog2 from './../../assets/blog2.webp';
import blog3 from './../../assets/blog3.webp';
import blog4 from './../../assets/blog4.webp';
import blog5 from './../../assets/blog5.webp';

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null); // null = todas

  // 1. Agregamos la propiedad "category" a cada post
  const blogPosts = [
    { id: 1, img: blog1, title: "Island Hopping And Weather Tips", category: "Sea Tour" },
    { id: 2, img: blog2, title: "Beach Days, Long Hikes, And", category: "Adventure" },
    { id: 3, img: blog3, title: "Experience the World with Our Travel Company", category: "City Tours" },
    { id: 4, img: blog4, title: "Experience the World with Our Travel Company", category: "Cruises Tour" },
    { id: 5, img: blog5, title: "Assertively iterate resource maximizing", category: "Adventure" }
  ];

  // 2. Filtro combinado: búsqueda + categoría
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const excerpt = "Non libero hac commodo torquent finibus metus. Duis in nisi diam nunc habitasse lorem elit. Ante porta accumsan sociosqu faucibus ultrices posuere. Vivamus id efficitur tristique hac elit egestas Sed efficitur fringilla habitant tempus tincidunt facilisis auctor pellentes sem.";

  const categories = [
    { name: "All", count: blogPosts.length }, // Categoría "Todas"
    { name: "Adventure", count: 2 },
    { name: "City Tours", count: 4 },
    { name: "Cruises Tour", count: 3 },
    { name: "Sea Tour", count: 2 }
  ];

  // 3. Función para limpiar todos los filtros
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
                        <X size={14} />
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-200 text-gray-700 text-sm font-medium">
                      Search: "{searchQuery}"
                      <button onClick={() => setSearchQuery('')} className="hover:text-gray-900">
                        <X size={14} />
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
                  <article key={post.id} className="bg-white border border-[var(--border-color)] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <div className="overflow-hidden">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6 md:p-8">
                      {/* Badge de categoría */}
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
                          <ArrowUpRight size={20} />
                        </span>
                      </a>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mb-4">
                    <Search size={32} className="text-gray-400" />
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

            {/* ================= COLUMNA DERECHA: Sidebar Sticky ================= */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 self-start">

              {/* Widget: Búsqueda */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-[var(--pg-color)] mb-5">Search</h4>
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-[62px] pl-5 pr-24 rounded-xl bg-white border-0 focus:ring-2 focus:ring-[var(--primary-color)] outline-none text-gray-700 placeholder-gray-400 transition-shadow"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-16 top-0 h-[62px] w-10 text-gray-400 hover:text-gray-700 flex items-center justify-center transition-colors"
                    >
                      <X size={20} />
                    </button>
                  )}
                  <button className="absolute right-0 top-0 h-[62px] w-[62px] bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white rounded-r-xl flex items-center justify-center hover:opacity-90 transition-opacity">
                    <Search size={20} />
                  </button>
                </div>
              </div>

              {/* Widget: Categorías (AHORA FUNCIONAL) */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h5 className="text-xl font-bold text-[var(--pg-color)] mb-5">Categories</h5>
                <ul className="divide-y divide-gray-200">
                  {categories.map((cat, idx) => {
                    const isActive = cat.name === selectedCategory || (cat.name === "All" && !selectedCategory);
                    return (
                      <li
                        key={idx}
                        onClick={() => setSelectedCategory(cat.name === "All" ? null : cat.name)}
                        className={`flex items-center justify-between py-3 first:pt-0 last:pb-0 cursor-pointer transition-colors ${isActive
                            ? 'bg-white -mx-6 px-6 rounded-lg shadow-sm'
                            : 'hover:bg-white/50'
                          }`}
                      >
                        <div className="flex items-center gap-2">
                          <Asterisk
                            size={16}
                            className={isActive ? 'text-[var(--primary-color)]' : 'text-gray-400'}
                            strokeWidth={isActive ? 3 : 2}
                          />
                          <span className={`text-lg font-medium transition-colors ${isActive ? 'text-[var(--primary-color)] font-bold' : 'text-[var(--secondary-color)]'
                            }`}>
                            {cat.name}
                          </span>
                        </div>
                        <span className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${isActive
                            ? 'bg-[var(--primary-color)] text-white shadow-md'
                            : 'bg-gray-200 text-[var(--secondary-color)]'
                          }`}>
                          {cat.count}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Widget: Publicaciones Recientes */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-[var(--pg-color)] mb-5">Recent Post</h4>
                <div className="space-y-5">
                  {blogPosts.slice(0, 4).map((post, idx) => (
                    <div key={idx} className="flex gap-4 group cursor-pointer">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-20 h-20 rounded-xl object-cover flex-shrink-0 group-hover:opacity-80 transition-opacity"
                      />
                      <div className="flex flex-col justify-center">
                        <span className="flex items-center gap-1.5 text-sm font-semibold text-[var(--primary-color)] mb-1">
                          <Calendar size={14} /> May 11, 2024
                        </span>
                        <p className="text-base font-bold text-[var(--pg-color)] leading-snug group-hover:text-[var(--primary-color)] transition-colors line-clamp-2">
                          {post.title}
                        </p>
                      </div>
                    </div>
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