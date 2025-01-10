import { useAppDispatch } from "@/store/hooks";
import { onShowMoreModal } from "@/store/slice/task.slice";

interface TaskDetailsFunction {
  onClickTaskDetails: (open: boolean) => void;
}

const useTaskDetails = (): TaskDetailsFunction => {
  const dispatch = useAppDispatch();

  // Function to show the Add Task modal
  const onClickTaskDetails = (open: boolean) => {
    dispatch(onShowMoreModal(open));
  };

  return {
    onClickTaskDetails,
  };
};

export default useTaskDetails;
