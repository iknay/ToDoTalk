import { z } from 'zod';

export const getTasksResponsePayloadSchema = z.array(
  z.object({
    id: z.string(),
    createdAt: z.string(),
    isCompleted: z.boolean(),
    description: z.string(),
    priority: z.string(),
  }),
);

export const createTaskRequestPayloadSchema = z.object({
  isCompleted: z.boolean(),
  description: z.string(),
  priority: z.string(),
});

export const createTaskResponsePayloadSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  isCompleted: z.boolean(),
  description: z.string(),
  priority: z.string(),
});

export const getTaskRequestPayloadSchema = z.object({
  taskId: z.string(),
});

export const getTaskResponsePayloadSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  isCompleted: z.boolean(),
  description: z.string(),
  priority: z.string(),
});

export const updateTaskRequestPayloadSchema = z.object({
  isCompleted: z.boolean(),
  description: z.string(),
});

export const updateTaskResponsePayloadSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  isCompleted: z.boolean(),
  description: z.string(),
  priority: z.string(),
});

export const deleteTaskRequestPayloadSchema = z.object({
  id: z.string(),
});

export const deleteTaskResponsePayloadSchema = z.object({
  message: z.string(),
});
