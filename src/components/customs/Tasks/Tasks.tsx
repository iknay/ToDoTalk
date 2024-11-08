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
import { Plus } from 'lucide-react';

const Tasks = () => {
  const [todo, setTodo] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [priority, setPriority] = useState('low');
  const [isCompleted, setIsCompleted] = useState(false);

  const { getAllTasks, handleCreateTask } = useTaskHooks();

  const { data: tasks } = getAllTasks();

  const taskMemo = useMemo(() => tasks, [tasks]);

  return (
    <>
      <Input
        className="w-full placeholder:text-black"
        placeholder={isFocused ? '' : 'New Task'}
        icon={
          isFocused ? (
            <Checkbox
              onCheckedChange={() => setIsCompleted(!isCompleted)}
              checked={isCompleted}
            />
          ) : (
            <Plus />
          )
        }
        onFocus={() => setIsFocused(true)}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.currentTarget.value) {
            setTodo('');
            handleCreateTask({
              e,
              task: {
                createdAt: new Date().toISOString(),
                title: todo,
                priority: priority,
                isCompleted: isCompleted,
              },
            });
            setIsFocused(false);
            setIsCompleted(false);
          }
        }}
        children={
          <Select onValueChange={(value) => setPriority(value)}>
            <SelectTrigger className="w-[8rem] border-none text-sm text-end items-end">
              <SelectValue placeholder="Set Priority" />
            </SelectTrigger>
            <SelectContent className="text-medium">
              <SelectItem value="low" className="text-green-500">
                Low
              </SelectItem>
              <SelectItem value="medium" className="text-yellow-500">
                Medium
              </SelectItem>
              <SelectItem value="high" className="text-red-500">
                High
              </SelectItem>
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
