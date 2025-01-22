import { z } from 'zod';

export const getTasksResponsePayloadSchema = z.array(
  z.object({
    id: z.string(),
    createdAt: z.string(),
    isCompleted: z.boolean(),
    title: z.string(),
    priority: z.string(),
    status: z.string(),
    description: z.string(),
  }),
);

export const createTaskRequestPayloadSchema = z.object({
  isCompleted: z.boolean(),
  title: z.string(),
  priority: z.string(),
  status: z.string(),
  description: z.string().optional(),
});

export const createTaskResponsePayloadSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  isCompleted: z.boolean(),
  title: z.string(),
  priority: z.string(),
  description: z.string(),
});

export const getTaskRequestPayloadSchema = z.object({
  id: z.string(),
});

export const getTaskResponsePayloadSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  isCompleted: z.boolean(),
  title: z.string(),
  priority: z.string(),
  description: z.string(),
});

export const updateTaskRequestPayloadSchema = z.object({
  id: z.string(),
  isCompleted: z.boolean(),
  status: z.string(),
  title: z.string(),
  priority: z.string(),
  description: z.string().optional(),
});

export const updateTaskResponsePayloadSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  isCompleted: z.boolean(),
  status: z.string(),
  title: z.string(),
  priority: z.string(),
  description: z.string(),
});

export const deleteTaskRequestPayloadSchema = z.object({
  id: z.string(),
});

export const deleteTaskResponsePayloadSchema = z.object({
  message: z.string(),
});

export const taskSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  isCompleted: z.boolean(),
  title: z.string(),
  priority: z.string(),
  status: z.string(),
  description: z.string(),
});
