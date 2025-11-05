import { http, HttpResponse } from "msw";

import { issuesData } from "@/components/issue-list/issues-data";

export const handlers = [
  http.get("http://localhost:5173/issues", () => {
    return HttpResponse.json(issuesData);
  }),
];
