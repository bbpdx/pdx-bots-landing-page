
export default function RenderIf({ children, isTrue }: any) {
  return (isTrue ? children : null)
}