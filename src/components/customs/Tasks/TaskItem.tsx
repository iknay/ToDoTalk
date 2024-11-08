import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import useTaskHooks from '@/hooks/useTaskHooks';
import { ITask } from '@/lib/typings/ITodo';
import { cn } from '@/lib/utils';
import { Trash } from 'lucide-react';
import EditTask from './EditTask';

interface TaskItemProps {
  task: ITask;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { handleDeleteTask, debounceHandler } = useTaskHooks();

  const getBadgeColor = (priority: string) => {
    switch (priority) {
      case 'low':
        return 'text-green-500 bg-green-500/10 hover:border-green-500';
      case 'medium':
        return 'text-yellow-500 bg-yellow-500/10 hover:border-yellow-500';
      case 'high':
        return 'text-red-500 bg-red-500/10 hover:border-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <>
      <Checkbox
        onCheckedChange={(e: boolean) => {
          console.log(e);
          debounceHandler({ ...task, isCompleted: e });
        }}
      />

      <div className="flex-grow">
        <Input
          className={cn(
            'w-full truncate border-none focus-visible:ring-0',
            task.isCompleted && 'opacity-40 line-through',
          )}
          defaultValue={task.title}
          onChange={(e) => debounceHandler({ ...task, title: e.target.value })}
        />
      </div>

      <Badge
        variant="outline"
        className={cn(
          'capitalize cursor-default border-transparent',
          getBadgeColor(task.priority || 'low'),
        )}
      >
        {task.priority}
      </Badge>

      <EditTask task={task} />

      <span
        className="p-1 transition duration-300 rounded-md cursor-pointer hover:bg-muted/20"
        onClick={() => handleDeleteTask(task.id!)}
      >
        <Trash size={16} />
      </span>
    </>
  );
};

export default TaskItem;
