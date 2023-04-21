import { Button, Card } from "react-bootstrap";
import { IoMdCloseCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const JobsBanner = () => {
    return (
        <Card className="mt-3 text-white bg-dark">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Title>
                        Ricerche di lavoro suggerite
                    </Card.Title>
                    <Button variant="transparent border-0 py-1 px-2 rounded-circle">
                        <IoMdCloseCircle className="fs-3" style={{ color: "white" }} />
                    </Button>
                </div>
                <div>
                    <Button variant="outline-primary rounded-pill mb-2 me-2">
                        <FaSearch className="me-2"/>
                        junior front-end developer
                    </Button>
                    <Button variant="outline-primary rounded-pill mb-2 me-2">
                        <FaSearch className="me-2"/>
                        junior back-end developer
                    </Button>
                    <Button variant="outline-primary rounded-pill mb-2 me-2">
                        <FaSearch className="me-2"/>
                        full-stack developer
                    </Button>
                    <Button variant="outline-primary rounded-pill mb-2 me-2">
                        <FaSearch className="me-2"/>
                        hr
                    </Button>
                    <Button variant="outline-primary rounded-pill mb-2 me-2">
                        <FaSearch className="me-2"/>
                        web designer
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}
export default JobsBanner;