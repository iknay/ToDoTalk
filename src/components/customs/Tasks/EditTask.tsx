import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  SheetHeader,
  SheetDescription,
  SheetTitle,
} from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import useTaskHooks from '@/hooks/useTaskHooks';
import { ITask } from '@/lib/typings/ITodo';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface IEditTask {
  task: ITask;
}

const EditTask = ({ task }: IEditTask) => {
  const { debounceHandler } = useTaskHooks();

  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  return (
    <>
      <SheetHeader>
        <SheetTitle>Task</SheetTitle>
        <SheetDescription className="items-center space-y-1">
          <div className="flex items-center h-full">
            <Checkbox
              checked={isCompleted}
              onCheckedChange={(e) => {
                debounceHandler({ ...task, isCompleted: !!e });
                setIsCompleted(!isCompleted);
              }}
            />
            <Input
              className={cn(
                'w-full font-medium text-lg bg-transparent truncate border-none focus-visible:ring-0',
              )}
              defaultValue={task.title}
              onChange={(e) =>
                debounceHandler({ ...task, title: e.target.value })
              }
            />
          </div>
          <Textarea
            onChange={(e) => {
              debounceHandler({ ...task, description: e.target.value });
            }}
            placeholder="description"
            className="min-h-[120px]"
          />
        </SheetDescription>
      </SheetHeader>
    </>
  );
};

export default EditTask;
