import useAddTask from "@/hooks/useAddTask";
import { useAppSelector } from "@/store/hooks";
import { CategoryTypes } from "@/utils/enums";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { PlusCircle, MinusCircle } from "lucide-react";

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
      title="Add New Task"
      centered
    >
      <Form
        layout="vertical"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        className="mt-5 overflow-y-auto max-h-[80svh]"
      >
        <Form.Item
          label="Task Title"
          name="taskTitle"
          rules={[{ required: true, message: "Task title is required" }]}
        >
          <Input placeholder="Task Title" />
        </Form.Item>
        <Form.Item
          label="Task Category"
          name="taskCategory"
          rules={[{ required: true, message: "Task category is required" }]}
        >
          <Select
            placeholder="Select Task Priority"
            showSearch
            options={[
              {
                label: "Personal",
                value: CategoryTypes.PERSONAL,
              },
              {
                label: "Work",
                value: CategoryTypes.WORK,
              },
              {
                label: "Urgent",
                value: CategoryTypes.URGENT,
              },
              {
                label: "Others",
                value: CategoryTypes.OTHER,
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Task Description"
          name="taskDescription"
          rules={[{ required: true, message: "Task description is required" }]}
        >
          <Input.TextArea rows={4} placeholder="Task Description" />
        </Form.Item>
        <Form.Item
          label="Due Date"
          name="dueDate"
          rules={[{ required: true, message: "Due date is required" }]}
        >
          <DatePicker placeholder="Due Date" className="w-full p-3" />
        </Form.Item>
        <div>
          <Form.List name="users">
            {(fields, { add, remove }) => (
              <>
                <div className="flex items-center justify-start gap-2 mb-3"> 
                  <h3>Checklist</h3>
                  <PlusCircle size={17} className="cursor-pointer transition-all hover:scale-105" onClick={() => add()} />
                </div>
                {fields.map(({ key, name, ...restField }) => (
                  <div
                    className="flex items-center justify-between gap-5"
                    key={key}
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "last"]}
                      rules={[{ required: true, message: "Checklist content" }]}
                      className="w-full"
                    >
                      <Input placeholder="Type here" />
                    </Form.Item>
                    <MinusCircle
                      onClick={() => remove(name)}
                      className="mb-5"
                      size={20}
                    />
                  </div>
                ))}
              </>
            )}
          </Form.List>
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="shadow-none p-5"
            block
          >
            Add Task
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddNewTask;
