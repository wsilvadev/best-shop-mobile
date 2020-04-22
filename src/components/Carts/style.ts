import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    height: 100,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  Image: {
    margin: 10,
    width: 60,
    height: 90,
  },
  titleContainer: {
    flexDirection: 'column',
    marginLeft: 5,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  amount: {
    justifyContent: 'center',
    borderColor: '#ddd',
    width: 40,
    height: 30,
    borderWidth: 1,
    fontSize: 9,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  amountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  delete: {
    margin: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
