import { useTaskDetails } from "@/hooks";
import { useAppSelector } from "@/store/hooks";
import { Modal } from "antd";

const SingleTaskDetails = () => {
  const { showMoreModal } = useAppSelector((state) => {
    return state.task;
  });
  const { onClickTaskDetails } = useTaskDetails();
  return <Modal open={showMoreModal} footer={false} onCancel={() => onClickTaskDetails(false)}></Modal>;
};

export default SingleTaskDetails;
