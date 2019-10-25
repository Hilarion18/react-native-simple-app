import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  buttonList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
    paddingTop: 15,
  },
  addButton: {
    color: "red",
    marginLeft: 40,
    justifyContent: "space-evenly"
  },
  buttonTask: {
    color: "red",
    overflow: 'hidden'
  },
  buttonGreen: {
    color: "green",
  },
  list: {
    marginBottom: 20
  },
  menuWrap: {
    borderRadius: 20,
  },
  myButton: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#23b11b',
  },
  scopeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
})