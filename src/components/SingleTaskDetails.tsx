import { useTaskDetails } from "@/hooks";
import { useAppSelector } from "@/store/hooks";
import { Modal } from "antd";

const SingleTaskDetails = () => {
  const { showMoreModal } = useAppSelector((state) => {
    return state.task;
  });
  const { onClickTaskDetails } = useTaskDetails();
  return (
    <Modal
      open={showMoreModal}
      footer={false}
      width="50rem"
      className="max-h-[80svh]"
      onCancel={() => onClickTaskDetails(false)}
      centered
    ></Modal>
  );
};

export default SingleTaskDetails;
