export type InvitationStatus =
  | "pending"
  | "sent"
  | "activated";

export interface InvitationItem {
  id: string;

  residentId: string;

  fullName: string;

  phone: string;

  email: string;

  invitationCode: string;

  status: InvitationStatus;

  sentAt: string;
}