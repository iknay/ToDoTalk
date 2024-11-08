import { todoAppService } from '@/dataservices/todolist';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useCallback, useMemo } from 'react';
import _ from 'lodash';
import { ITask } from '@/lib/typings/ITodo';

const useTaskHooks = () => {
  const { getTasks, createTask, updateTask, deleteTask } = todoAppService();

  const queryClient = useQueryClient();

  const getAllTasks = () => {
    return useQuery({
      queryKey: ['tasks'],
      queryFn: getTasks,
      staleTime: Infinity,
    });
  };

  const handleCreateTask = async ({
    e,
    task,
  }: {
    e: React.KeyboardEvent<HTMLInputElement>;
    task: ITask;
  }) => {
    e.currentTarget.value = '';
    try {
      await createTask({
        title: task.title,
        isCompleted: task.isCompleted!,
        priority: task.priority,
        description: '',
      });
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleUpdateTask = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
      const value = e.target.value;
      await updateTask({
        id,
        title: value,
        isCompleted: false,
        priority: 'low',
      });
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
    [updateTask],
  );

  const handleDeleteTask = async (id: string) => {
    await deleteTask({ id });
    queryClient.invalidateQueries({ queryKey: ['tasks'] });
  };

  const debounceHandler = useMemo(
    () =>
      _.debounce(
        (e: React.ChangeEvent<HTMLInputElement>, id: string) =>
          handleUpdateTask(e, id),
        800,
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
