import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetTitle,
} from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import useTaskHooks from '@/hooks/useTaskHooks';
import { ITask } from '@/lib/typings/ITodo';
import { cn } from '@/lib/utils';
import { Pencil } from 'lucide-react';

interface IEditTask {
  task: ITask;
}

const EditTask = ({ task }: IEditTask) => {
  const { debounceHandler } = useTaskHooks();

  return (
    <>
      <Sheet>
        <SheetTrigger className="p-1 transition duration-300 rounded-md hover:bg-muted/20">
          <Pencil size={16} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Task</SheetTitle>
            <SheetDescription className="items-center space-y-1">
              <div className="flex items-center h-full">
                <Checkbox />
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
        </SheetContent>
      </Sheet>
    </>
  );
};

export default EditTask;
