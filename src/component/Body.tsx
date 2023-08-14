import Sidebar from "./Sidebar";
import  Container from "react-bootstrap/Container";


interface BodyProps {
    sidebar: boolean
}

export default function Body({sidebar}: BodyProps) {
  return (
    <Container>
        {sidebar && <Sidebar />}
        </Container>
  )
}
