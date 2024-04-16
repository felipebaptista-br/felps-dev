import React from 'react';
import {
  Container,
  NavBarHome,
  Welcome,
  About,
  Projects,
  Targeting,
  FooterHome,
} from '@/components';

export default function Home() {

  return (
    <Container.FullWidth variant='column'>
      <Container.AutoWidth spacing='100px' variant='column'>
        <NavBarHome.Root />
        <Welcome.Root
          title="Let's think about the future"
          description='Discover my work, fall in love, and work with me'
        />
        <About.Root
          title='A summary about me'
          description="I'm passionate about Science and Technology. I deeply value teamwork, believing that knowledge exchange and collaboration are essential for professional growth. With a five-year journey in Software Engineering, I've developed strong skills in building responsive and robust applications. My approach is centered around fundamental principles such as Clean Code, Design Patterns, and the concepts of SOLID, ensuring the delivery of high-quality solutions. I'm committed to staying updated with the latest trends and technologies, always seeking to enhance my skills and contribute meaningfully to the projects I'm involved in."
        />
        <Projects.Root initialRepos={[]} />
        <div></div>
        <Targeting.Root>
          <Targeting.Title>Shall we work together?</Targeting.Title>
          <Targeting.Description>Below, you can find my contacts. Feel free to reach out to me on LinkedIn, WhatsApp, or via email.</Targeting.Description>
        </Targeting.Root>
      </Container.AutoWidth>
      <FooterHome.Root />
    </Container.FullWidth>
  )
}