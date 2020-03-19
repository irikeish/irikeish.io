import React from "react";
import resume from "../../assets/image/resume.svg";
import git from "../../assets/image/github.svg";
import linkedin from "../../assets/image/linkedin.svg";
import resume_pdf from "../../assets/resume .pdf";
import twitter from "../../assets/image/twitter.svg";
import email from "../../assets/image/email.svg";

const SOCIALS = [
    {
        ico:resume,
        label:"Resume",
        link:resume_pdf
    },
    {
        ico:email,
        label:email,
        link:"mailto:kumar.atish.br@gmail.com"
    },
    {
        ico:git,
        label:"Github",
        link:"https://github.com/irikeish"
    },
    {
        ico:linkedin,
        label:"Linkedin",
        link:"https://www.linkedin.com/in/atish-kumar-b92446126"
    },{
        ico:twitter,
        label:"Twitter",
        link:"https://twitter.com/Irikeish?s=03"
    }
];

export default class Profile extends React.Component{

    render() {
        return (<div className={"profile-wrapper"}>
                <div className={"mt8 fsb"}>
                    I don't know what I like, I get to try everything.
                </div>
                <div className={"mt8"}>Atish Kumar</div>
            <div>
                <div className={"mt8"}>alias A30='Atish Kumar'</div>
                <div className={"mt8"}>alias IRIKEISH='A30'</div>
            </div>
            <div className={"social-wrapper"}>
                {
                    SOCIALS.map(social=>{
                        const {ico,label,link} = social;
                        return  <div className={"pl8 pr8 pt8 pb8"} >
                            <a  href={link} target={"_blank"} className={"tooltip"}>
                                <img className={"social-icon tooltip"} src={ico} alt={label}/>
                                <span className="tooltip-text">{label}</span>
                            </a></div>;
                    })
                }

            </div>
        </div>)
    }

}