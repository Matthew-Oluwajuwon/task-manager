import { AppLayout, PageHeaderActions, Tasks } from "./components";
import AddNewTask from "./components/AddNewTask";
import SingleTaskDetails from "./components/SingleTaskDetails";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const { showAddTaskModal, showMoreModal } = useAppSelector((state) => {
    return state.task;
  });
  return (
    <AppLayout>
      {showAddTaskModal && <AddNewTask />}
      {showMoreModal && <SingleTaskDetails />}
      <PageHeaderActions />
      <Tasks />
    </AppLayout>
  );
};

export default App;
