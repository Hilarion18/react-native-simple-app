import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  todoColumn: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    backgroundColor: "#DCDCDC"
  },
  scopeTodo: {
    padding: 50,
  },
  textTodo: {
    fontSize: 25
  },
  textScore: {
    textAlign: "right",
    fontSize: 25,
    color: "green",
    paddingRight: 10
  },
})