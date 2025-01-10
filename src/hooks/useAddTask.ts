import { useAppDispatch } from "@/store/hooks";
import { onShowAddTaskModal } from "@/store/slice/task.slice";

interface AddTaskFunction {
  onClickAddTask: (open: boolean) => void;
}

const useAddTask = (): AddTaskFunction => {
  const dispatch = useAppDispatch();

  // Function to show the Add Task modal
  const onClickAddTask = (open: boolean) => {
    dispatch(onShowAddTaskModal(open));
  };

  return {
    onClickAddTask,
  };
};

export default useAddTask;
