import { Columns } from '@/components/customs/Tasks/Columns';
import CreateTask from '@/components/customs/Tasks/CreateTask';
import TasksTable from '@/components/customs/Tasks/TasksTable';
import { Skeleton } from '@/components/ui/skeleton';
import useTaskHooks from '@/hooks/useTaskHooks';
import { useMemo } from 'react';

const Tasks = () => {
  const { getAllTasks } = useTaskHooks();

  const { data: tasks, isLoading: tasksLoading } = getAllTasks();

  const taskMemo = useMemo(() => tasks, [tasks]);

  return (
    <div className="flex w-full h-full space-x-4">
      <div className="flex flex-col w-full h-full space-y-4">
        <div className="p-4 space-y-3 rounded-xl bg-secondary">
          <CreateTask />
        </div>
        <div className="h-full p-4 space-y-4 rounded-xl bg-secondary ">
          {tasksLoading || taskMemo === undefined ? (
            <>
              {Array.from({ length: taskMemo?.length ?? 10 }).map(
                (_, index) => (
                  <Skeleton key={index} className="w-full h-[2.5rem]" />
                ),
              )}
            </>
          ) : (
            <TasksTable data={taskMemo} columns={Columns} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
