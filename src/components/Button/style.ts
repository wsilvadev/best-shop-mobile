import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  buttonLogin: {
    alignItems: 'center',
    backgroundColor: '#00838a',
    borderBottomRightRadius: 29,
    borderTopRightRadius: 29,
    height: 50,
    justifyContent: 'center',
    width: 150,
    marginTop: 10,
    right: 96,
  },
  textLogin: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'sans-serif',
  },
  buttonRegister: {
    alignItems: 'center',
    borderColor: '#00838a',
    borderBottomLeftRadius: 29,
    borderTopLeftRadius: 29,
    borderTopWidth: 0.4,
    borderWidth: 2,
    height: 50,
    justifyContent: 'center',
    width: 150,
    marginTop: 20,
    alignSelf: 'flex-end',
    left: 26,
  },
  textRegister: {
    color: '#00838a',
    fontSize: 23,
    fontFamily: 'sans-serif',
  },
  buttonCart: {
    alignItems: 'center',
    backgroundColor: '#00838a',
    height: 50,
    justifyContent: 'center',
    padding: 30,
  },
});

export default styles;
