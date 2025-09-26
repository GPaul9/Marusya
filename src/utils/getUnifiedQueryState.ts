import { UnifiedInfiniteQueryState, UnifiedQueryState } from '@/types/unifiedQuery';
import { UseQueryResult, UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query';

export const isInfiniteQuery = <T>(
  query: UseQueryResult<T[]> | UseInfiniteQueryResult<InfiniteData<T[]>>
): query is UseInfiniteQueryResult<InfiniteData<T[]>> => {
  return (
    typeof query === 'object' &&
    query !== null &&
    'fetchNextPage' in query &&
    typeof (query as any).fetchNextPage === 'function'
  )
};

export function getUnifiedQueryState<T>(
  query: UseQueryResult<T[]>
): UnifiedQueryState<T>;
export function getUnifiedQueryState<T>(
  query: UseInfiniteQueryResult<InfiniteData<T[]>>
): UnifiedInfiniteQueryState<T>;

export function getUnifiedQueryState<T>(
  query: UseQueryResult<T[]> | UseInfiniteQueryResult<InfiniteData<T[]>>
): UnifiedQueryState<T> | UnifiedInfiniteQueryState<T> {
  let data: T[] = [];

  const baseState: UnifiedQueryState<T> = {
    data,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };

  if (query.data) {
    if (isInfiniteQuery(query)) {
      baseState.data = query.data.pages.flat();

      return {
      ...baseState,
      fetchNextPage: query.fetchNextPage,
      hasNextPage: query.hasNextPage,
      isFetchingNextPage: query.isFetchingNextPage,
      }
    } else {
      baseState.data = query.data;
      return baseState;
    }
  }
  return baseState;
};
