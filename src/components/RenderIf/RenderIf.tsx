
const RenderIf = ({ children, isTrue }: any) => {
  return (isTrue ? children : null)
}

export default RenderIf