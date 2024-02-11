import { CustomCred } from "./CustomCred";

export type Cred = {
  id: string;
  cert_id: string;
  date_issued: string;
  owner: string;
  expiration_date: string;
  credential_type: 'univeristy' | 'license' | 'membership' | 'exam' | 'other';
  custom_cred?: CustomCred;
  created: string;
  updated: string;
}