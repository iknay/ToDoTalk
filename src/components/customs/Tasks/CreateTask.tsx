import { Input } from '@/components/ui/input';
import { useState } from 'react';
import _ from 'lodash';
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import useTaskHooks from '@/hooks/useTaskHooks';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const CreateTask = () => {
  const [todo, setTodo] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [priority, setPriority] = useState('low');
  const [isCompleted, setIsCompleted] = useState(false);

  const { handleCreateTask } = useTaskHooks();

  return (
    <>
      <Input
        className={cn('w-full border-dashed', isFocused ? 'border-solid' : '')}
        placeholder={isFocused ? '' : 'New Task'}
        icon={<Plus className={isFocused ? 'text-primary' : ''} />}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          if (todo === '') {
            setIsFocused(false);
          }
        }}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.currentTarget.value) {
            e.currentTarget.value = '';
            setTodo('');
            handleCreateTask({
              task: {
                title: todo,
                priority: priority,
                isCompleted: isCompleted,
                status: 'todo',
              },
            });
            setIsFocused(false);
            setIsCompleted(false);
            setPriority('');
          }
        }}
        children={
          <Select
            onValueChange={(value) => setPriority(value)}
            value={priority}
          >
            <SelectTrigger className="max-w-[8rem] border-none text-sm space-x-3">
              <SelectValue placeholder="Set Priority" />
            </SelectTrigger>
            <SelectContent className="text-medium w-[6rem]">
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
    </>
  );
};

export default CreateTask;
