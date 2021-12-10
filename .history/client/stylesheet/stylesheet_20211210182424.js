import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1, alignItems: 'center', justifyContent: 'center', padding: "5%"
  },
  text: { fontSize: 24, fontWeight: '700' },
  itemStyle: { marginVertical: 10 },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    alignItems: 'center',
  }
})