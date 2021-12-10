
const styles = StyleSheet.create({
  screen: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  text: { fontSize: 16, fontWeight: '700' },
  itemStyle: { marginVertical: 10 },
})

export default AboutScreen = () => {
  return (
    <View style={styles.screen} >
      <Text style={styles.text}>About</Text>
    </View>
  )
}