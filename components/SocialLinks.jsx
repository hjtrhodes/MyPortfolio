import React from "react";
import { Button } from "reactstrap";
import { socialLinks } from "../portfolio";
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

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
                        <FaEnvelope />
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
                        <FaLinkedin />
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
                        <FaGithub />
                    </span>
                </Button>
            )}
        </div>
    );
};

export default SocialLinks;

