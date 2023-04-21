import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import HomeSidebar from "./HomeSidebar";
import Post from "./Post";
import AddPost from "./AddPost";

const Home = () => {
  return (
    <Container className="px-5">
      <Row>
        <Col lg={2}>
          <HomeSidebar />
        </Col>
        <Col lg={6}>
          <AddPost />
          <Post />
        </Col>
        <Col lg={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
