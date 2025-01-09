import useAddTask from "@/hooks/useAddTask";
import { useAppSelector } from "@/store/hooks";
import { Modal } from "antd";

const AddNewTask = () => {
  const { showAddTaskModal } = useAppSelector((state) => {
    return state.task;
  });
  const { onClickAddTask } = useAddTask();

  return (
    <Modal
      open={showAddTaskModal}
      footer={false}
      onCancel={() => onClickAddTask(false)}
    ></Modal>
  );
};

export default AddNewTask;
