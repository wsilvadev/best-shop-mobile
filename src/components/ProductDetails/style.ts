import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 34,
    marginBottom: 199,
    elevation: 3,
    padding: 19,
  },
  Image: {
    width: 200,
    height: 300,
  },
  titleContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'column',
  },
  titlePosition: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  description: {
    fontSize: 13,
    color: '#CCC',
  },
  value: {
    marginHorizontal: 23,
    color: '#89b043',
  },
});
export default style;
