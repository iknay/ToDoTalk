import { userSchema } from '@/schema/user';
import { z } from 'zod';

export type IUser = z.infer<typeof userSchema>;
