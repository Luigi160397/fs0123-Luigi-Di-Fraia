import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import HomeSidebar from "./HomeSidebar";
import JobsBanner from "./JobsBanner";
import JobsList from "./JobsList";

const Jobs = () => {
    return(
        <Container className="px-5">
      <Row>
        <Col lg={2}>
          <HomeSidebar />
        </Col>
        <Col lg={6}>
          <JobsBanner/>
          <JobsList/>
        </Col>
        <Col lg={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
    );
}

export default Jobs;