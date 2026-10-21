export interface LeadEmailData {
  name: string;
  phone: string;
  email?: string;
  companyName?: string;
  service: string;
  location: string;
  preferredContactMethod: string;
  message?: string;
  createdAt: Date;
  leadId: string;
}

export function generateLeadNotificationEmail(lead: LeadEmailData): { subject: string; text: string; html: string } {
  const subject = `[New Fire Safety Inquiry] ${lead.service} - ${lead.name} (${lead.location})`;

  const text = `
NEW INQUIRY RECEIVED - ELITE FIRE AND PROTECTION

Lead ID: ${lead.leadId}
Date/Time: ${lead.createdAt.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Contact Information:
- Full Name: ${lead.name}
- Company: ${lead.companyName || 'Not specified (Individual/Residential)'}
- Phone Number: ${lead.phone}
- Email: ${lead.email || 'Not provided'}
- Preferred Contact: ${lead.preferredContactMethod}

Service Requirement:
- Service: ${lead.service}
- Site Location: ${lead.location}

Project Description / Notes:
${lead.message || 'No additional description provided.'}

---------------------------------------------------
Please follow up with this prospect promptly.
`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; }
    .header { background: #0f172a; padding: 24px; text-align: center; border-bottom: 4px solid #dc2626; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }
    .header p { color: #94a3b8; margin: 6px 0 0; font-size: 13px; }
    .content { padding: 24px; }
    .lead-badge { display: inline-block; background: #fee2e2; color: #991b1b; padding: 4px 10px; border-radius: 9999px; font-weight: 600; font-size: 12px; margin-bottom: 16px; }
    .field-group { margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
    .field-label { font-size: 12px; font-weight: 600; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; }
    .field-value { font-size: 15px; font-weight: 500; color: #0f172a; margin-top: 4px; }
    .notes-box { background: #f8fafc; border-left: 4px solid #dc2626; padding: 12px 16px; border-radius: 4px; font-size: 14px; line-height: 1.5; color: #334155; }
    .cta-bar { text-align: center; margin-top: 24px; }
    .phone-button { display: inline-block; background: #dc2626; color: #ffffff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px; }
    .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Elite Fire and Protection</h1>
      <p>Qualified Lead Notification &bull; Faridabad & Delhi NCR</p>
    </div>
    <div class="content">
      <span class="lead-badge">Service Inquiry: ${lead.service}</span>

      <div class="field-group">
        <div class="field-label">Customer Name</div>
        <div class="field-value">${lead.name}</div>
      </div>

      <div class="field-group">
        <div class="field-label">Company / Facility</div>
        <div class="field-value">${lead.companyName || 'Not specified (Individual/Facility)'}</div>
      </div>

      <div class="field-group">
        <div class="field-label">Contact Details</div>
        <div class="field-value">
          <strong>Phone:</strong> <a href="tel:${lead.phone}" style="color: #dc2626; text-decoration: none;">${lead.phone}</a><br>
          ${lead.email ? `<strong>Email:</strong> <a href="mailto:${lead.email}">${lead.email}</a><br>` : ''}
          <strong>Preferred Method:</strong> ${lead.preferredContactMethod}
        </div>
      </div>

      <div class="field-group">
        <div class="field-label">Site Location</div>
        <div class="field-value">${lead.location}</div>
      </div>

      <div class="field-group">
        <div class="field-label">Project Details / Message</div>
        <div class="notes-box">${lead.message || 'No additional details provided.'}</div>
      </div>

      <div class="cta-bar">
        <a href="tel:${lead.phone}" class="phone-button">Call Prospect Now</a>
      </div>
    </div>
    <div class="footer">
      Lead ID: ${lead.leadId} &bull; Received: ${lead.createdAt.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    </div>
  </div>
</body>
</html>
`;

  return { subject, text, html };
}
