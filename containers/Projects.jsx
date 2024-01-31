import React from "react";

import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import { Fade } from "react-reveal";
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Projects = () => {
	return projects && (
		<section className="section section-lg">
			<Container>
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<FontAwesomeIcon icon={faProjectDiagram} />
						</div>
					</div>
						<div className="pl-4">
							<h4 className="display-3 text-info">Projects</h4>
						</div>
							<h5 className="text-center">These projects are deployed on Render.com and spin down with inactivity. Once you click Demo, you may have to wait a while for them to load as the servers wake up.</h5>
					</div>
				<Row className="row-grid align-items-center">
					{projects.map((data, i) => {
						return <ProjectsCard key={i} data={data} />;
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Projects;
