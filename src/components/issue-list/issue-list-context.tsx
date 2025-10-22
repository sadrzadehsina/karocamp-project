import { createContext, useContext, useEffect, useState } from "react";

import { type ContextType, type Priority, type Status } from "./types";

import { issuesData } from "./issues-data";

const IssueListContext = createContext<ContextType | undefined>(undefined);

export function IssueListContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [issues, setIssues] = useState(issuesData);

  const [query, setQuery] = useState("");

  const [priority, setPriority] = useState("All" as Priority);

  const [status, setStatus] = useState("All" as Status);

  useEffect(() => {
    setIssues(() => {
      return issues.filter((issue) => issue.title.includes(query));
    });
  }, [query]);

  return (
    <IssueListContext.Provider
      value={{
        query,
        setQuery,
        priority,
        setPriority,
        status,
        setStatus,
        issues,
        setIssues,
      }}
    >
      {children}
    </IssueListContext.Provider>
  );
}

export const useIssueListContext = () => useContext(IssueListContext);

export const useIssues = () => {
  const { issues } = useIssueListContext() as ContextType;
  return issues;
};

export const useQuery = () => {
  const { query, setQuery } = useIssueListContext() as ContextType;
  return { query, setQuery };
};
