import { fetcher, NoHookParamsError } from '../../../../utils';
import { 
  searchNFTsOperation as operation, 
  SearchNFTsRequest, 
  SearchNFTsResponse 
} from 'moralis/common-evm-utils';
import { FetchParams } from '../../../types';
import { useCallback } from 'react';
import Moralis from 'moralis';
import useSWR from 'swr';

export const useEvmSearchNFTs = (
  request?: SearchNFTsRequest, 
  { revalidateOnMount = true, ...fetchParams }: FetchParams = {},
) => {
  const endpoint = 'evmApi/searchNFTs';
  const { deserializeResponse, serializeRequest } = operation;

  const { data, error, mutate, isValidating } = useSWR<SearchNFTsResponse>(
    [endpoint, request ? { deserializeResponse, request: serializeRequest(request, Moralis.Core) } : null], 
    fetcher, 
    { revalidateOnFocus: false, revalidateOnMount, ...fetchParams }
  );

  const fetch = useCallback((params?: SearchNFTsRequest) => {
    const fetchRequest = params ?? request;
    if (!fetchRequest) {
      throw new NoHookParamsError('useEvmNativeBalance');
    }
    return mutate(
      fetcher(endpoint, {
        deserializeResponse,
        request: serializeRequest(fetchRequest, Moralis.Core),
      }),
    );
  }, []);

  return {
    data,
    error,
    fetch,
    /**
     * @deprecated use `fetch()` instead
     */
    refetch: () => fetch(),
    isFetching: isValidating,
    /**
     * @deprecated use `isFetching` instead
     */
    isValidating,
  };
};
