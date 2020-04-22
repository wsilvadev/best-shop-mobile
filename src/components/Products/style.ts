import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 2,
    margin: 10,
    width: 190,
    borderRadius: 10,
    padding: 5,
  },
  Image: {
    margin: 10,
    width: 190,
    height: 300,
  },
  titleContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'column',
    marginLeft: 5,
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
    marginTop: 5,
    color: '#89b043',
    fontSize: 20,
  },
});
export default style;
