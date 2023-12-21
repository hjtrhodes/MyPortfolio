import React from "react";

import { Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
	return (
		<div className="btn-wrapper text-lg">
			{socialLinks.gmail && (
				<Button
					className="btn-icon-only rounded-circle ml-1 bg-white"
					color="gmail"
					href={socialLinks.gmail}
					rel="noopener"
					aria-label="Gmail"
					target="_blank"
					onClick={() => window.location.href = 'mailto:hjtrhodes@gmail.com'}
				>
					<span className="btn-inner--icon">
						<i className="fa fa-envelope" />
					</span>
				</Button>
			)}
			{socialLinks.linkedin && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="twitter"
					rel="noopener"
					aria-label="Linkedin"
					href={socialLinks.linkedin}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-linkedin" />
					</span>
				</Button>
			)}
			{socialLinks.github && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="github"
					href={socialLinks.github}
					rel="noopener"
					aria-label="Github"
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-github" />
					</span>
				</Button>
			)}
		</div>
	);
};

export default SocialLinks;
