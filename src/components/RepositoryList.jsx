import React, { useState } from 'react';
import { useHistory } from 'react-router-native';
import { FlatList, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});


const ItemSeparator = () => <View style={styles.separator} />;

const TouchableItem = ({item}) => {
  const history = useHistory();
  
  return (
      <View>
      <TouchableOpacity onPress={()=>history.push(`/repositories/${item.id}`)}><RepositoryItem repository={item}/></TouchableOpacity>
      </View>
  );
};

export const RepositoryListHeader = ({setSortingSystem, sortingSystem, setFilter, filter}) => {
  return (
    <View>
      <RNPickerSelect
        onValueChange={(value) => setSortingSystem(value)}
        items={[
          { label: 'Latest repositories', value: 'latest' },
          { label: 'Highest rated repositories', value: 'highest' },
          { label: 'Lowest rated repositories', value: 'lowest' },
        ]}
        value={sortingSystem}
      />
      <TextInput 
            style={{ height: 50, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setFilter(text)}
            value={filter}
      />
    </View>

  );
};


export class RepositoryListContainer extends React.Component {

  renderHeader = () => {
    const props = this.props;

    return (
      <RepositoryListHeader
      setSortingSystem={props.setSortingSystem}
      sortingSystem={props.sortingSystem} 
      filter={props.filter} 
      setFilter={props.setFilter}/>
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.repositories ? this.props.repositories.edges.map(edge => edge.node) : []}
        ListHeaderComponent={this.renderHeader}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => ( <TouchableItem item={item} />)}
        ItemSeparatorComponent={ItemSeparator}
      />
    );
  }
}

const RepositoryList = () => {
  const [sortingSystem, setSortingSystem] = useState(null);
  const [filter, setFilter] = useState('');
  const [searchKeyword] = useDebounce(filter, 500);
  const { repositories, fetchMore } = useRepositories(sortingSystem, searchKeyword);


  const onEndReach = () => {
    fetchMore();
  };

  return <RepositoryListContainer
    repositories={repositories}
    setSortingSystem={setSortingSystem}
    sortingSystem={sortingSystem}
    setFilter={setFilter} filter={filter}
    onEndReach={onEndReach}
    />;
};

export default RepositoryList;
