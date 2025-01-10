import { TaskStep } from "@/types/tasks.type";
import TaskList from "./TaskList";

const Tasks = () => {
  const taskSteps: TaskStep[] = [
    {
      title: "TO DO",
      data: [
        {
          title: "Task 1",
          description: "Description 1",
          category: "Personal",
          dueDate: "12/12/2022",
          createdDate: "12/12/2022",
          progress: 35,
        },
        {
          title: "Task 2",
          description: "Description 2",
          category: "Work",
          dueDate: "12/12/2022",
          createdDate: "12/12/2022",
          progress: 35,
        },
        {
          title: "Task 3",
          description: "Description 3",
          category: "Personal",
          dueDate: "12/12/2022",
          createdDate: "12/12/2022",
          progress: 35,
        },
        {
          title: "Task 4",
          description: "Description 4",
          category: "Work",
          dueDate: "12/12/2022",
          createdDate: "12/12/2022",
          progress: 35,
        },
      ],
    },
    {
      title: "DOING",
      data: [
        {
          title: "Task 15",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti saepe atque quo sit? Vero ex eum voluptatum perspiciatis quo maiores optio neque ipsum odit at, natus provident atque nesciunt molestias.",
          category: "Personal",
          dueDate: "12/12/2022",
          createdDate: "12/12/2022",
          progress: 35,
        },
        {
          title: "Task 21",
          description: "Description 2",
          category: "Work",
          dueDate: "12/12/2022",
          createdDate: "12/12/2022",
          progress: 35,
        },
        {
          title: "Task 32",
          description: "Description 3",
          category: "Personal",
          dueDate: "12/12/2022",
          createdDate: "12/12/2022",
          progress: 35,
        },
        {
          title: "Task 42",
          description: "Description 4",
          category: "Work",
          dueDate: "12/12/2022",
          createdDate: "12/12/2022",
          progress: 35,
        },
      ],
    },
    {
      title: "COMPLETED",
      data: [
        {
          title: "Task 1",
          description: "Description 1",
          category: "Personal",
          dueDate: "12/12/2022",
          createdDate: "12/12/2022",
          progress: 35,
        },
        {
          title: "Task 2",
          description: "Description 2",
          category: "Work",
          dueDate: "12/12/2022",
          createdDate: "12/12/2022",
          progress: 35,
        },
      ],
    },
    {
      title: "BACKLOGS",
      data: [
        {
          title: "Task 4",
          description: "Description 4",
          category: "Work",
          dueDate: "12/12/2022",
          createdDate: "12/12/2022",
          progress: 35,
        },
      ],
    },
  ];

  return (
    <div className="flex justify-between w-full 3xl:max-w-[80%] mx-auto gap-5 h-full overflow-auto my-5">
      {taskSteps.map((step: TaskStep, index) => (
        <TaskList
          key={index}
          taskData={step.data}
          index={index}
          title={step.title}
        />
      ))}
    </div>
  );
};

export default Tasks;
