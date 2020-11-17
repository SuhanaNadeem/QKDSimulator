import React from "react";
import NavBar from "../components/NavBar";
// import doodle from "../images/Doodle6.png";
import AwardCard from "../components/AwardCard";
import AwardsHeader from "../components/AwardsHeader";
import craig from "../images/craig.jpeg";
import awards1 from "../images/awards1.jpeg";
import awards2 from "../images/awards2.jpeg";
import bronze from "../images/bronze.jpeg";
import ropssaa from "../images/ropssaa.jpg";
import vale from "../images/vale.jpeg";
import schoolChamp from "../images/vale.jpeg";
import dist1 from "../images/dist1.jpeg";
import dist2 from "../images/dist2.jpeg";
import concours from "../images/concours.jpeg";
import cnml from "../images/cnml.jpeg";
import honours from "../images/honours.jpg";
import beaver from "../images/beaver.png";
import Footer from "../components/Footer";

export default function Awards() {
  const awardCards = [
    {
      title: "Craig Kielburger Journey Towards Excellence Award",
      date: "November 2018",
      description:
        "This award is presented to one freshman who has demonstrated the strongest combination of academic achievement and extracurricular involvement. I won the award due to my balance of high grades and leadership roles at major school organizations, including FIRST Robotics and Student Activity Council.",
      image: craig,
    },
    {
      title: "Concours d’art Oratoire - Peel District Competition Winner",
      date: "November 2018",
      description:
        "I won First Place at the District level of this national French Speech Competition, for my speech about the Underrepresentation of Women in STEM Fields.",
      image: concours,
      link:
        "https://bc-yk.cpf.ca/actvities/youth-activities/concours-dart-oratoire/",
    },
    {
      title:
        "CEMC Beaver Computing Challenge (BCC) - Certificate of Distinction",
      date: "November 2018",
      description:
        "I scored in the top 25% of the competitors from my school in this University of Waterloo computational problem-solving contest.",
      image: beaver,
      link: "https://www.cemc.uwaterloo.ca/contests/bcc.html",
    },
    {
      title: "CEMC Fryer - Certificate of Distinction",
      date: "November 2018, 2019",
      description:
        "I scored in the top 25% of all contest writers in this international full-solution math contest hosted by the University of Waterloo in Grade 9.",
      image: dist1,
      link: "https://www.cemc.uwaterloo.ca/contests/fgh.html",
    },
    {
      title: "CEMC Cayley - Certificate of Distinction",
      date: "November 2018, 2019",
      description:
        "I scored in the top 25% of all contest writers in this University of Waterloo contest in Grade 10.",
      image: dist2,
      link: "https://www.cemc.uwaterloo.ca/contests/pcf.html",
    },
    {
      title: "CEMC Fryer, Cayley - School Champion",
      date: "November 2018, 2019",
      description:
        "I achieved the highest score from all contestants who wrote these UW math contests at my school.",
      image: schoolChamp,
    },
    {
      title: "Bronze Award for Extracurricular Involvement",
      date: "November 2018",
      description:
        "The Bronze Award is given to students in my school who have achieved a certain number of points based on a system that awards points for extracurricular involvement in a variety of domains. I earned this award by passionately pursuing my areas of interest in clubs and teams.",
      image: bronze,
    },
    {
      title: "Canadian National Mathematics League (CNML) Top Scorer",
      date: "November 2018",
      description:
        "The Canadian National Mathematics League (CNML) is a contest written monthly, scored on a yearly basis. Out of students from Grades 9 to 12, I earned the highest score in this contest as a freshman.",
      image: cnml,
    },
    // {
    //   title:
    //     "Highest Mark Awards in Grade 11 Functions, Chemistry, Physics, Computer Science, Computer Engineering, and English",
    //   date: "November 2020",
    //   description:
    //     "Due to my diligent work in Grade 11, I won the award for Highest Mark in each of these subjects.",
    //   image: doodle,
    // },
    {
      title:
        "Highest Mark Awards in Grade 10 Math, Science, French, History, and Computer Studies",
      date: "November 2019",
      description:
        "My Grade 10 year was especially exciting because I was able to delve into Computer Science through the Computer Studies course. My passion for these subjects translated to my grades, allowing me to win these awards.",
      image: awards2,
    },
    {
      title:
        "Highest Mark Awards in Grade 9 English, French, Geography, Math, and Science",
      date: "November 2018",
      description:
        "Ever since my freshman year of high school, I've strived to thoroughly study topics I am interested in beyond the scope of the classroom, by asking questions and pursuing inquiries independently. As a result, I was able to achieve the highest mark in my grade for these courses.",
      image: awards1,
    },

    {
      title: "Academic Honours",
      date: "2017 - 2020",
      description: "Each semester of high school, I've earned Honours.",
      image: honours,
    },
    {
      title:
        "ROPSSAA Table Tennis Championship - 4th Place in Junior Girls Doubles",
      date: "2017 - 2020",
      description:
        "By progressing to the quarter-finals of this school-board wide tournament, my Junior Girls Doubles partner and I won 4th Place.",
      image: ropssaa,
      link: "https://www.ropssaa.org/",
    },
    {
      title: "Valedictorian",
      date: "June 2017",
      description:
        "Due to my role as the Chair of the Board of Trustees, academic performance, and other activities, I had the honour of representing my middle school's graduating class as Valedictorian.",
      image: vale,
    },
  ];

  return (
    <div>
      <NavBar />
      <AwardsHeader />
      <div className="grid gap-2 md:gap-4 grid-cols-1 mb-2 mx-auto py-4 px-8 md:px-0 w-full md:max-w-2xl xl:max-w-6xl">
        {awardCards.map((awardInfo, index) => (
          <AwardCard
            key={awardInfo.title}
            index={index}
            awardInfo={awardInfo}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
