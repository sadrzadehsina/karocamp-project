import { IssueListContextProvider } from "./components/issue-list/issue-list-context";
import { Issues } from "./components/issue-list/issues";
import { PriorityDropdown } from "./components/issue-list/priority-dropdown";
import { SearchInput } from "./components/issue-list/search-input";
import { StatusSelect } from "./components/issue-list/status-select";

export default function IssueList() {
  return (
    <IssueListContextProvider>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-2">
          <SearchInput />
          <PriorityDropdown />
        </div>
        <StatusSelect />
        <Issues />
      </div>
    </IssueListContextProvider>
  );
}
