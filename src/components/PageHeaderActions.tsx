import { Button, Input } from "antd";
import { ListFilter, PlusCircle, SearchIcon } from "lucide-react";

const PageHeaderActions = () => {
  return (
    <div className="flex items-center justify-between gap-10">
      <Button
        type="primary"
        icon={<PlusCircle />}
        className="shadow-none px-3 p-5"
      >
        <span className="hidden sm:block">Add Task</span>
      </Button>
      <div className="flex items-center justify-end w-full lg:w-1/4 ml-auto">
        <Input
          placeholder="Search..."
          allowClear
          addonAfter={<SearchIcon color="white" />}
        />
        <Button
          type="default"
          className="ml-2 shadow-none p-5"
          icon={<ListFilter size={15} />}
        >
          <span className="hidden sm:block">Filter</span>
        </Button>
      </div>
    </div>
  );
};

export default PageHeaderActions;
