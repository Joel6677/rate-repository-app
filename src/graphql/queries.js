import { gql } from 'apollo-boost';

import { REPOSITORY_BASE_FIELDS, USER_BASE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $first: Int, $after: String, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, first: $first, after: $after, searchKeyword: $searchKeyword) {
      edges {
        node {
          ...RepositoryBaseFields
          ratingAverage
          reviewCount
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
  ${REPOSITORY_BASE_FIELDS}
`;


export const GET_AUTHORIZED_USER = gql`
  query AuthorizedUser(
    $includeReviews: Boolean = false ) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            user {
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
      }
    }
  }
`;


export const GET_REPOSITORY = gql`
  query repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryBaseFields
      ratingAverage
      reviewCount
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            repository {
              fullName
            }
            repositoryId
            user {
              ...UserBaseFields
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
      }
    }
  }
  ${REPOSITORY_BASE_FIELDS}
  ${USER_BASE_FIELDS}
`;
