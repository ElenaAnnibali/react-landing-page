/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  border-style: none none solid;
  border-width: 1px;
  border-color: #000;
  padding: 20px 70px;
`;

const heroStyles = css`
  background-color: #f7f5ed;
  display: flex;
  justify-content: center;
`;

const wrapperStyles = css`
  max-width: 1600px;
  width: 100%;
`;
// Logo
const logoStyles = css`
  display: block;
  max-width: 150px;
  max-height: 46px;
`;
// Badge
const logoBadgeContainerStyles = css`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;
// Navigation bar
const navMenuStyles = css`
  list-style-type: none;
  border: 1px none #000;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 40px;

  li > a {
    text-decoration: none;
    color: #000;
    font-size: 1rem;
    font-weight: 400;
  }
`;

const buttonLikeStyles = css`
  text-decoration: none;
  background-color: #000;
  color: #fff;
  max-width: 160px;
  max-height: 40px;
  margin-top: 0px;

  a {
    border-radius: 6px;
    max-width: 170px;
    max-height: 60px;
    font-size: 15px;
    background-color: #fff;
    padding: 9px 15px;
  }
`;
// hero section
const heroSectionStyles = css`
  display: flex;
  justify-content: flex-start;
  margin-top: 36px;

  h1 {
    font-size: 60px;
    font-family: 'Montserrat', sans-serif !important;
  }

  img {
    max-width: 450px;
    max-height: 400px;
  }
`;
const controlStyles = css`
  background-color: #949cff;
  color: #fff;
`;

const herosubSectionStyles = css`
  display: flex;
  flex-direction: column;
`;
// Animated divs
const firstDivStyles = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px none #000;
  background-color: #fc7557;
`;

const secondDivStyles = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 36px;
  border: 1px none #000;
  background-color: #7f9dff;
`;

const thirdDivStyles = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 36px;
  border: 1px none #000;
  background-color: #ffc73a;
`;
const h2Styles = css`
  font-size: 50px;
  font-family: 'Montserrat', sans-serif !important;
  margin-bottom: 10px;
`;
// Centralize
const headingParagraphStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
`;

const centralizeImgStyles = css`
  max-width: 450px;
  max-height: 354px;
`;

const centralizeImgContainerStyles = css`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const centralizeImgSubContainerStyles = css`
  max-width: 490px;
  max-height: 605px;
  border-radius: 10px;
  background-color: #fff;
  text-align: justify;

  h3 {
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 700;
    padding-left: 15px;
  }

  p {
    padding: 0 15px;
  }

  &.purpleBackground {
    background-color: #809dff;
    color: #fff;
  }
`;

// Prioritize
// smart view
const smartViewsLeftStyles = css`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  margin: 20px;
`;

const whiteButtonStyles = css`
  display: flex;
  gap: 20px;
  justify-content: left;
  margin: 20px;

  a {
    border-radius: 6px;
    max-width: 170px;
    max-height: 60px;
    font-size: 15px;
    background-color: #fff;
    padding: 9px 15px;
  }
`;

const smartViewStyles = css`
  display: flex;
  gap: 20px;
  padding-top: 30px;
  padding-left: 20px;
  justify-content: space-around;
  max-width: 1000px;
  max-height: 400px;
  background-color: #ffc73a;
  border-radius: 20px;

  h3 {
    font-family: 'Montserrat', sans-serif !important;
    font-size: 30px;
    font-weight: 700;
    padding-left: 15px;
  }

  p {
    padding: 0 15px;
    font-size: 18px;
  }

  img {
    max-width: 500px;
    max-height: 365px;
    margin-bottom: -30px;
    padding-right: 10px;
  }
`;
// professional + personal
const professionalPersonalLeftStyles = css`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  margin: 20px;
  max-width: 250px;
`;

const professionalPersonalStyles = css`
  display: flex;
  padding-top: 30px;
  padding-left: 20px;
  justify-content: space-between;
  max-width: 1000px;
  max-height: 400px;
  background-color: #fff;
  border-radius: 20px;

  h3 {
    font-family: 'Montserrat', sans-serif !important;
    font-size: 30px;
    font-weight: 700;
  }

  p {
    font-size: 18px;
  }
`;

const iconsImgStyles = css`
  width: 500px;
  margin-right: 40px;
  padding-right: 20px;
  padding-bottom: 40px;
  padding-left: 20px;
`;

function App() {
  return (
    <div>
      <main>
        <div css={heroStyles}>
          <div css={wrapperStyles}>
            <header css={headerStyles}>
              <div css={logoBadgeContainerStyles}>
                <img css={logoStyles} src="/Kairn-logo@3x.png" alt="logo" />
                <img src="/top-post-badge.svg" alt="top-badge" />
              </div>
              <nav>
                <ul css={navMenuStyles}>
                  <li>
                    <a href="/">Manifesto</a>
                  </li>
                  <li>
                    <a href="/">Twitter</a>
                  </li>
                  <li>
                    <a href="/">Sign in</a>
                  </li>
                  <li>
                    <a css={buttonLikeStyles} href="/">
                      Try Kairn!
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
            <section>
              <div css={heroSectionStyles}>
                <div css={herosubSectionStyles}>
                  <h1>
                    Regain <strong css={controlStyles}>control</strong> <br />
                    over your days
                  </h1>
                  <h3>
                    Stop rushing - centralize, prioritize and progress on
                    projects across apps on a daily basis
                  </h3>
                  <div>
                    <div css={buttonLikeStyles}>
                      <a href="/">Try Kairn!</a>
                    </div>
                  </div>
                </div>
                <img src="/illu-header@3x.png" alt="slide" />
              </div>
              <br />
              <br />
              <div>
                {/* animated divs */}
                <div css={firstDivStyles}>
                  <img src="/centralize.svg" alt="centralize" />
                  2-Way Integration
                  <br />
                  <img sr="/slack-logo.png" alt="Slack logo" />
                  Linked to Slack
                  <br />
                  <img src="/granma.png" alt="granma" />
                  Quick Capture
                </div>
                <div css={secondDivStyles}>
                  <img src="/prioritize.svg" alt="prioritize" />
                  Smart Scoring
                  <br />
                  <img src="/flower-logo.png" alt="flower logo" />
                  Professional &amp; Personal
                  <br />
                  <img sr="/thumbsup.png" alt="Thumbs up man emoji" />
                  Flexible view
                </div>
                <div css={thirdDivStyles}>
                  <img src="/progress.svg" alt="progress" />
                  Updates Your Tools
                  <br />
                  <img sr="/icon-notion.svg" alt="Notion logo" />
                  No More Follow-Up
                  <br />
                  <img src="/beardedman.png" alt="Bearded man emoji" />
                  Delegate With Ease
                </div>
              </div>
              {/* centralize div */}
              <div css={headingParagraphStyles}>
                <h2 css={h2Styles}>Centralize</h2>
                <p>
                  Keep track of everything you need to do across tools with
                  ease.
                  <br />
                  With Kairn, get clarity on what to do in one place.
                </p>
              </div>
              <div css={centralizeImgContainerStyles}>
                <div
                  className="purpleBackground"
                  css={centralizeImgSubContainerStyles}
                >
                  <h3>Capture anywhere</h3>
                  <p>
                    Add tasks in a click as they happen, where they happen.
                    Kairn links the task to the right page for when you’re ready
                    to get started.
                  </p>
                  <img
                    css={centralizeImgStyles}
                    src="/quick-capture.png"
                    alt="review pricing slide"
                  />
                </div>
                <div css={centralizeImgSubContainerStyles}>
                  <h3>Smart integrations</h3>
                  <p>
                    No need to search through your tools to find your tasks,
                    Kairn does it for you. When you get tagged on a task on
                    Notion, it's added to Kairn.
                  </p>
                  <img
                    css={centralizeImgStyles}
                    src="/Group-2705.png"
                    alt="icons"
                  />
                </div>
              </div>
              {/* Prioritize */}
              <div css={headingParagraphStyles}>
                <h2 css={h2Styles}>Prioritize</h2>
                <p>
                  Projects never progress because of all the little things that
                  get in the way. <br />
                  With Kairn easily manage both the daily rush and long term
                  projects.
                </p>
                <div>
                  <div css={smartViewStyles}>
                    <div css={smartViewsLeftStyles}>
                      <h3>Smart Views</h3>
                      <p>
                        Switch between project and daily tasks to make the most
                        of your days. Select views according to your needs and
                        style, as a team or on your own.
                      </p>
                      <div css={whiteButtonStyles}>
                        <a>Project view</a>
                        <a>Task view</a>
                      </div>
                    </div>
                    <img src="/my-task.png" alt="my Task" />
                  </div>
                  <br />
                  <br />
                  <div css={professionalPersonalStyles}>
                    <div css={professionalPersonalLeftStyles}>
                      <h3>
                        Professional <br /> + Personal
                      </h3>
                      <p>
                        Your day is a mix of personal and professional projects
                        so Kairn is designed for both. Only data in shared
                        projects can be accessed by your team, the rest is yours
                        only.
                      </p>
                    </div>
                    <img css={iconsImgStyles} src="/pro-per.png" alt="icons" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
