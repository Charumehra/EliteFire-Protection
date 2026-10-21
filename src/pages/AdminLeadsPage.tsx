import React, { useState, useEffect } from 'react';
import { ShieldCheck, Download, Trash2, Phone, MessageCircle, Calendar } from 'lucide-react';
import { MetaTags } from '../seo/MetaTags';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const AdminLeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('elite_leads') || '[]');
      setLeads(stored);
    } catch {
      setLeads([]);
    }
  }, []);

  const clearLeads = () => {
    if (window.confirm('Are you sure you want to clear the local inquiry log?')) {
      localStorage.removeItem('elite_leads');
      setLeads([]);
    }
  };

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = ['Quote ID', 'Date', 'Name', 'Company', 'Phone', 'Email', 'Service', 'Location', 'Preferred Contact', 'Message'];
    const rows = leads.map((l) => [
      l.id,
      l.timestamp,
      `"${l.name}"`,
      `"${l.companyName || ''}"`,
      `"${l.phone}"`,
      `"${l.email || ''}"`,
      `"${l.service}"`,
      `"${l.location}"`,
      `"${l.preferredContactMethod}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `elite_fire_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <MetaTags
        title="Inquiry Log & Admin Dashboard | Elite Fire and Protection"
        description="Administrative log of customer inquiries received on Elite Fire & Protection."
        canonicalPath="/admin/leads"
      />

      <Breadcrumbs items={[{ label: 'Admin Dashboard', path: '/admin/leads' }]} />

      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-safety-600 uppercase tracking-wider">
                Management Portal
              </span>
              <h1 className="text-2xl font-bold text-navy-900 mt-1">
                Recent Inquiries & Quote Requests
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Client inquiries submitted on this device ({leads.length} total)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={exportCSV}
                disabled={leads.length === 0}
                className="inline-flex items-center gap-1.5 bg-navy-900 text-white font-bold text-xs py-2 px-3.5 rounded-lg hover:bg-navy-800 disabled:opacity-40"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>

              <button
                type="button"
                onClick={clearLeads}
                disabled={leads.length === 0}
                className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 border border-red-200 font-bold text-xs py-2 px-3.5 rounded-lg hover:bg-red-100 disabled:opacity-40"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Log</span>
              </button>
            </div>
          </div>

          {leads.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center text-slate-500 text-sm">
              <ShieldCheck className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="font-semibold text-slate-700">No Inquiries Logged Yet</p>
              <p className="text-xs mt-1">
                When visitors submit a quote form on this device, inquiry records appear here.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="px-4 py-3">Quote ID</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Prospect</th>
                      <th className="px-4 py-3">Service</th>
                      <th className="px-4 py-3">Location</th>
                      <th className="px-4 py-3">Contact</th>
                      <th className="px-4 py-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-50/80">
                        <td className="px-4 py-3 font-mono font-bold text-navy-900">
                          {lead.id}
                        </td>
                        <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
                          {new Date(lead.timestamp).toLocaleDateString('en-IN')}
                        </td>
                        <td className="px-4 py-3">
                          <strong className="text-navy-900 block">{lead.name}</strong>
                          {lead.companyName && (
                            <span className="text-[11px] text-slate-500 block">{lead.companyName}</span>
                          )}
                        </td>
                        <td className="px-4 py-3 font-medium text-safety-700">
                          {lead.service}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {lead.location}
                        </td>
                        <td className="px-4 py-3">
                          <a
                            href={`tel:${lead.phone}`}
                            className="font-medium text-navy-900 hover:text-safety-600 flex items-center gap-1"
                          >
                            <Phone className="w-3 h-3" />
                            {lead.phone}
                          </a>
                          {lead.email && (
                            <span className="text-[11px] text-slate-400 block">{lead.email}</span>
                          )}
                        </td>
                        <td className="px-4 py-3 max-w-xs truncate text-slate-500">
                          {lead.message || '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
