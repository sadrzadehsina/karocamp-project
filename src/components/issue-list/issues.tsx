import { Badge } from "../ui/badge";
import { useIssues } from "./issue-list-context";

export function Issues() {
  const issues = useIssues();

  return (
    <div className="flex flex-col gap-y-4">
      {issues.map((issue) => (
        <div className="border rounded-lg p-4 flex flex-col">
          <div>
            <h1>{issue.title}</h1>
          </div>
          <div>
            <p>{issue.description}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Badge>{issue.status}</Badge>
            <Badge>{issue.priority}</Badge>
          </div>
        </div>
      ))}
    </div>
  );
}
