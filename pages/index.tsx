import HomeCake from "@components/icons/HomeCake"
import Logo from "@components/icons/Logo"
import HomeEth from "@components/icons/HomeEth"
import { Banner, Container, HomeHero, HomeSection } from "@components/ui"
import { section1, section2, section3, section4 } from "@lib/text/home"
import HomeDecentralized from "@components/icons/HomeDecentralized"
import { NextSeo } from "next-seo"

const Home = () => {
  return (
    <>
      <NextSeo title="The decentralized slicing platform" />
      <Container page={true}>
        <main className="max-w-screen-lg pb-20 mx-auto text-center">
          <HomeHero />
          <div className=" space-y-36">
            <HomeSection
              text={section1}
              image={<HomeCake className="w-32 sm:w-40" spin />}
            />
            <HomeSection
              text={section2}
              image={<Logo size="w-32 sm:w-36" margin="mt-4 ml-6" spin />}
              side="right"
            />
            <HomeSection
              text={section3}
              image={<HomeEth size="w-32 sm:w-36" spin />}
            />
            <HomeSection
              text={section4}
              image={<HomeDecentralized />}
              side="right"
            />
          </div>
        </main>
      </Container>
      <Banner />
    </>
  )
}

export default Home
