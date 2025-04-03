import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowRight,
  FiBookmark,
  FiClock,
  FiHeart,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import styled from "styled-components";
import BlogCard from "./BlogCard";

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  color: #1e293b;
`;

const Hero = styled(motion.div)`
  position: relative;
  height: 600px;
  background: linear-gradient(135deg, #bae6fd, #e0f2fe);
  padding: 2rem 5%;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, #f8fafc, transparent);
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto 4rem;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(120deg, #0ea5e9, #7dd3fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SearchBar = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  border-radius: 50px;
  padding: 0.8rem 1.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  width: 300px;

  input {
    border: none;
    width: 100%;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const Categories = styled(motion.div)`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem;
  max-width: 1400px;
  margin: 2rem auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryChip = styled(motion.button)<{ $isActive: boolean }>`
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  border: none;
  background: ${(props) => (props.$isActive ? "#0ea5e9" : "white")};
  color: ${(props) => (props.$isActive ? "white" : "#1e293b")};
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  }
`;

const MainContent = styled.div`
  max-width: 1400px;
  margin: -100px auto 0;
  padding: 0 5%;
  position: relative;
  z-index: 10;
`;

const FeaturedPost = styled(motion.div)`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  margin-bottom: 4rem;

  display: grid;
  grid-template-columns: 1.2fr 1fr;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImage = styled.div`
  height: 500px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const FeaturedContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const PostCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);

    img {
      transform: scale(1.05);
    }
  }
`;

const PostImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const PostContent = styled.div`
  padding: 1.5rem;
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: #f0f9ff;
  color: #0ea5e9;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const categories = [
  "All",
  "Programming",
  "Data Science",
  "Web Development",
  "Mobile Development",
  "DevOps",
  "Machine Learning",
  "Cybersecurity",
  "Cloud Computing",
  "Blockchain",
];

const blogPosts = [
  {
    _id: {
      $oid: "67d13cbd81c69f6caf4d1abc",
    },
    title: "When Helpers Don't Help and Utilities Harm",
    description:
      "Fixing buggy code is time-consuming; Let's build better utility and helper functions.",
    imageUrl:
      "https://cdn-images-1.medium.com/max/1920/1*uyQDs2mE8VJ85v8YaEbAPA.jpeg",
    contents: [
      {
        heading: "The Frustration of Useless Helpers",
        paragraph:
          "We've all been there. You're knee-deep in a coding project, desperately needing a function to streamline your workflow. You find a helper function, excitedly believing it will solve your problems.  You integrate it, expecting a beautiful, efficient solution, but instead...nothing.  Worse, it adds unexpected complexity, breaking functionality you'd already built. The dream of efficient code turns into a debugging nightmare. Why did this supposed helper fail you? Often, the problem is lack of clarity in the documentation or the helper function is not designed for the problem you are solving, requiring more effort in workarounds than you would writing it from scratch. Time spent integrating poorly documented code turns into frustration and lost productivity.",
        imageUrl:
          "https://cdn-images-1.medium.com/max/1920/1*uyQDs2mE8VJ85v8YaEbAPA.jpeg",
      },
      {
        heading: "The Perils of Poorly Designed Utilities",
        paragraph:
          "Utility functions are supposed to be your trusty sidekicks, making development quicker and easier.  However, what happens when those 'utils' become more harmful than helpful? Imagine poorly written, undocumented, or inflexible utility functions. They become more trouble than they are worth, leading to repetitive error messages or unexpected behavior. The ideal of reusable components crumbles into a scattered mess. Using overly complex 'utility' functions might even slow down your application if not used appropriately; they can lead to bloated applications that might consume more memory and take longer to run, making overall process less efficient than using simpler methods for the given problems.",
      },
      {
        heading: "Debugging the Mess: Identifying the Culprits",
        paragraph:
          "When helper and utility functions fail you, it's time to become a detective.  Thoroughly investigate these functions. Carefully examine what problem they're supposed to solve; look closely at their inputs, outputs, any internal state, assumptions and limitations; test out edge cases.   Trace their execution path through your code using debugging tools and read their documentation or comments again with meticulous care. If there is any confusion seek clarity in respective documentations, support communities or seek professional help when required. If your investigations uncover errors, update accordingly and only if there is nothing much to resolve, abandon or remove these functions in your application altogether. Doing this ensures no unexpected behaviour, faster run-time for overall applications, and less headaches",
      },
      {
        heading: "The Importance of Clear Documentation",
        paragraph:
          "Proper documentation is the cornerstone of reliable helper and utility functions. If documentation lacks clear explanation on what inputs and outputs it takes or explains expected and unexpected behaviour for inputs and expected scenarios, you might want to reconsider usage. When these are missing it increases frustration and difficulty when solving unexpected problem that arises, in-fact it's more beneficial to re-implement those function based on what it's needed instead. Thorough explanations on what the functions do, their limitations, and how to use them correctly are essential. Without this, developers struggle to integrate those helper and utility function into their applications efficiently and successfully and that can cause more time consuming in debugging unexpected errors caused by not using these utility functions appropriately.",
      },
      {
        heading: "Building Better Helpers and Utilities: A Proactive Approach",
        paragraph:
          "Instead of relying solely on external libraries, build your own focused helper and utility functions specifically for your application and what its needs are. It eliminates a lot of problems when using external helpers or libraries, specifically compatibility issues when upgrading applications. It also avoids dependency conflicts when trying to build applications on larger-scale using multiple external libraries, dependencies. In the long-run this creates efficient reusable blocks of code tailored to solve your particular project and application. When you design your helpers and utility functions meticulously, taking care of code design practices, that creates self-documenting code and clear functionality making future application development easier.",
      },
      {
        heading: "Learning from Mistakes and Embracing Simplicity",
        paragraph:
          "The experience of dealing with unhelpful helpers and harmful utilities offers invaluable lessons in coding. It highlights the crucial need for code simplicity, functionality clarity, and thorough testing. Prioritize creating lean, well-documented helper functions rather than integrating many externally found functionalities. Each new function added might be useful, but make sure it benefits you instead of slowing you down. Build maintainable, clean code that improves both productivity and quality, promoting the quality and elegance of what's built.",
      },
    ],
    tags: ["coding", "debugging"],
    createdAt: {
      $date: "2025-03-12T07:50:21.185Z",
    },
    category: "JavaScript",
    _class: "com.stupro.entity.ArticleEntity",
  },
  {
    _id: {
      $oid: "67d13cc381c69f6caf4d1abd",
    },
    title: "Mountain Majesty: Giants of the Earth",
    description:
      "Explore the majestic world of mountains – their formation, diverse ecosystems, and cultural significance. Discover their vulnerability and the importance of conservation.",
    imageUrl:
      "https://cdn-images-1.medium.com/max/679/1*Srk3o8nVXI79jF0uO720Kw.jpeg",
    contents: [
      {
        heading: "The Call of the Mountains",
        paragraph:
          "Mountains, those colossal stone giants, have captivated humanity for eons. Their imposing presence inspires awe, a sense of wonder at nature's raw power and breathtaking beauty. From the snow-capped peaks piercing the sky to the lush valleys nestled in their embrace, mountains offer a dramatic and diverse landscape, home to unique plants, animals, and cultures.  They challenge our limits, invite exploration, and provide refuge in the form of serenity and spiritual inspiration. The allure of the mountains speaks to something deep within the human soul, a desire to connect with something bigger than ourselves.",
        imageUrl:
          "https://cdn-images-1.medium.com/max/679/1*Srk3o8nVXI79jF0uO720Kw.jpeg",
      },
      {
        heading: "Formation of Mountain Ranges",
        paragraph:
          "These majestic structures weren't formed overnight; their creation is a process that spans millions of years, shaped by colossal tectonic forces.  Imagine immense plates of the Earth's crust colliding, buckling and folding under immense pressure. This slow, relentless dance of continental plates results in the towering peaks we admire. The process varies - some mountains rise from volcanic activity, while others form when the Earth's layers crumple and push upward.  Understanding this geological process is akin to understanding the beating heart of the planet.",
      },
      {
        heading: "Diversity of Mountain Life",
        paragraph:
          "Mountain ecosystems teem with remarkable biodiversity, a testament to nature's adaptability. The varying altitudes and diverse climates support an incredible array of species – from hardy yaks grazing on high alpine meadows to rare birds soaring among the peaks. The changes in elevation create distinct ecological zones; the vegetation adapts dramatically depending on altitude.  Exploring these zones offers a fascinating journey through varied flora and fauna, a unique insight into nature's power to thrive even in the harshest conditions. The creatures that inhabit these heights often showcase remarkable evolutionary adaptations. These breathtaking biodiversity hotspots contribute immensely to ecological stability worldwide. Conservation efforts play an equally pivotal role in preserving the mountain ecosystem for future generations. We must work toward conserving these natural resources responsibly for sustainable and harmonious co-existence.",
      },
      {
        heading: "Cultural Significance of Mountains",
        paragraph:
          "For countless cultures around the world, mountains hold immense spiritual and cultural significance. In many mythologies, mountains are viewed as sacred places, homes to deities and spiritual beings.  They symbolize strength, resilience, and the unyielding spirit of nature itself. Ancient traditions and stories intertwine with mountain landscapes – sites of pilgrimages, meditation retreats, and stories passed through generations. Understanding these mountain cultures offers insight into the relationship between people and the environment, highlighting unique perspectives that connect mankind to nature. Mountain life frequently entails communal unity and cooperation against harsh and challenging circumstances which helps develop stronger values of self-reliance, collaboration, and interdependence.",
      },
      {
        heading: "Mountains and Human Impact",
        paragraph:
          "While awe-inspiring, mountains are also extremely vulnerable to the consequences of human activity. Climate change, deforestation, and pollution pose significant risks, causing glacier retreat, habitat loss and triggering dangerous environmental shifts that compromise ecological balance.  Sustainable practices like responsible tourism, resource management, and conservation programs become critical. Sustainable development seeks the balance between utilizing mountain resources and preserving these valuable and pristine environments. Responsible management plans consider protecting unique ecosystems that sustain and conserve biological richness along with considering local populations living around these mountainous regions for long term sustainability and ecological preservation. The sustainability efforts focus towards an interconnected ecosystem's welfare. This symbiotic co-existence that benefits everyone. The well-being of both natural elements and the indigenous peoples. Their intertwined histories and survival greatly impact the natural world.  Both humans and environment’s resilience should intertwine.",
      },
      {
        heading: "Exploring the Majestic Heights",
        paragraph:
          "For adventurers, mountaineering presents thrilling challenges and unparalleled rewards.  From the demanding ascents to the panoramic vistas that unfold, it is an enriching experience that connects people directly with nature’s wonders and beauty. The physical and mental feats are powerful reminders of what the human spirit can accomplish and the strength within the human will. It is the summiting of the heights that offers such immense sense of triumph and inspiration. There is also an overwhelming sensation that the reward outweighs all struggles when it comes to the experiences when engaging in outdoor adventures that include scaling majestic mountain heights. Responsible mountain tourism is also a booming field that supports the wellbeing of local people who depend on this business venture, especially communities that rely greatly on such industry revenue. Many mountains that once were merely rugged lands became popular tourist spots now greatly benefited by this business.",
      },
    ],
    tags: ["Mountains", "Nature"],
    createdAt: {
      $date: "2025-03-12T07:50:27.891Z",
    },
    category: "JavaScript",
    _class: "com.stupro.entity.ArticleEntity",
  },
];

const BlogHome = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <PageContainer>
      <Hero
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <NavBar>
          <Logo>TechBlog</Logo>
          <SearchBar
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <FiSearch size={20} color="#64748b" />
            <input placeholder="Search articles..." />
          </SearchBar>
        </NavBar>

        <Categories>
          {categories.map((category, index) => (
            <CategoryChip
              key={category}
              $isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </CategoryChip>
          ))}
        </Categories>
      </Hero>

      <MainContent>
        <FeaturedPost
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <FeaturedImage>
            <img src="/featured-blog.jpg" alt="Featured Post" />
          </FeaturedImage>
          <FeaturedContent>
            <Tag>Featured</Tag>
            <h2
              style={{
                fontSize: "2.5rem",
                marginTop: "1rem",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              The Future of AI in Software Development
            </h2>
            <PostMeta>
              <span>
                <FiClock /> 5 min read
              </span>
              <span>
                <FiUser /> John Doe
              </span>
              <span>
                <FiHeart /> 234
              </span>
            </PostMeta>
            <p style={{ color: "#64748b", marginBottom: "2rem" }}>
              Explore how artificial intelligence is revolutionizing the way we
              build software...
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                background: "#0ea5e9",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Read More <FiArrowRight />
            </motion.button>
          </FeaturedContent>
        </FeaturedPost>

        <PostGrid>
          {blogPosts.map((post) => (
            <BlogCard
              key={post._id.$oid}
              title={post.title}
              imageUrl={post.imageUrl}
              category={post.category}
              createdAt={post.createdAt.$date}
              tags={post.tags}
            />
          ))}
        </PostGrid>
      </MainContent>
    </PageContainer>
  );
};

export default BlogHome;
