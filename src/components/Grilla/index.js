import { ArticleWrapper, TitleContainer, CardCreation, ContainerCards } from "./styled"

export const GridCreations = () => {
  return (
    <ArticleWrapper id="section-products">
      <div>
        <TitleContainer>
          <h1>OUR CREATIONS</h1>
          <p>See more</p>
        </TitleContainer>

        <div>
          <ContainerCards>
            <CardCreation imagen='/images/img1'>
              <p>Deep earth</p>
            </CardCreation>
            <CardCreation imagen='/images/img2'>
              <p>Night arcade</p>
            </CardCreation>
            <CardCreation imagen='/images/img3'>
              <p>Soccer team VR</p>
            </CardCreation>
            <CardCreation imagen='/images/img4'>
              <p>The grid</p>
            </CardCreation>
            <CardCreation imagen='/images/img5'>
              <p>From up above VR</p>
            </CardCreation>
            <CardCreation imagen='/images/img6'>
              <p>Pocket borealis</p>
            </CardCreation>
            <CardCreation imagen='/images/img7'>
              <p>The curiosity</p>
            </CardCreation>
            <CardCreation imagen='/images/img8'>
              <p>Make it fisheye</p>
            </CardCreation>
          </ContainerCards>
          <p className="more-2">See more</p>
        </div>
      </div>
    </ArticleWrapper>
  )
}