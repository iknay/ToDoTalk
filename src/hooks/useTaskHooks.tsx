import { todoAppService } from '@/dataservices/todolist';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';
import _ from 'lodash';
import {
  ICreateTaskRequestPayload,
  IUpdateTaskRequestPayload,
} from '@/lib/typings/ITodo';

const useTaskHooks = () => {
  const { getTasks, createTask, updateTask, deleteTask } = todoAppService();

  const queryClient = useQueryClient();

  const { mutateAsync: createTaskMutation } = useMutation({
    mutationFn: createTask,
  });
  const { mutateAsync: updateTaskMutation } = useMutation({
    mutationFn: updateTask,
  });
  const { mutateAsync: deleteTaskMutation } = useMutation({
    mutationFn: deleteTask,
  });

  const getAllTasks = () => {
    return useQuery({
      queryKey: ['tasks'],
      queryFn: getTasks,
      staleTime: Infinity,
    });
  };

  const handleCreateTask = async ({
    task,
  }: {
    task: ICreateTaskRequestPayload;
  }) => {
    try {
      await createTaskMutation({
        title: task.title!,
        isCompleted: false,
        priority: task.priority! || 'low',
        status: 'todo',
        description: '',
      });
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleUpdateTask = useCallback(
    async ({ task }: { task: IUpdateTaskRequestPayload }) => {
      await updateTaskMutation({
        id: task.id!,
        title: task.title!,
        isCompleted: task.isCompleted || false,
        priority: task.priority || 'low',
        status: task.status || 'todo',
      });
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
    [updateTask],
  );

  const handleDeleteTask = async (id: string) => {
    await deleteTaskMutation({ id });
    queryClient.invalidateQueries({ queryKey: ['tasks'] });
  };

  const debounceHandler = useMemo(
    () =>
      _.debounce(
        (task: IUpdateTaskRequestPayload) => handleUpdateTask({ task }),
        500,
      ),
    [handleUpdateTask],
  );

  return {
    getAllTasks,
    handleCreateTask,
    handleUpdateTask,
    handleDeleteTask,
    debounceHandler,
  };
};

export default useTaskHooks;
