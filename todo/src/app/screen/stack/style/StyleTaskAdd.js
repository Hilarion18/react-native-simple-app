import { StyleSheet } from "react-native"

export default StyleSheet.create({
  input: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
    justifyContent: "space-between",
    flexDirection: "column"
  },
  titleInput: {
    borderWidth: 1,
    borderColor: "gray"
  },
  contentInput: {
    borderWidth: 1,
    borderColor: "gray"
  },
  pointInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: 60,
    height: 40
  },
  text: {
    padding: 3,
    fontSize: 17
  },
  borderSubmit: {
    padding: 10,
    backgroundColor: "#2F94EC",
    // justifyContent: "center",
  },
  viewSubmit: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10
  },
  submit: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }
})