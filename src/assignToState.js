const assignToState = key => function (value) {
  this.setState({ ...this.state, [key]: value })
}
export default assignToState