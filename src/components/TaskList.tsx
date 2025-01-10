import { Card } from "antd";
import SingleTaskCard from "./SingleTaskCard";
import { PlusCircle } from "lucide-react";
import { Task } from "@/types/tasks.type";
import { useAddTask } from "@/hooks";

interface TaskListProps {
  title: string;
  index: number;
  taskData: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ title, index, taskData }) => {
  const { onClickAddTask } = useAddTask();

  return (
    <div className="flex-1">
      <Card
        title={
          <div className="font-proxima-nova-bold text-center w-full flex items-center justify-center">
            {title}{" "}
            {index === 0 && (
              <PlusCircle
                onClick={() => onClickAddTask(true)}
                color="#287292"
                className="ml-1 transition-all hover:scale-95 cursor-pointer"
                size={20}
              />
            )}
          </div>
        }
        className="min-w-[18rem] max-w-[35rem] !w-full h-[95%] shadow-sm overflow-auto"
      >
        {taskData.map((task: Task, index) => (
          <SingleTaskCard key={index} {...task} />
        ))}
      </Card>
    </div>
  );
};

export default TaskList;
