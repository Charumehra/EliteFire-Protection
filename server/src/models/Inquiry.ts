import mongoose, { Schema, Document } from 'mongoose';

export interface IFollowUpNote {
  note: string;
  author: string;
  createdAt: Date;
}

export interface IInquiry extends Document {
  name: string;
  companyName?: string;
  phone: string;
  email?: string;
  service: string;
  location: string;
  message?: string;
  preferredContactMethod: string;
  status: 'new' | 'contacted' | 'quote_sent' | 'converted' | 'closed';
  notes: IFollowUpNote[];
  emailNotificationSent: boolean;
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
  updatedAt: Date;
}

const FollowUpNoteSchema = new Schema<IFollowUpNote>({
  note: { type: String, required: true },
  author: { type: String, default: 'Admin' },
  createdAt: { type: Date, default: Date.now },
});

const InquirySchema = new Schema<IInquiry>(
  {
    name: { type: String, required: true, trim: true },
    companyName: { type: String, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    service: { type: String, required: true },
    location: { type: String, required: true, trim: true },
    message: { type: String, trim: true },
    preferredContactMethod: {
      type: String,
      enum: ['WhatsApp', 'Phone Call', 'Email'],
      default: 'WhatsApp',
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'quote_sent', 'converted', 'closed'],
      default: 'new',
    },
    notes: [FollowUpNoteSchema],
    emailNotificationSent: { type: Boolean, default: false },
    ipAddress: { type: String },
    userAgent: { type: String },
  },
  {
    timestamps: true,
  }
);

// Performance & Filtering indexes
InquirySchema.index({ createdAt: -1 });
InquirySchema.index({ service: 1 });
InquirySchema.index({ status: 1 });
InquirySchema.index({ phone: 1 });

export const Inquiry = mongoose.model<IInquiry>('Inquiry', InquirySchema);
