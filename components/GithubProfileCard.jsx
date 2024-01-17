import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GithubProfileCard = ({ prof }) => {
	return (
		<Card className="section-lg bg-gradient-info shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-2" lg="4">
							<img
								src={prof.avatar_url}
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
						</Col>
						<Col lg="8" className="order-lg-1">
							{/* <h2 className="text-white">Contact me using the links below:</h2> */}
							<p className="lead text-white mt-3">
								Want to discuss a project? Feel free to contact me using the links below:
							</p>
							{/* <p className="text-white mt-3">{prof.bio}</p> */}
							<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '8px' }} />
								{prof.location}
							</div>
							<SocialLinks />
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
