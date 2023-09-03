//why it needs to be props
interface Props {
    title:string
}
export default function Title(props:Props) {
  return (
    <h1 id="title">{props.title}</h1>
  )
}
