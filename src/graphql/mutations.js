import { gql } from 'apollo-boost';

import { USER_BASE_FIELDS } from './fragments';

export const AUTHORIZE = gql`
  mutation authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
      user {
        ...UserBaseFields
      }
    }
  }

  ${USER_BASE_FIELDS}
`;


export const CREATE_REVIEW = gql`
  mutation createReview($ownerName: String!, $repositoryName: String!,
    $rating: Int!, $text: String) {
    createReview(review: { repositoryName: $repositoryName, ownerName: $ownerName,
      rating: $rating, text: $text }) {
        repositoryId,
    }
  }
`;

export const SIGN_UP = gql`
  mutation createUser($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      username
    }
  }
`;