// eslint-disable
// this is an auto generated file. This will be overwritten

export const getReason = `query GetReason($id: ID!) {
  getReason(id: $id) {
    id
    reason
    name
    timestamp
  }
}
`;
export const listReasons = `query ListReasons(
  $filter: ModelReasonFilterInput
  $limit: Int
  $nextToken: String
) {
  listReasons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      reason
      name
      timestamp
    }
    nextToken
  }
}
`;
