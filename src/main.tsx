import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import About from "./About.tsx";
import Contact from "./Contact.tsx";
import AppLayout from "./AppLayout.tsx";
import IssueList from "./IssueList.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const message = "test";

console.log(message)

const client = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchIntervalInBackground: true,
      // refetchInterval: 1000
      // refetchOnWindowFocus:
      // throwOnError: true,
      retry: (failureCount, error) => {
        if (failureCount === 10) return false;

        if (error.name) return false;

        return true;
      },
    },
  },
});

async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<App />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="issue-list" element={<IssueList />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </StrictMode>
  );
});
