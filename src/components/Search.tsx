import { Button, Input } from "antd";
import { ListFilter, SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex items-center justify-end md:w-1/4 ml-auto">
      <Input placeholder="Search..." allowClear addonAfter={<SearchIcon color="white" />} />
      <Button
        type="default"
        className="ml-2 shadow-none p-5"
        icon={<ListFilter size={15} />}
      >
        <span className="hidden sm:block">Filter</span>
      </Button>
    </div>
  );
};

export default Search;
