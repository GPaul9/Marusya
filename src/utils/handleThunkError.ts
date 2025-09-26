import { AxiosError } from 'axios';

export function handleThunkError<T>(
  err: unknown,
  rejectWithValue: (value: { error: string }) => T): T {
  const error = err as AxiosError<{ error: string }>;

  if (error.response?.data?.error) {
    return rejectWithValue({ error: error.response.data.error });
  }

  return rejectWithValue({ error: 'Неизвестная ошибка' });
}
