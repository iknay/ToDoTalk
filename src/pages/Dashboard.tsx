import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { todoAppService } from '@/dataservices/todolist';
import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';
import _ from 'lodash';

const Dashboard = () => {
  const [todo, setTodo] = useState('');
  const { getTasks, createTask, updateTask, deleteTask } = todoAppService();

  const { data: tasks, refetch: refetchTasks } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
    staleTime: Infinity,
  });

  const taskMemo = useMemo(() => tasks, [tasks]);

  const handleCreateTask = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.currentTarget.value = '';
    setTodo(`${todo}`); // Store the reference
    try {
      await createTask({
        description: todo,
        isCompleted: false,
        priority: 'low',
      });
      await refetchTasks();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleUpdateTask = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
      const value = e.target.value;
      await updateTask({
        id,
        description: value,
        isCompleted: false,
        priority: 'low',
      });
      await refetchTasks();
    },
    [updateTask, refetchTasks],
  );

  const debounceHandler = useMemo(
    () =>
      _.debounce(
        (e: React.ChangeEvent<HTMLInputElement>, id: string) =>
          handleUpdateTask(e, id),
        800,
      ),
    [handleUpdateTask],
  );

  const handleDeleteTask = async (id: string) => {
    await deleteTask({ id });
    await refetchTasks();
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex p-4 rounded-md bg-secondary">
        <h1>Hello, Yancee</h1>
      </div>
      <div className="p-4 space-y-4 rounded-md bg-secondary h-[calc(100vh-9.5rem)]">
        <Input
          className="w-full"
          placeholder="New Task"
          icon={<Plus />}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.currentTarget.value) {
              handleCreateTask(e);
            }
          }}
        />

        <div className="w-full space-y-4 ">
          {taskMemo?.map((task) => (
            <div key={task.id} className="flex items-center w-full gap-2">
              <div className="flex-grow">
                <Input
                  className="w-full"
                  defaultValue={task.description}
                  onChange={(e) => debounceHandler(e, task.id)}
                />
              </div>
              <Button size="sm" onClick={() => handleDeleteTask(task.id)}>
                Delete
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
