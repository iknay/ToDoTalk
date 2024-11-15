import { Columns } from '@/components/customs/Tasks/Columns';
import CreateTask from '@/components/customs/Tasks/CreateTask';
import TasksTable from '@/components/customs/Tasks/TasksTable';
import useTaskHooks from '@/hooks/useTaskHooks';
import { useMemo } from 'react';

const Tasks = () => {
  const { getAllTasks } = useTaskHooks();

  const { data: tasks } = getAllTasks();

  const taskMemo = useMemo(() => tasks, [tasks]);

  console.log(taskMemo);
  return (
    <div className="flex w-full h-full space-x-4">
      <div className="flex flex-col w-full h-full space-y-4">
        <div className="p-4 space-y-3 rounded-xl bg-secondary">
          <h1 className="text-4xl font-bold">Hello, Yancee!</h1>
          <p className="text-sm text-muted">It's hello</p>
        </div>
        <div className="h-full p-4 pb-0 space-y-4 rounded-xl bg-secondary">
          <CreateTask />
          <TasksTable data={taskMemo!} columns={Columns} />
        </div>
      </div>
      {/* <div className="h-full p-4 space-y-4 rounded-t-xl background-image min-w-[30%]" /> */}
    </div>
  );
};

export default Tasks;
