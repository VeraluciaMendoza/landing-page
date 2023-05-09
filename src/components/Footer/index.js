import { FooterWrapper, FooterLinks, FooterImages } from "./styled"

export const Footer = () => {
    return (
        <FooterWrapper id="section-support">
            <FooterLinks>
              <img src="logo.svg" alt="logo-footer"/>
              <div>
                <a href="/#section-about">About</a>
                <a href="/#section-products">Products</a>
                <a href="/#section-support">Support</a>
                <a href="/#">Events</a>
              </div>
            </FooterLinks>
            <FooterImages>
              <div>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <img src="/icons/icon-facebook.svg" alt="icon-fb"/>
                </a>
                <a href="https://twitter.com/?lang=es" target="_blank" rel="noreferrer">
                  <img src="/icons/icon-twitter.svg" alt="icon-twt"/>
                </a>
                <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                  <img src="/icons/icon-pinterest.svg" alt="icon-pinterest"/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <img src="/icons/icon-instagram.svg" alt="icon-ig"/>
                </a>
              </div>
              <p>
                © 2021 Loopstudios. All rights reserved.
              </p>
            </FooterImages>
        </FooterWrapper>
    )
}