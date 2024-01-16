import { Container, NavBar, Welcome } from '@/components'
import ArrowLeftIcon from '@/assets/icons/Icon-arrow-right.svg'
import Image from 'next/image'

import "./page.css"

export default function Home() {
  return (
    <main>
      <NavBar.Root>
        <NavBar.NavLeft>FelpsDev</NavBar.NavLeft>
        <NavBar.SectionNav>
          <NavBar.NavLink href='/'>About</NavBar.NavLink>
          <NavBar.NavLink href='/'>Work</NavBar.NavLink>
          <NavBar.NavLink href='/'>Career</NavBar.NavLink>
        </NavBar.SectionNav>
        <NavBar.NavRight>
          <Image src={ArrowLeftIcon} className='arrow-left-icon' alt='Arrow Left Icon' />
          <NavBar.NavLink href='/'>Contact</NavBar.NavLink>
        </NavBar.NavRight>
      </NavBar.Root>

      <Container.Root>
        <Welcome.Root
          title='Webflow developer & UI/UX designer'
          description='I am a Science and Technology enthusiast. With a five-year background in Software Engineering, I have developed strong skills in building responsive and robust applications. My approach is centered on fundamental principles such as Clean Code, Design Patterns, and the concepts of SOLID, ensuring the delivery of high-quality solutions. I am committed to staying updated with the latest trends and technologies, always seeking to enhance my skills and contribute meaningfully to the projects I am involved in.'
        />
      </Container.Root>
    </main>
  )
}
