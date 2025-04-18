import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import styled from "styled-components";

const TeamContainer = styled.section`
  padding: 8rem 5%;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.95),
    rgba(26, 26, 26, 0.95)
  );
`;

const GlowBackground = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
      circle at 20% 20%,
      rgba(220, 170, 20, 0.15) 0%,
      transparent 25%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(78, 205, 196, 0.15) 0%,
      transparent 25%
    );
  pointer-events: none;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(120deg, #dcaa14, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  color: #e0e0e0;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
`;

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterTab = styled.button<{ $isActive: boolean }>`
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  border: 1px solid
    ${(props) => (props.$isActive ? "#dcaa14" : "rgba(255, 255, 255, 0.1)")};
  background: ${(props) =>
    props.$isActive ? "rgba(220, 170, 20, 0.1)" : "rgba(255, 255, 255, 0.05)"};
  color: ${(props) => (props.$isActive ? "#dcaa14" : "#ffffff")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #dcaa14;
    transform: translateY(-2px);
  }
`;

const TeamGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 3rem;
`;

const TeamCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  // max-width: 100%
  width: 300px;
  // max-height: auto;
  height: 100%;
  backdrop-filter: blur(10px);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(220, 170, 20, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

    .social-links {
      opacity: 1;
      transform: translateY(0);
    }

    .member-image img {
      transform: scale(1.1);
    }
  }
`;

const MemberImage = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  }
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
  text-align: center;
  position: relative;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const MemberRole = styled.p`
  color: #dcaa14;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: #e0e0e0;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #dcaa14;
    color: #000000;
    transform: translateY(-3px);
  }
`;

const teamMembers = [
  {
    name: "Meena",
    role: "Analyst",
    department: "Analyst",
    image:
      "https://wfkq0nguanh0273r.public.blob.vercel-storage.com/mentorbridge-pics/meena.jpg",
    bio: "Full Stack Developer with a passion for creating innovative solutions.",
    social: {
      linkedin: "https://www.linkedin.com/in/meena-34-b59912268/",
      github: "https://github.com/MeenaSivakumar",
      twitter: "",
    },
  },
  {
    name: "Subash Natrayan",
    role: "Frontend Lead Engineer",
    department: "Frontend",
    image:
      "https://wfkq0nguanh0273r.public.blob.vercel-storage.com/mentorbridge-pics/Subash.jpg",
    bio: "Tech innovator specializing in AI and UI/UX design.",
    social: {
      linkedin: "https://www.linkedin.com/in/subash-natrayan-r-m-4654aa319",
      github: "https://github.com/Thunderscotch",
      twitter: "",
    },
  },
  {
    name: "Bavani",
    role: "Frontend Engineer",
    department: "Frontend",
    image:
      "https://wfkq0nguanh0273r.public.blob.vercel-storage.com/mentorbridge-pics/bavani.jpg",
    bio: "Frontend Developer with a passion for clean code.",
    social: {
      linkedin: "https://www.linkedin.com/in/bavani-kannan-b15938287/",
      github: "https://github.com/bavanikannan12",
      twitter: "",
    },
  },
  {
    name: "Nithya Bala",
    role: "Frontend Dev Engineer",
    department: "Frontend",
    image:
      "https://wfkq0nguanh0273r.public.blob.vercel-storage.com/mentorbridge-pics/Nithya_Bala_M.jpg",
    bio: "Creating intuitive and beautiful user experiences.",
    social: {
      linkedin: "https://www.linkedin.com/in/nithyabala02/",
      github: "https://github.com/Nithyabala2004",
      twitter: "",
    },
  },
  {
    name: "Bala Krishnan",
    role: "Frontend Dev Engineer",
    department: "Frontend",
    image:
      "https://wfkq0nguanh0273r.public.blob.vercel-storage.com/mentorbridge-pics/balakrishnan.jpg",
    bio: "Expert in backend development with a focus on scalable architecture.",
    social: {
      linkedin: "https://linkedin.com/in/bala-krishnan-bk",
      github: "https://github.com/SBKrishnan",
      twitter: "",
    },
  },
  {
    name: "Sakthi Priya",
    role: "UI/UX Designer",
    department: "Design",
    image:
      "https://wfkq0nguanh0273r.public.blob.vercel-storage.com/mentorbridge-pics/Sakthi_Priya_S.jpg",
    bio: "Creating beautiful and intuitive user experiences through design.",
    social: {
      linkedIn: "https://www.linkedin.com/in/karthekeyan-m/",
      gitHub: "https://github.com/karthi049",
      twitter: "",
    },
  },
  {
    name: "Kiruthika",
    role: "Frontend Engineer",
    department: "Frontend",
    image:
      "https://wfkq0nguanh0273r.public.blob.vercel-storage.com/mentorbridge-pics/Kiruthika_G.jpeg",
    bio: "Passionate about creating innovative solutions and leading teams to success.",
    social: {
      linkedIn: "https://www.linkedin.com/in/nithyabala02/",
      gitHub: "https://github.com/Nithyabala2004",
      twitter: "",
    },
  },
  // {
  //   name: "Shubman Gill",
  //   role: "Frontend Engineer",
  //   department: "Frontend",
  //   image:
  //     "https://static.cricbuzz.com/a/img/v1/152x152/i1/c616515/shubman-gill.jpg",
  //   bio: "Expert in frontend development with a focus on scalable architecture.",
  //   social: {
  //     linkedin: "https://linkedin.com/in/janesmith",
  //     github: "https://github.com/janesmith",
  //     twitter: "https://twitter.com/janesmith",
  //   },
  // },
  // {
  //   name: "Jasprit Bumrah",
  //   role: "UI/UX Designer",
  //   department: "Design",
  //   image:
  //     "https://static.cricbuzz.com/a/img/v1/152x152/i1/c591949/jasprit-bumrah.jpg",
  //   bio: "Creating beautiful and intuitive user experiences through design.",
  //   social: {
  //     linkedin: "https://linkedin.com/in/mikejohnson",
  //     github: "https://github.com/mikejohnson",
  //     twitter: "https://twitter.com/mikejohnson",
  //   },
  // },
  // {
  //   name: "Ravichandran Ashwin",
  //   role: "UI/UX Lead",
  //   department: "Design",
  //   image:
  //     "https://static.cricbuzz.com/a/img/v1/152x152/i1/c591961/ravichandran-ashwin.jpg",
  //   bio: "Creating intuitive and beautiful user experiences.",
  //   social: {
  //     linkedin: "https://linkedin.com/in/emmawilson",
  //     github: "https://github.com/emmawilson",
  //     twitter: "https://twitter.com/emmawilson",
  //   },
  // },
];

const departments = ["All", "Analyst", "Backend", "Frontend", "Design"];

const TeamSection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const filteredMembers = teamMembers.filter(
    (member) =>
      selectedDepartment === "All" || member.department === selectedDepartment
  );

  return (
    <TeamContainer id="team">
      <GlowBackground />
      <SectionHeader>
        <Title>Meet Our Team</Title>
        <Subtitle>
          Talented individuals working together to create exceptional
          experiences
        </Subtitle>
      </SectionHeader>

      <FilterTabs>
        {departments.map((dept) => (
          <FilterTab
            key={dept}
            $isActive={selectedDepartment === dept}
            onClick={() => setSelectedDepartment(dept)}
          >
            {dept}
          </FilterTab>
        ))}
      </FilterTabs>

      <TeamGrid>
        <AnimatePresence>
          {filteredMembers.map((member, index) => (
            <TeamCard
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredMember(index)}
              onHoverEnd={() => setHoveredMember(null)}
            >
              <MemberImage className="member-image">
                <img src={member.image} alt={member.name} />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredMember === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem",
                  }}
                >
                  <MemberBio>{member.bio}</MemberBio>
                </motion.div>
              </MemberImage>
              <MemberInfo>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <SocialLinks className="social-links">
                  <SocialIcon
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiLinkedin size={20} />
                  </SocialIcon>
                  <SocialIcon
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiGithub size={20} />
                  </SocialIcon>
                  {/* <SocialIcon
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiTwitter size={20} />
                  </SocialIcon> */}
                </SocialLinks>
              </MemberInfo>
            </TeamCard>
          ))}
        </AnimatePresence>
      </TeamGrid>
    </TeamContainer>
  );
};

export default TeamSection;
