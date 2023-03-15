import { MockScenarios } from '@moralisweb3/test-utils';

export const mockGetNFTsByCreators = MockScenarios.create(
  {
    method: 'get',
    name: 'mockGetNFTsByCreators',
    url: `/nfts/creators`,
    getParams: ({ req }) => ({
      creatorAddresses: req.url.searchParams.get('creator_addresses[]'),
      limit: req.url.searchParams.get('limit'),
    }),
  },
  [
    {
      condition: {
        creatorAddresses: '0xe9fa81b90a846ab2737e88592a4e207e3f503bfac7e5774a4a4bc93b439258f0',
        limit: '2',
      },
      response: {
        cursor: 'c.u.r.s.o.r',
        hasNextPage: true,
        result: [
          {
            collection_data_id_hash: 'bd1e7fef8fd8d3ff8351eb564541f43cdaeaff93bbefd4ed402af66e9d70bedc',
            collection_name: 'collName552',
            creator_address: '0xe9fa81b90a846ab2737e88592a4e207e3f503bfac7e5774a4a4bc93b439258f0',
            default_properties: {},
            description: 'brawlstars',
            description_mutable: false,
            largest_property_version: '0',
            last_transaction_timestamp: '2022-10-20T08:51:16.000Z',
            last_transaction_version: '5563252',
            maximum: '9007199254740991',
            maximum_mutable: false,
            metadata_uri: 'https://i.postimg.cc/C1CdcRcL/B8-AE2-EBE-7-B60-46-C4-A96-E-958-D9159-D15-A.jpg',
            name: 'popitys',
            payee_address: '0xe9fa81b90a846ab2737e88592a4e207e3f503bfac7e5774a4a4bc93b439258f0',
            properties_mutable: false,
            royalty_mutable: false,
            royalty_points_denominator: '0',
            royalty_points_numerator: '0',
            supply: '1',
            token_data_id_hash: '301304744b268b2a4ed57333cd8715a84d0f503543ba981d20e6df81d0f46a8b',
            uri_mutable: false,
          },
          {
            collection_data_id_hash: '4e41e0f1b888051ac98acf6879eeabdca2c74778a883366f60a04e62cd27a1b1',
            collection_name: 'collName23',
            creator_address: '0xe9fa81b90a846ab2737e88592a4e207e3f503bfac7e5774a4a4bc93b439258f0',
            default_properties: {},
            description: 'girl',
            description_mutable: false,
            largest_property_version: '0',
            last_transaction_timestamp: '2022-10-20T19:16:58.000Z',
            last_transaction_version: '6347950',
            maximum: '9007199254740991',
            maximum_mutable: false,
            metadata_uri: 'https://i.postimg.cc/FHnsybnZ/1528473855169978071.jpg',
            name: 'mem',
            payee_address: '0xe9fa81b90a846ab2737e88592a4e207e3f503bfac7e5774a4a4bc93b439258f0',
            properties_mutable: false,
            royalty_mutable: false,
            royalty_points_denominator: '0',
            royalty_points_numerator: '0',
            supply: '1',
            token_data_id_hash: '4a923c9ab0da0a69f6ac8aac5f16c35226c9ea776648f84c923dbe4f6a03ca75',
            uri_mutable: false,
          },
        ],
      },
    },
  ],
);