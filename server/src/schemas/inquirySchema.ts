import { z } from 'zod';

export const VALID_SERVICES = [
  'Fire Alarm Systems',
  'Fire Fighting Systems',
  'Fire Extinguisher Supply and Refilling',
  'Electrical Systems',
  'CCTV Systems',
  'AMC and Maintenance Services',
  'General Fire Safety Audit / Inspection',
] as const;

export const VALID_CONTACT_METHODS = ['WhatsApp', 'Phone Call', 'Email'] as const;

export const inquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters long' })
    .max(100, { message: 'Name cannot exceed 100 characters' }),
  companyName: z
    .string()
    .trim()
    .max(150, { message: 'Company name cannot exceed 150 characters' })
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .trim()
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .max(16, { message: 'Phone number is too long' })
    .regex(/^(\+91[\-\s]?)?[6789]\d{9}$/, {
      message: 'Please provide a valid Indian mobile number (e.g., +91 9812345678 or 9812345678)',
    }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please provide a valid email address' })
    .max(120, { message: 'Email cannot exceed 120 characters' })
    .optional()
    .or(z.literal('')),
  service: z.enum(VALID_SERVICES, {
    errorMap: () => ({ message: 'Please select a valid service from the list' }),
  }),
  location: z
    .string()
    .trim()
    .min(2, { message: 'Please specify the facility or site location (e.g., Sector 58 Faridabad, Okhla, Gurugram)' })
    .max(150, { message: 'Location cannot exceed 150 characters' }),
  message: z
    .string()
    .trim()
    .max(2000, { message: 'Message cannot exceed 2000 characters' })
    .optional()
    .or(z.literal('')),
  preferredContactMethod: z.enum(VALID_CONTACT_METHODS).default('WhatsApp'),
  // Honeypot field for spam prevention - must be empty
  website_hp: z.string().optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
