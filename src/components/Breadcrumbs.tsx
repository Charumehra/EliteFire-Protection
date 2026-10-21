import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { StructuredData, BreadcrumbItem } from '../seo/StructuredData';

interface BreadcrumbsProps {
  items: { label: string; path: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const schemaList: BreadcrumbItem[] = [
    { name: 'Home', item: '/' },
    ...items.map((i) => ({ name: i.label, item: i.path })),
  ];

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-100/70 border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-navy-900 flex items-center gap-1 font-medium">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item.path}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              {isLast ? (
                <span className="font-semibold text-navy-900" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-navy-900 font-medium">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <StructuredData type="Breadcrumbs" data={schemaList} />
    </nav>
  );
};
