import {style} from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import React from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {search} from '../../services/services';
import Card from '../Card';
import Error from '../Error';

const Search = ({navigation}) => {
  const [text, onChangeText] = React.useState();
  const [searchResults, setSearchResults] = React.useState();
  const [error, setError] = React.useState(false);
  const onSubmit = query => {
    search(query, 'movie')
      .then(data => {
        setSearchResults(data);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <React.Fragment>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Search movie or TV show"
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              onSubmit(text);
            }}>
            <Icon name={'search'} size={40} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchItems}>
          {/** Searched item results **/}
          {searchResults && searchResults.length > 0 && (
            <FlatList
              numColumns={3}
              data={searchResults}
              renderItem={({item}) => (
                <Card navigation={navigation} item={item} />
              )}
              keyExtractor={item => item.id}
            />
          )}
          {/** When no matching results **/}
          {searchResults && searchResults.length == 0 && (
            <View style={[styles.empty, {paddingTop: 20}]}>
              <Text>No results matching your criteria</Text>
              <Text>Try again with different keywords</Text>
            </View>
          )}
          {/** No search submitted yet **/}
          {!searchResults && (
            <View style={[styles.empty, {paddingTop: 20}]}>
              <Text>Type something to start searching</Text>
            </View>
          )}
          {/** When an error occured **/}
          {error && <Error />}
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    height: 50,
    borderWidth: 0.5,
    padding: 8,
  },
  container: {
    padding: 10,
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight: 10,
  },
  searchItems: {
    padding: 5,
  },
});

export default Search;
