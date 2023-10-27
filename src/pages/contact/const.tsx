import { object, string } from 'yup';

export const Schema = object({
  returnAddress: string().email('Must be an email address'),
  name: string().max(256, 'Name is too long').required('Name is required'),
  subject: string()
    .max(128, 'Subject is too long')
    .required('Subject is required'),
  body: string().required('Message body is required'),
});

export type SubmitState = 'unsubmitted' | 'waiting' | 'success';
