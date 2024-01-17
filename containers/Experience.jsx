import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Fade } from "react-reveal";

import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
	return experience && (
		<section className="section section-lg">
			<Container>
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info larger-icon">
							<FontAwesomeIcon icon={faBook} />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-info">Education</h4>
					</div>
				</div>
				<Row className="row-grid align-items-start">
					{experience.map((data, i) => {
						return <ExperienceCard key={i} data={data} />;
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Experience;
