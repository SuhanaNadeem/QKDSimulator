import React from "react";
import NavBar from "../components/NavBar";
import ActivitiesHeader from "../components/ActivitiesHeader";
import ActivityCard from "../components/ActivityCard";
import test from "../images/1.jpg";
import tks from "../images/tks.jpg";
import robotics from "../images/robotics.jpg";
import shad from "../images/shad.jpg";
import qcsys from "../images/qcsys.jpg";
import breakthrough from "../images/breakthrough.png";
import tutor from "../images/tutor.jpg";
import code from "../images/code.jpg";
import math from "../images/math.jpg";
import french from "../images/french.jpg";
import reach from "../images/reach.jpg";
import mun from "../images/mun.jpg";
import tableTennis from "../images/tableTennis.jpg";
import green from "../images/green.jpg";
import Footer from "../components/Footer";

export default function Activities() {
  const activityCards = [
    {
      title: "Quantum Computing School for Young Students (QCSYS)",
      date: "August 2020",
      description:
        "Hosted by the largest quantum research institution in Canada, University of Waterloo’s Institute for Quantum Computing, QCSYS is a rigorous, selective program centered around Quantum Computing and Cryptography. By attending QCSYS, I delved into quantum theories and applications through lectures, labs, and problem sets, guided by researchers and developers.",
      image: qcsys,
      link:
        "https://uwaterloo.ca/institute-for-quantum-computing/programs/qcsys",
    },
    {
      title:
        "FIRST Robotics Team 6378 - Core/Drive Team Member, Design Captain, Outreach Captain",
      date: "September 2019 - June 2020",
      description:
        "From building the robot to being on the field as a human player during matches, I held many responsibilites on Team 6378 each season of this international high school robotics competition. My primary roles were leading the Design Subteam in prototyping and 3D-designing our robot in Autodesk Inventor, as well as organizing the awards committee, facilitation of community outreach events, and communication within and beyond the team as Outreach Captain. This experience was truly a highlight of my high school career.",
      image: robotics,
      link: "https://frc6378.weebly.com/",
    },
    {
      title: "SHAD at York University",
      date: "July 2019",
      description:
        "SHAD is an accredited program which invites ambitious students from across Canada to spend one month at a Canadian university to learn about STEM and entrepreneurship. At SHAD York University, I experienced lectures from science and technology professionals, as well as led the prototyping and pitching to Angel Investors of ThinkTwice, a mobile app that suggests sustainable alternatives to grocery products.",
      image: shad,
      link: "https://www.shad.ca/",
    },

    {
      title: "The Knowledge Society Waterloo - Innovator",
      date: "October 2018 - March 2019",
      description:
        "TKS is an accelerator program for curious students centered around a thorough exploration of emerging technologies. As an Innovator at TKS Waterloo, I learned about technologies like Nanotechnology and Blockchain from tech and business mentors. I provided Artificial Intelligence-based solutions for TKS Challenges, including those in partnership with Wealthsimple and Walmart.",
      image: tks,
      link: "https://tks.world/",
    },
    {
      title: "Khan Academy’s Breakthrough Junior Challenge",
      date: "June 2019",
      description:
        "This global competition challenges students to explain a complex Physics, Life Sciences, or Mathematics topic in a short video. My video entry explained the fundamentals of Quantum Mechanics in an entertaining and easy-to-understand manner.",
      image: breakthrough,
      link: "https://youtu.be/XCrknZyKBlQ",
    },
    {
      title: "Science Peer Tutoring - Physics and Chemistry Tutor",
      date: "October 2019 - March 2020",
      description:
        "I tutored students in Grades 9 to 11 in Chemistry and Physics two times a week in Grade 11. These students were able to improve their academic performance and mindset towards these subjects.",
      image: tutor,
    },
    {
      title: "Code Club",
      date: "October 2019 - June 2020",
      description:
        "Code Club allowed me to work with other students interested in Computer Science on various programming challenges. As a member of this club, I also prepared for and competed in the University of Waterloo’s Canadian Computing Competition (CCC), in which I scored the top three in my division school-wide.",
      image: code,
    },
    {
      title: "Math Club",
      date: "October 2017 - June 2020",
      description:
        "As a part of Math Club, I practiced for and competed in various math contests, including University of Waterloo’s CEMC Contest.",
      image: math,
    },
    {
      title: "French Club",
      date: "February 2018 - June 2020",
      description:
        "I participated in French discussions and activities at French Club, including French Cafe events.",
      image: french,
    },
    {
      title:
        "Concours d’art Oratoire - School, Regional, and District Participant",
      date: "February 2018 - May 2018",
      description:
        "I competed in the Core French division of this national French Competition, winning 1st Place in my board and advancing to the district level.",
      image: test,
      link:
        "https://cpf.ca/en/activities-resources/for-youth/concours-dart-oratoire/",
    },
    {
      title: "Reach for The Top",
      date: "September 2017 - June 2019",
      description:
        "Reach for the Top is an inter-school trivia competition that quizzes participants on topics ranging from history to the sciences. I was selected as one of the team members to represent our school, specializing in science and math questions.",
      image: reach,
      link: "https://www.reachforthetop.com/",
    },
    {
      title: "Model United Nations - Executive - Communications Lead",
      date: "November 2018 - February 2019",
      description:
        "I led the organization of team-wide communication and our representation. My responsibilities ranged from  designing creative team apparel, posters, and logos to helping host open lunch debates.",
      image: mun,
      link: "https://www.un.org/en/mun",
    },
    {
      title: "Green Revolution - Executive - EcoSchools Liaison",
      date: "September 2018 - June 2019",
      description:
        "In my school’s environmentalism club, I was the representative for EcoSchools, a national community of schools who abide by environment-focused practices and initiatives. This meant that while helping organize events to promote sustainability within the school, I provided updates from Green Revolution to the EcoSchools committee.",
      image: green,
      link: "https://twitter.com/slssgreenrev?lang=en",
    },
    {
      title: "Table Tennis Team - Tournament and ROPSSAA Player",
      date: "September 2018 - June 2019",
      description:
        "ROPSSAA is the multi-school sports largest league within my region that hosts a highly competitive table tennis tournament annually. After playing at tournaments and practices within the school and in my district, I was chosen to compete as a Junior Girls Doubles player at ROPSSAA.",
      image: tableTennis,
      link: "https://www.ropssaa.org/",
    },
  ];
  return (
    <div>
      <NavBar />
      <ActivitiesHeader />
      <div className="mb-2 mx-auto py-4 px-6 md:px-0 w-full md:max-w-2xl xl:max-w-6xl grid md:grid-cols-2 gap-12">
        {activityCards.map((activityInfo, index) => (
          <ActivityCard
            key={activityInfo.title}
            index={index}
            activityInfo={activityInfo}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
