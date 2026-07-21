import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    FiCalendar, FiClock, FiUser, FiTag, FiShare2,
    FiArrowLeft, FiMessageSquare, FiSend, FiCheckCircle
} from 'react-icons/fi';
import {
    FaFacebook, FaTwitter, FaLinkedin, FaInstagram
} from 'react-icons/fa';

import SectionBanner from '../SectionBanner';
import { getPostById, getRelatedPosts } from '../../data/blogData.js';
import blogAuthor from '../../assets/blog-author.jpeg';

function BlogDetails() {
    const { id } = useParams();
    const post = getPostById(id);

    const [commentForm, setCommentForm] = useState({ name: '', email: '', message: '' });
    const [commentSubmitted, setCommentSubmitted] = useState(false);

    // Si no se encuentra el post, mostrar mensaje
    if (!post) {
        return (
            <>
                <SectionBanner title="Post Not Found" currentPage="Blog" />
                <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Sorry, this post doesn't exist</h2>
                    <Link to="/blog" className="inline-flex items-center gap-2 text-[var(--primary-color)] font-semibold hover:underline">
                        <FiArrowLeft size={18} /> Back to Blog
                    </Link>
                </div>
            </>
        );
    }

    const relatedPosts = getRelatedPosts(post.id, post.category);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setCommentSubmitted(true);
        setCommentForm({ name: '', email: '', message: '' });
        setTimeout(() => setCommentSubmitted(false), 3000);
    };

    return (
        <>
            {/* 1. Banner con breadcrumb */}
            <SectionBanner title={post.title} currentPage="Blog Details" />

            {/* 2. Contenido Principal */}
            <article className="py-12 md:py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Imagen destacada */}
                    <div className="mb-10 rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={post.img}
                            alt={post.title}
                            className="w-full h-[400px] md:h-[500px] object-cover"
                        />
                    </div>

                    {/* Metadatos del post */}
                    <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary-color)] text-xs font-bold uppercase tracking-wider">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <FiUser size={14} />
                            <span className="font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <FiCalendar size={14} />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <FiClock size={14} />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    {/* Introducción destacada */}
                    <p className="text-xl md:text-2xl text-[var(--pg-color)] leading-relaxed font-medium mb-8 border-l-4 border-[var(--primary-color)] pl-6">
                        {post.content.intro}
                    </p>

                    {/* Párrafos del contenido */}
                    <div className="prose prose-lg max-w-none">
                        {post.content.paragraphs.map((paragraph, idx) => (
                            <p key={idx} className="text-lg text-gray-700 leading-relaxed mb-6">
                                {paragraph}
                            </p>
                        ))}

                        {/* Cita destacada */}
                        <blockquote className="my-10 p-6 md:p-8 bg-gradient-to-br from-[var(--primary-light)] to-white rounded-2xl border-l-4 border-[var(--primary-color)] italic">
                            <p className="text-xl md:text-2xl text-[var(--pg-color)] font-medium leading-relaxed">
                                "{post.content.quote}"
                            </p>
                        </blockquote>

                        {/* Lista de puntos clave */}
                        <h3 className="text-2xl font-bold text-[var(--pg-color)] mt-10 mb-6">Key Highlights</h3>
                        <ul className="space-y-3 mb-10">
                            {post.content.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-lg text-gray-700">
                                    <FiCheckCircle className="w-5 h-5 text-[var(--primary-color)] flex-shrink-0 mt-1" />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-8 border-t border-gray-200">
                        <FiTag size={18} className="text-gray-500" />
                        <span className="text-sm font-semibold text-gray-700 mr-2">Tags:</span>
                        {['Travel', post.category, 'Adventure', 'Tips'].map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-[var(--primary-color)] hover:text-white transition-colors cursor-pointer"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Compartir en redes */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-8 p-6 bg-gray-50 rounded-2xl">
                        <div className="flex items-center gap-2">
                            <FiShare2 size={18} className="text-gray-700" />
                            <span className="font-semibold text-gray-700">Share this post:</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                                <FaFacebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                                <FaTwitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                <FaInstagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Bio del autor */}
                    <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <img
                                src={blogAuthor}
                                alt={post.author}
                                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-[var(--pg-color)] mb-2">Written by {post.author}</h4>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Professional travel writer and adventurer with over 10 years of experience exploring the world's most beautiful destinations. Passionate about sharing authentic travel experiences and practical tips.
                                </p>
                                <div className="flex items-center gap-3">
                                    <a href="#" className="text-gray-500 hover:text-[var(--primary-color)] transition-colors">
                                        <FaTwitter size={18} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-[var(--primary-color)] transition-colors">
                                        <FaInstagram size={18} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-[var(--primary-color)] transition-colors">
                                        <FaLinkedin size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* 3. Posts Relacionados */}
            {relatedPosts.length > 0 && (
                <section className="py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-[var(--pg-color)] mb-8 text-center">
                            Related Posts
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.id}
                                    to={`/blog-details/${related.id}`}
                                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="overflow-hidden">
                                        <img
                                            src={related.img}
                                            alt={related.title}
                                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <span className="inline-block px-2 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary-color)] text-xs font-bold uppercase mb-3">
                                            {related.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-[var(--pg-color)] group-hover:text-[var(--primary-color)] transition-colors line-clamp-2">
                                            {related.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                                            <FiCalendar size={12} /> {related.date}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 4. Sección de Comentarios */}
            <section className="py-12 md:py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[var(--pg-color)] mb-8 flex items-center gap-3">
                        <FiMessageSquare className="text-[var(--primary-color)]" />
                        Leave a Comment
                    </h2>

                    {commentSubmitted ? (
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                            <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" style={{ width: 64, height: 64 }} />
                            <h3 className="text-xl font-bold text-green-800 mb-2">Comment Submitted!</h3>
                            <p className="text-green-700">Thank you for your feedback. We'll review it shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleCommentSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={commentForm.name}
                                        onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={commentForm.email}
                                        onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Comment *</label>
                                <textarea
                                    required
                                    rows="5"
                                    value={commentForm.message}
                                    onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 outline-none transition-all resize-none"
                                    placeholder="Share your thoughts about this post..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg"
                            >
                                <FiSend size={18} />
                                Post Comment
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* 5. Botón volver al blog */}
            <div className="py-8 bg-gray-50 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-[var(--primary-color)] font-semibold hover:underline transition-all"
                    >
                        <FiArrowLeft size={18} />
                        Back to all posts
                    </Link>
                </div>
            </div>
        </>
    );
}

export default BlogDetails;