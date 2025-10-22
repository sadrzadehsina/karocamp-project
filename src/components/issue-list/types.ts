// union
export type Priority = "All" | "High" | "Medium" | "Low";

export type Status = "All" | "Open" | "Close";

export type ContextType = {
  query: string;
  setQuery: (query: string) => void;

  priority: Priority;
  setPriority: (priority: Priority) => void;

  status: Status;
  setStatus: (status: Status) => void;

  issues: Issue[];
  setIssues: (issues: Issue[]) => void;
};

export type Issue = {
  title: string;
  description: string;
  priority: Priority;
  status: Status;
};
