import { Input } from '@/components/ui/input';
import { useMemo, useState } from 'react';
import _ from 'lodash';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import TaskItem from './TaskItem';
import useTaskHooks from '@/hooks/useTaskHooks';

const Tasks = () => {
  const [todo, setTodo] = useState('');
  const { getAllTasks, handleCreateTask } = useTaskHooks();

  const { data: tasks } = getAllTasks();

  const taskMemo = useMemo(() => tasks, [tasks]);

  return (
    <>
      <Input
        className="w-full"
        placeholder="New Task"
        icon={<Checkbox />}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.currentTarget.value) {
            setTodo(`${todo}`);
            handleCreateTask(e, todo);
          }
        }}
        children={
          <Select>
            <SelectTrigger className="w-[8rem] border-none">
              <SelectValue placeholder="Set Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        }
      />

      <div className="w-full space-y-4 ">
        {taskMemo?.map((task) => (
          <div key={task.id} className="flex items-center w-full gap-2 px-1">
            <TaskItem task={task} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Tasks;
