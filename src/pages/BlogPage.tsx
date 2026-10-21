import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, BookOpen } from 'lucide-react';
import { MetaTags } from '../seo/MetaTags';
import { StructuredData } from '../seo/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BLOG_POSTS_DATA } from '../data/blogData';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Fire Extinguishers', 'Inspection & Maintenance', 'AMC & Compliance', 'Fire Alarm Systems'];

  const filteredPosts =
    selectedCategory === 'All'
      ? BLOG_POSTS_DATA
      : BLOG_POSTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <>
      <MetaTags
        title="Fire Safety Guides & Standards Resources | Elite Fire Blog"
        description="Educational guides on Indian Standards (IS 2190, IS 3844, IS 2189), fire extinguisher selection, NBC 2016 norms, and preventative AMC checklists."
        canonicalPath="/blog"
      />
      <StructuredData type="LocalBusiness" />

      <Breadcrumbs items={[{ label: 'Blog & Resources', path: '/blog' }]} />

      {/* Header */}
      <section className="bg-navy-900 text-white py-14 sm:py-20 border-b-4 border-safety-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <span className="text-xs font-bold text-safety-400 uppercase tracking-wider">
            Technical Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
            Fire Safety Guides & Compliance Resources
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Practical insights on Indian fire safety regulations, IS codes, preventative maintenance routines, and commercial life-safety planning.
          </p>
        </div>
      </section>

      {/* Categories Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                selectedCategory === cat
                  ? 'bg-safety-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog List */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-navy-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-navy-900 hover:text-safety-600 transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs font-bold text-safety-600 hover:text-safety-700 flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
