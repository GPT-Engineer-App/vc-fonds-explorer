import { Container, Text, VStack, Heading, Box, IconButton, Link } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">
          Overview of VC Funds
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Venture Capital (VC) funds are pools of capital managed by investment professionals. These funds are used to invest in early-stage companies with high growth potential. The goal is to generate significant returns for the investors by identifying and supporting innovative startups.
        </Text>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Key Characteristics
          </Heading>
          <VStack align="start" spacing={2}>
            <Text>- High-risk, high-reward investments</Text>
            <Text>- Focus on technology and innovation</Text>
            <Text>- Active involvement in portfolio companies</Text>
            <Text>- Long-term investment horizon</Text>
          </VStack>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Popular VC Funds
          </Heading>
          <VStack align="start" spacing={2}>
            <Text>- Sequoia Capital</Text>
            <Text>- Andreessen Horowitz</Text>
            <Text>- Accel</Text>
            <Text>- Benchmark</Text>
          </VStack>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Learn More
          </Heading>
          <VStack align="start" spacing={2}>
            <Link href="https://www.linkedin.com" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            </Link>
            <Link href="https://www.twitter.com" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            </Link>
            <Link href="https://www.example.com" isExternal>
              <IconButton aria-label="Website" icon={<FaGlobe />} size="lg" />
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
