export type UnifiedQueryState<T> = {
  data: T[];
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
};

export type UnifiedInfiniteQueryState<T> = UnifiedQueryState<T> & {
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
};
