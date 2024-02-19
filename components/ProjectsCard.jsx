import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectsCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade bottom duration={2000} >
				<Card className="shadow-lg--hover shadow mt-4">
					<CardBody>
						<div className="d-flex px-3">
							<div className="pl-4">
								<h3>{data.name}</h3>
									<img
										src={data.img}
										style={{
											objectFit: "cover",
											marginLeft: "auto",
											marginRight: "auto",
											width: "100%",
											height: "15rem",  // Set height to auto for responsiveness
											borderRadius: "10%",
											boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
										}}
										className="shadow mb-3"
										alt={data.companylogo}
									/>
							{data.mov ? (
								<>
									<p className="text-center"><strong>Functionality Demo Video</strong></p>
									<div className="video-container">
										<iframe
											title="Bald Bible Demo"
											width="100%"
											height="315"
											src={`https://www.youtube.com/embed/${data.mov}`}
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										></iframe>
									</div>
								</>
							) : null}

								<p className="description mt-3">{data.desc}</p>
								{data.github ? (
									<Button
										className="btn-icon mb-2 w-100"
										color="github"
										href={data.github}
										target="_blank"
										rel="noopener"
										aria-label="Github"
									>
										<span className="btn-inner--icon">
											More information and Source code
										</span>
									</Button>
								) : null}
								{data.link ? (
									<Button
										className="btn-icon mb-2 w-100"
										color="success"
										href={data.link}
										target="_blank"
										rel="noopener" aria-label="Twitter"
									>
										<span className="btn-inner--icon">
										</span>
										<span className="nav-link-inner--text ml-1">
											See the site Live
										</span>
									</Button>
								) : null}
							</div>
						</div>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ProjectsCard;
