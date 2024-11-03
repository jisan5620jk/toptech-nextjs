import teamThumb from "/images/mobile-app-team1.png";
import teamThumb2 from "/images/mobile-app-team2.png";
import teamThumb3 from "/images/mobile-app-team3.png";
import teamThumb4 from "/images/mobile-app-team4.png";
import allTeamThumb from "/images/mobile-app-team-members.png";
import TeamCard from "./TeamCard";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: "Jone D. Alexon",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "CEO & Founder",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamTitle: "Noor Islam",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Co Founder",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 3,
    teamThumb: teamThumb3,
    teamTitle: "Anjelina Jelly",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "IT Expert",
    teamShareIcon: <IoShareSocialOutline />,
  },
  {
    id: 4,
    teamThumb: teamThumb4,
    teamTitle: "Merina Alisa",
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
    teamDesc: "Hr. Maneger",
    teamShareIcon: <IoShareSocialOutline />,
  },
];

const TeamMember = () => {
  return (
    <section className="bg-BodyBg-0 pt-28 pb-[176px] relative">
      <div className="Container">
        <div className="grid grid-cols-1 gap-y-8 lg:gap-0 lg:grid-cols-2 lg:items-center">
          <div>
            <h5 className="font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5">
             Our Team
            </h5>
            <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[38px] sm:leading-[46px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[38px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-4">
              Get ready for quick supports
              <br /> expert team member
            </h1>
          </div>
          <div className="flex lg:justify-end">
            <Link to={"/"} className="text-center">
              <img src={allTeamThumb} draggable="false" />
              <h6 className="font-Nunito text-lg text-HeadingColor-0 pt-3">
                Expert Members
              </h6>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-[100px] mt-[36px]">
          {teamData.map(
            ({
              id,
              teamThumb,
              teamTitle,
              socialIcon,
              socialIcon2,
              socialIcon3,
              socialIcon4,
              teamDesc,
              teamShareIcon,
            }) => {
              return (
                <div key={id}>
                  <TeamCard
                    teamThumb={teamThumb}
                    teamTitle={teamTitle}
                    socialIcon={socialIcon}
                    socialIcon2={socialIcon2}
                    socialIcon3={socialIcon3}
                    socialIcon4={socialIcon4}
                    teamDesc={teamDesc}
                    teamShareIcon={teamShareIcon}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
