import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  taskList: {
    padding: 20
  },
  itemList: {
    borderColor: "gray",
    borderWidth: 0.4,
  },
  columnItem: {
    flexDirection: "column",
    maxWidth: 270
  },
  rowItem: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  titleItem: {
    fontSize: 18,
  },
  descItem: {
    fontSize: 14
  },
  iconItem: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    borderColor: "gray",
    borderWidth: 0.7,
    padding: 5.5,
    borderRadius: 40
  },
})