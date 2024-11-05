import { useAxios } from '@/hooks/useAxios';
import {
  ICreateTaskRequestPayload,
  ICreateTaskResponsePayload,
  IGetTaskRequestPayload,
  IGetTaskResponsePayload,
  IGetTasksResponsePayload,
  IUpdateTaskRequestPayload,
  IUpdateTaskResponsePayload,
  IDeleteTaskRequestPayload,
  IDeleteTaskResponsePayload,
} from '@/lib/typings/ITodo';
import { TODO_APP } from '@/shared/endpoints';

const { GET, POST, PUT, DELETE } = useAxios();

export const todoAppService = () => {
  const getTasks = async () => {
    const response = await GET<IGetTasksResponsePayload>({
      url: TODO_APP.GET_TASKS,
    });
    return response.data;
  };

  const createTask = async (payload: ICreateTaskRequestPayload) => {
    const response = await POST<ICreateTaskResponsePayload>({
      url: TODO_APP.CREATE_TASK,
      data: payload,
    });
    return response.data;
  };

  const getTask = async (payload: IGetTaskRequestPayload) => {
    const response = await GET<IGetTaskResponsePayload>({
      url: TODO_APP.GET_TASK,
      params: payload,
    });
    return response.data;
  };

  const updateTask = async (payload: IUpdateTaskRequestPayload) => {
    const response = await PUT<IUpdateTaskResponsePayload, any>({
      url: `${TODO_APP.UPDATE_TASK}/${payload.id}`,
      data: payload,
    });
    return response.data;
  };

  const deleteTask = async (payload: IDeleteTaskRequestPayload) => {
    const response = await DELETE<IDeleteTaskResponsePayload, any>({
      url: `${TODO_APP.DELETE_TASK}/${payload.id}`,
    });
    return response.data;
  };

  return { getTasks, createTask, getTask, updateTask, deleteTask };
};
