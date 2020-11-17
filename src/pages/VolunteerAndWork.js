import React from "react";
import NavBar from "../components/NavBar";
import VolunteerAndWorkHeader from "../components/VolunteerAndWorkHeader";
import VolunteerAndWorkCard from "../components/VolunteerAndWorkCard";
import theory6 from "../images/theory6.jpg";
import bh from "../images/bh.jpg";
import leaders from "../images/leaders.jpeg";
import studentVote from "../images/studentVote.jpg";
import lib from "../images/lib.jpg";
import lynxWorkshops from "../images/lynxWorkshops.jpeg";
import camp from "../images/camp.jpg";
import global from "../images/global.jpeg";
import Footer from "../components/Footer";

export default function VolunteerAndWork() {
  const volunteerAndWorkCards = [
    {
      title: "Premamus - Developer Intern",
      date: "August 2020",
      description:
        "Premamus fulfills the software development needs for startups across industries. As an intern, I developed order-dispatchment and sustainable alternative-suggestion software for BringHome, a Premamus client's grocery delivery mobile and web app, using MongoDB, Node.js, and React.",
      image: bh,
      link: "https://www.bringhome.ca/",
    },

    {
      title:
        "FIRST Robotics Team 6378 Robotics Workshops - Lead Organizer and Mentor",
      date: "November 2018",
      description:
        "I led the facilitation of this series of LEGO Mindstorms Workshops for middle- and high-school students at my local public library with my FRC Team’s Outreach Subteam. I created the curriculum and lessons from scratch, and was the lead mentor at the workshops.",
      image: lynxWorkshops,
    },
    {
      title:
        "The Ontario Science Centre - Summer Day Camp - Recreational Programs Volunteer",
      date: "May - July 2018",
      description:
        "I facilitated daily science and critical-thinking activities and lessons as a counselor at this  youth summer camp, hosted at the fascinating Ontario Science Centre.",
      image: camp,
      link: "https://www.ontariosciencecentre.ca/Camp/summer/",
    },
    {
      title: "FIRST Robotics Team 1241 Robotics Workshops - Mentor",
      date: "July - August 2018",
      description:
        "I mentored at a local FRC Team’s introductory robotics workshops, leading various LEGO Mindstorms programming and building activities.",
      image: theory6,
    },
    {
      title: "Global Kids Convent - Volunteer Teaching Assistant",
      date: "July 2017",
      description:
        "I helped introduce math and science to the early curriculum of an NGO School in Nagpur, India, by incorporating problem-solving into the daily activities and lessons of the underprivileged students.",
      image: global,
    },
    {
      title: "The Story Garden - “Leaders for Readers” Program Leader",
      date: "September - December 2017",
      description:
        "As a Leader, I was paired with a young reader who I guided through weekly reading and literary-analysis sessions.",
      image: leaders,
      link: "https://thestorygarden.ca/leaders-for-readers",
    },

    {
      title:
        "Teen Advisory Group (TAG) - Churchill Meadows Public Library - Member",
      date: "December 2017 - June 2018",
      description:
        "I planned and hosted events at the local public library as a member of the youth council, including Movie and Game Nights to bring the community together.",
      image: lib,
    },
    {
      title: "Ruth Thompson Middle School Student Vote - Organizer",
      date: "May - June 2018",
      description:
        "I volunteered at the middle school I attended to organize the Student Vote, creating articles and other promotions for the initiative.",
      image: studentVote,
      link: "https://studentvote.ca/",
    },
  ];
  return (
    <div>
      <NavBar />
      <VolunteerAndWorkHeader />
      <div className="mb-2 mx-auto py-4 px-8 md:px-0 w-full md:max-w-2xl xl:max-w-6xl">
        {volunteerAndWorkCards.map((volunteerAndWorkInfo, index) => (
          <VolunteerAndWorkCard
            key={volunteerAndWorkInfo.title}
            index={index}
            volunteerAndWorkInfo={volunteerAndWorkInfo}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
