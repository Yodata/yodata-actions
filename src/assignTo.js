// @flow
const assignTo = (key: string) => function (value: any) {
  return ({ ...this, [key]: value })
}

export default assignTo

