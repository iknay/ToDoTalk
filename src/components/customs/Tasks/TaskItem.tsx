import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import {
  Sheet,
  SheetDescription,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import useTaskHooks from '@/hooks/useTaskHooks';
import { ITask } from '@/lib/typings/ITodo';
import { Separator } from '@radix-ui/react-separator';
import { EllipsisVertical, Pencil, Trash } from 'lucide-react';

interface TaskItemProps {
  task: ITask;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { handleDeleteTask, debounceHandler } = useTaskHooks();
  return (
    <>
      <Checkbox />

      <div className="flex-grow">
        <Input
          className="w-full font-medium truncate border-none focus-visible:ring-0"
          defaultValue={task.title}
          onChange={(e) => debounceHandler(e, task.id)}
        />
      </div>

      <Badge variant="secondary">{task.priority}</Badge>

      <Sheet>
        <SheetTrigger className="p-1 transition duration-300 rounded-md hover:bg-muted/20">
          <Pencil size={16} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <span
        className="p-1 transition duration-300 rounded-md cursor-pointer hover:bg-muted/20"
        onClick={() => handleDeleteTask(task.id)}
      >
        <Trash size={16} />
      </span>
    </>
  );
};

export default TaskItem;
