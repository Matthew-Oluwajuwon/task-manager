import { useTaskDetails } from "@/hooks";
import { Task } from "@/types/tasks.type";
import { Card, Progress, Tag, Typography } from "antd";

const SingleTaskCard: React.FC<Task> = ({
  category,
  createdDate,
  description,
  dueDate,
  progress,
  title,
}) => {
    const { onClickTaskDetails } = useTaskDetails();
  return (
    <Card className="flex flex-col h-full justify-between mb-5 cursor-grab">
      <div>
        <div className="flex items-center justify-between">
          <button onClick={() => onClickTaskDetails(true)} className="font-proxima-nova-semibold text-lg cursor-pointer underline text-primary-500 underline-offset-2 transition-all hover:scale-95">{title}</button>
          <p className="text-[0.6rem] sm:text-[0.7rem]">
            <span className="font-proxima-nova-semibold">CATEGORY:</span>{" "}
            <Tag className="p-0 text-[0.6rem] border-[#fe6a08] text-[#fe6a08] bg-[#fe6a0820] w-14 text-center">
              {category}
            </Tag>
          </p>
        </div>
        <Typography.Paragraph className="mt-2 text-[0.65rem] sm:text-[0.8rem] max-w-xs line-clamp-3">
          {description}
        </Typography.Paragraph>
      </div>
      <div className="flex items-center justify-between">
        <Typography.Paragraph className="text-[0.65rem] sm:text-[0.7rem]">
          Due Date: {dueDate}
        </Typography.Paragraph>
        <Typography.Paragraph className="text-[0.65rem] sm:text-[0.7rem]">
          Created: {createdDate}
        </Typography.Paragraph>
      </div>
      <Progress percent={progress} size="small" strokeColor="#287292"  />
    </Card>
  );
};

export default SingleTaskCard;
