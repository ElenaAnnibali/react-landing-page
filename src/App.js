/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  border-style: none none solid;
  border-width: 1px;
  border-color: #000;
  padding: 20px 70px;
  margin-top: 10px;
`;

const heroStyles = css`
  background-color: #f7f5ed;
  display: flex;
  justify-content: center;
`;

const wrapperStyles = css`
  max-width: 1900px;
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

const badgeStyles = css`
  width: 200px;
  height: 54px;
  margin-left: 45px;
  margin-top: -10px;
  margin-left: 22px;
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

const buttonStyles = css`
  text-decoration: none;
  border: 2px solid #222325;
  background-color: #000;
  padding: 17px;
  color: #fff !important;
  outline: none;
  position: relative;
  display: inline-block;
  z-index: 1;
  width: auto;
  border-radius: 4px;
  transition: transform 200ms ease-in-out;
  font-family: Sora, sans-serif;
  font-size: 18px !important;
  font-weight: 600 !important;

  &:before {
    z-index: 0;
    margin-top: 0px;
    border: 1px none #000;
    color: #fff;
    line-height: 20px;
  }

  &:after {
    position: absolute;
    width: 94%;
    height: 94%;
    left: -6px;
    top: 6px;
    border-radius: 4px;
    border: 2px solid #222325;
    content: '';
    z-index: 0;
  }
`;
// hero section
const heroSectionStyles = css`
  display: flex;
  justify-content: center;
  margin-top: 36px;
  gap: 30px;

  h1 {
    font-size: 60px;
    font-family: 'Montserrat', sans-serif !important;
    margin-bottom: 0;
  }

  p {
    font-family: Sora, sans-serif;
    color: #222325;
    font-size: 22px;
    line-height: 38px;
  }

  img {
    max-width: 570px;
    max-height: 560px;
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

const iconsStyles = css`
  max-width: 50px;
  max-height: 50px;
`;

// Centralize
const headingParagraphStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;

  p {
    font-size: 18px;
    line-height: 36px;
    font-weight: 400;
    text-align: center;
  }
`;

const centralizeImgStyles = css`
  max-width: 450px;
  max-height: 350px;
`;

const centralizeImgContainerStyles = css`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const centralizeImgSubContainerStyles = css`
  max-width: 490px;
  max-height: 605px;
  border-radius: 35px;
  background-color: #fff;
  text-align: justify;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;

  h3 {
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 700;
    padding-left: 20px;
    font-size: 35px;
  }

  p {
    padding-right: 20px;
    padding-left: 20px;
    font-family: Sora, sans-serif;
    font-size: 18px;
    line-height: 35px;
    font-weight: 400;
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
  padding-top: 40px;
  padding-left: 40px;
  justify-content: space-around;
  max-width: 1000px;
  max-height: 400px;
  background-color: #ffc73a;
  border-radius: 20px;

  h3 {
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 700;
    font-size: 35px;
    line-height: 36px;
    margin: 0;
  }

  p {
    padding: 0 15px;
    font-size: 18px;
    line-height: 36px;
    font-weight: 400;
    text-align: left;
    margin-top: 19px;
    padding-right: 40px;
    padding-left: 0px;
    line-height: 34px;
  }

  img {
    max-width: 500px;
    max-height: 365px;
    vertical-align: middle;
    margin-right: 30px;
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
    margin: 0;
  }

  p {
    margin-top: 19px;
    padding-left: 0px;
    font-size: 18px;
    line-height: 34px;
    font-weight: 400;
    text-align: justify;
  }
`;

const iconsImgStyles = css`
  width: 500px;
  margin-right: 40px;
  padding-right: 20px;
  padding-bottom: 40px;
  padding-left: 20px;
`;

// progress
const progressHeadingParagraphStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 50px;
    font-family: 'Montserrat', sans-serif !important;
    margin-bottom: 10px;
  }

  p {
    text-align: center;
    padding: 0 15px;
    font-size: 18px;
    line-height: 36px;
    font-weight: 400;
    margin-top: 19px;
    padding-right: 40px;
    padding-left: 0px;
    line-height: 36px;
  }
`;

const progressImgSubContainerStyles = css`
  max-width: 490px;
  max-height: 605px;
  border-radius: 25px;
  background-color: #fff;
  text-align: justify;

  h3 {
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 700;
    padding-left: 15px;
    padding-left: 20px;
    font-size: 35px;
  }

  p {
    padding-right: 10px;
    padding-left: 20px;
    font-size: 18px;
    line-height: 35px;
    font-weight: 400;
    text-align: justify;
  }

  &.orangeBackground {
    background-color: #fc7557;
    color: #fff;
  }
`;

const h3WhiteBgStyles = css`
  margin: 12px;
`;

const pWhiteBgStyles = css`
  padding-right: 0 !important;
  text-align: justify !important;
`;

// karin-app img
const orangeContainerImgStyles = css`
  max-width: 450px;
  max-height: 354px;
  vertical-align: middle;
  margin-top: 46px;
`;

const whiteContainerIngStyles = css`
  display: inline-block;
  width: 370px;
  margin-right: auto;
  margin-left: 40px;
  text-align: center;
  padding: 20px 40px;
  margin-top: 80px;
`;

// rates
const rateHeadingParagraphStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;

  h2 {
    font-size: 50px;
    font-family: 'Montserrat', sans-serif !important;
    margin-bottom: 10px;
    color: #fff;
  }

  p {
    text-align: left;
    padding: 10px;
    color: #fff;
  }
`;

const ratesStyles = css`
  max-width: 1240px;
  max-height: 400px;
`;

function App() {
  return (
    <>
      <main>
        <div css={heroStyles}>
          <div css={wrapperStyles}>
            <header css={headerStyles}>
              <div css={logoBadgeContainerStyles}>
                <img css={logoStyles} src="/Kairn-logo@3x.png" alt="logo" />
                <img
                  css={badgeStyles}
                  className="badge"
                  src="/top-post-badge.svg"
                  alt="top-badge"
                />
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
                    <a css={buttonStyles} href="/">
                      <strong>Try Kairn!</strong>
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
                  <p>
                    Stop rushing - centralize, prioritize and progress <br /> on
                    projects across apps on a daily basis
                  </p>
                  <div>
                    <div>
                      <a css={buttonStyles} href="/">
                        Try Kairn!
                      </a>
                    </div>
                  </div>
                </div>
                <img src="/illu-header@3x.png" alt="slide" />
              </div>
              <br />
              <br />
              {/* animated divs */}
              <div>
                <div css={firstDivStyles}>
                  <img src="/centralize.svg" alt="centralize" />
                  2-Way Integration
                  <br />
                  <img
                    css={iconsStyles}
                    src="/slack-logo.png"
                    alt="Slack logo"
                  />
                  Linked to Slack
                  <br />
                  <img css={iconsStyles} src="/granma.png" alt="granma" />
                  Quick Capture
                </div>
                <div css={secondDivStyles}>
                  <img src="/prioritize.svg" alt="prioritize" />
                  Smart Scoring
                  <br />
                  <img
                    css={iconsStyles}
                    src="/flower-logo.png"
                    alt="flower logo"
                  />
                  Professional &amp; Personal
                  <br />
                  <img
                    css={iconsStyles}
                    src="/thumbsup.png"
                    alt="Thumbs up man emoji"
                  />
                  Flexible view
                </div>
                <div css={thirdDivStyles}>
                  <img src="/progress.svg" alt="progress" />
                  Updates Your Tools
                  <br />
                  <img
                    css={iconsStyles}
                    src="/notionIcon.svg"
                    alt="Notion logo"
                  />
                  No More Follow-Up
                  <br />
                  <img
                    css={iconsStyles}
                    src="/beardedman.png"
                    alt="Bearded man emoji"
                  />
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
              {/* progress */}
              <div css={progressHeadingParagraphStyles}>
                <h2>Progress</h2>
                <p>
                  Never lose precious time updating tools' statuses or asking
                  your team for updates. <br />
                  Kairn connects it all so you focus on doing instead of running
                  around.
                </p>
                <div css={centralizeImgContainerStyles}>
                  <div
                    className="orangeBackground"
                    css={progressImgSubContainerStyles}
                  >
                    <h3>Supercharge your apps</h3>
                    <p>
                      Kairn updates synced tools. When you mark tasks as done on
                      Kairn, it updates tools back, so your projects keep on
                      progressing!
                    </p>
                    <img
                      css={orangeContainerImgStyles}
                      src="/karin-app.png"
                      alt="app-icons"
                    />
                  </div>
                  <div css={centralizeImgSubContainerStyles}>
                    <h3 css={h3WhiteBgStyles}>Share the load</h3>
                    <p css={pWhiteBgStyles}>
                      Share projects from Kairn with your team, they'll receive
                      it in Slack - even non Kairn users. When they progress,
                      you're directly updated.
                    </p>
                    <img
                      css={whiteContainerIngStyles}
                      src="connect.png"
                      alt="emojis"
                    />
                  </div>
                </div>
              </div>
              <br />
              <br />
              {/* rates */}
              <div css={rateHeadingParagraphStyles}>
                <h2>Stop putting out fires, start achieving</h2>
                <p>Currently in free beta save your early-bird spot!</p>
                <br />
                <br />
              </div>
              <div css={ratesStyles}>
                <img src="/rates2.npg" alt="rates" />
              </div>
              <br />
              <br />
            </section>
          </div>
        </div>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
