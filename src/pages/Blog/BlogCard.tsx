import styled from "styled-components";
import { animate, motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";

declare global {
  interface DateConstructor {
    new (value: string | number | Date): Date;
  }
}

interface BlogCardProps {
  title: string;
  imageUrl: string;
  category: string;
  createdAt: string;
  tags: string[];
}

const Card = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  line-height: 1.5;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Category = styled.span`
  display: inline-block;
  background: linear-gradient(
    279.99deg,
    #9f5ff1 -1.19%,
    #ff54b0 50.96%,
    #ff9f5a 99.95%
  );
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
`;

const DateText = styled.span`
  font-size: 0.875rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Tags = styled.div`
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  display: inline-block;
  color: #dcaa14;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
  margin-right: 0.5rem;
  font-weight: 600;
`;

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  imageUrl,
  category,
  createdAt,
  tags,
}) => {
  const formatDate = (dateString: string) => {
    const date: Date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image src={imageUrl} alt={title} />
      <Content>
        <Title>{title}</Title>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Category>{category}</Category>
          <DateText>
            <FiCalendar /> {formatDate(createdAt)}
          </DateText>
        </div>
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag}>#{tag.toLowerCase()}</Tag>
          ))}
        </Tags>
      </Content>
    </Card>
  );
};

export default BlogCard;
