import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, ShieldCheck } from 'lucide-react';
import { MetaTags } from '../seo/MetaTags';
import { StructuredData } from '../seo/StructuredData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BLOG_POSTS_DATA } from '../data/blogData';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface BlogPostPageProps {
  onRequestQuote: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onRequestQuote }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-navy-900 mb-2">Article Not Found</h1>
        <p className="text-sm text-slate-600 mb-6">
          The requested fire safety article could not be located.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold bg-safety-600 text-white px-4 py-2.5 rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Blog Resources</span>
        </Link>
      </div>
    );
  }

  const shareText = encodeURIComponent(`${post.title} - Read on Elite Fire & Protection:`);
  const shareUrl = encodeURIComponent(`https://elitefireandprotection.in/blog/${post.slug}`);
  const whatsappShare = `https://wa.me/?text=${shareText}%20${shareUrl}`;

  return (
    <>
      <MetaTags
        title={post.metaTitle}
        description={post.metaDescription}
        canonicalPath={`/blog/${post.slug}`}
        ogImage={post.image}
        type="article"
      />
      <StructuredData type="LocalBusiness" />

      <Breadcrumbs
        items={[
          { label: 'Blog', path: '/blog' },
          { label: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <article className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="space-y-4 pb-8 border-b border-slate-200">
            <div className="inline-block bg-safety-50 text-safety-700 text-xs font-bold px-3 py-1 rounded-full border border-safety-200">
              {post.category}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-2">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-safety-600" />
                <span>{post.author} ({post.authorRole})</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-safety-600" />
                <span>Published: {post.publishedDate} (Updated: {post.updatedDate})</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-safety-600" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="my-8 rounded-2xl overflow-hidden shadow-md max-h-96">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Text Content */}
          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Share & CTAs */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-4 py-2 rounded-lg text-xs font-bold transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share this Article on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 bg-safety-600 hover:bg-safety-700 text-white px-5 py-2.5 rounded-lg text-xs font-bold shadow transition-colors"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Request Fire Safety Inspection</span>
            </button>
          </div>
        </div>
      </article>
    </>
  );
};
