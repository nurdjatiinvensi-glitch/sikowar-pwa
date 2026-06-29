export type ComplaintStatus =
  | "new"
  | "process"
  | "done";

export interface ComplaintItem {
  id: string;

  title: string;

  category: string;

  reporter: string;

  date: string;

  status: ComplaintStatus;
}