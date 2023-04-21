import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJobsAction } from "../redux/actions";
import Job from "./Job";
import { Link } from "react-router-dom";

const JobsList = () => {
  const queryResult = useSelector(state => state.home.queryResult);
  const [jobsNumber, setJobsNumber] = useState(10);
  const [searchedJobs, setSearchedJobs] = useState(10);

  const jobs = useSelector(state => state.job.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {queryResult && queryResult.length > 0 && (
        <Card className="bg-dark text-white mt-3 position-relative">
          <CardHeader>
            <Card.Title className="mb-0">Risultati della ricerca:</Card.Title>
          </CardHeader>
          {queryResult.slice(0, searchedJobs).map(result => (
            <Job key={result._id} job={result} />
          ))}
          <Card.Footer className="d-flex justify-content-center">
            <Link
              className="card-text text-decoration-none text-white"
              onClick={() => setSearchedJobs(searchedJobs + 10)}
            >
              Visualizza altre
            </Link>
          </Card.Footer>
        </Card>
      )}
      <Card className="bg-dark text-white mt-3 position-relative">
        <CardHeader>
          <Card.Title className="mb-0">Consigliato per te</Card.Title>
          <Card.Text className="text-muted">Sulla base del tuo profilo e della cronologia e delle ricerche</Card.Text>
        </CardHeader>
        {jobs && jobs.length > 0 && jobs.slice(0, jobsNumber).map(job => <Job key={job._id} job={job} />)}
        <Card.Footer className="d-flex justify-content-center">
          <Link className="card-text text-decoration-none text-white" onClick={() => setJobsNumber(jobsNumber + 10)}>
            Visualizza altre
          </Link>
        </Card.Footer>
      </Card>
    </>
  );
};
export default JobsList;
