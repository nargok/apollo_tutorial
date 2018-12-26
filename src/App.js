import React from 'react';
import { Query } from 'react-apollo';
import './App.css';

import { GET_REPORITORIES_OF_ORGANIZATION } from './graphql.js';

const App = () => (
  <Query query={GET_REPORITORIES_OF_ORGANIZATION}>
    {
      ({ loading, error, data}) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error</div>

        const repositories = data.organization.repositories;
        return (
          <RepositoryList repositories={repositories}/>
        )
    }}
  </Query>
);

const RepositoryList = ({repositories}) => (
  <ul>
    {repositories.edges.map(edge => {
      const node = edge.node;
      return (
        <li key={node.id}>
          <a href={node.url} key={node.id}>{node.name}</a>
        </li>
      )})
    }
  </ul>
);

export default App;
