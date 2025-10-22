import { Input } from "../ui/input";
import { useQuery } from "./issue-list-context";

export function SearchInput() {
  const { setQuery } = useQuery();

  return (
    <div className="flex-1">
      <Input
        placeholder="Search issues..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
