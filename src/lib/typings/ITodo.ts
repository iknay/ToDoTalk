import {
  createTaskRequestPayloadSchema,
  createTaskResponsePayloadSchema,
  deleteTaskRequestPayloadSchema,
  deleteTaskResponsePayloadSchema,
  getTaskRequestPayloadSchema,
  getTaskResponsePayloadSchema,
  getTasksResponsePayloadSchema,
  taskSchema,
  updateTaskRequestPayloadSchema,
  updateTaskResponsePayloadSchema,
} from '@/schema/todo';
import { z } from 'zod';

export type ITask = z.infer<typeof taskSchema>;

export type IGetTasksResponsePayload = z.infer<
  typeof getTasksResponsePayloadSchema
>;

export type ICreateTaskRequestPayload = z.infer<
  typeof createTaskRequestPayloadSchema
>;

export type ICreateTaskResponsePayload = z.infer<
  typeof createTaskResponsePayloadSchema
>;

export type IGetTaskRequestPayload = z.infer<
  typeof getTaskRequestPayloadSchema
>;

export type IGetTaskResponsePayload = z.infer<
  typeof getTaskResponsePayloadSchema
>;

export type IUpdateTaskRequestPayload = z.infer<
  typeof updateTaskRequestPayloadSchema
>;

export type IUpdateTaskResponsePayload = z.infer<
  typeof updateTaskResponsePayloadSchema
>;

export type IDeleteTaskRequestPayload = z.infer<
  typeof deleteTaskRequestPayloadSchema
>;

export type IDeleteTaskResponsePayload = z.infer<
  typeof deleteTaskResponsePayloadSchema
>;
