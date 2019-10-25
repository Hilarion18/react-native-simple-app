import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  taskList: {
    padding: 20
  },
  itemList: {
    borderColor: "gray",
    borderWidth: 0.4,
    flex: 1,
    backgroundColor: "#DDDD",
    height: 90,
    maxHeight: 90
  },
  columnItem: {
    flexDirection: "column",
    maxWidth: 270,
    padding: 5,
    flex: 5
  },
  rowItem: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: 'center'
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
  }
})