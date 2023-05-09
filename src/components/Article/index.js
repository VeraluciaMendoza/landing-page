import { ArticleWrapper, ArticleImage, ArticleText } from "./styled"

export const Article = () => {
    return (
        <ArticleWrapper id="section-about">
          <ArticleImage>
            <img src="/images/image-body.jpeg" alt="article" width="100"/>
          </ArticleImage>
          <ArticleText>
            <h1>THE LEADER IN INTERACTIVE VR</h1>
            <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
          </ArticleText>
        </ArticleWrapper>
    )
}