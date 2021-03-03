import * as React from "react";
import { useRouter } from "next/router";
import Article from "~components/Layout/Article";
import BarChart from "~components/Layout/BarChart";
import ImageContainer from "~components/Layout/ImageContainer";
import Paragraph from "~components/Layout/Paragraph";
import PostMeta from "~components/Layout/PostMeta";
import Flex from "~components/Layout/Flex";
// import Quote from "~components/Layout/Quote";
import SubHeader from "~components/Layout/SubHeader";
import TextAlign from "~components/Layout/TextAlign";
import Header from "~components/Navigation/Header";
import List from "~components/Layout/List";
import ListItem from "~components/Layout/ListItem";
import Tags from "~components/Layout/Tags";
import Title from "~components/Layout/Title";
import YoutubeVideo from "~components/Layout/YoutubeVideo";
import OutsideLink from "~components/Navigation/OutsideLink";
import data from "./Data";
import { ChangeEvent } from "~types";

export interface GuidesArticle {
  autoPlay: number;
  startTime: number;
}

const GuidesArticle3589 = (): JSX.Element => {
  const router = useRouter();
  const videoRef = React.useRef<HTMLIFrameElement>(null);
  const [state, setState] = React.useState({
    autoPlay: 0,
    startTime: 0
  });

  const handleSetTime = React.useCallback((e: ChangeEvent<any>): void => {
    const time = parseInt(e.target.dataset.value, 10);

    setState({
      startTime: time,
      autoPlay: 1
    });
    if (videoRef && videoRef.current)
      videoRef.current.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth"
      });
  }, []);

  return (
    <>
      <Header
        url={router.asPath}
        title="Best CPUs of 2020 So Far (Gaming, Workstation, Overclocking
          Round-Up)"
      />
      <Article padding="20px 40px" direction="column">
        <Flex direction="column">
          <Title>
            Best CPUs of 2020 So Far (Gaming, Workstation, Overclocking
            Round-Up)
          </Title>
          <PostMeta
            username="Steve Burke"
            avatar="steveBurke.jpg"
            views={0}
            date={String(new Date(2020, 5, 28, 2, 49, 0, 0))}
            showViews
          />
          <Tags types={["AMD", "Intel", "Hardware", "Guides"]} />
        </Flex>
        <ImageContainer src="/images/hwGuide.jpg" alt="hwGuide.jpg" />
        <TextAlign left>
          <Paragraph>
            With the new influx of CPUs
            <OutsideLink href="https://www.gamersnexus.net/hwreviews/3581-amd-ryzen-3-3300x-cpu-review-vs-3100-clock-for-clock">
              from AMD
            </OutsideLink>
            and
            <OutsideLink href="https://www.youtube.com/watch?v=csFwlKgZCzM">
              Intel
            </OutsideLink>
            , and more rumored on the horizon, we wanted to round-up all of our
            recent testing into one concise piece for people looking for
            recommendations on the best CPU for different tasks. We’ve published
            several hours’ worth of content in the form of reviews, tuning, and
            follow-up coverage, so if you want the full details and depth for
            anything check those pieces. We’ll be focusing more on firm
            recommendations for each category in this video and less on the
            deeper details, with our categories including: Best gaming CPU, best
            budget gaming CPU, best small business or hobbyist production CPU,
            best workstation CPU, best overall, most fun to overclock, and most
            disappointing.
          </Paragraph>
          <TextAlign center>
            <YoutubeVideo {...state} innerRef={videoRef} id="VDZQCcDMcfw" />
          </TextAlign>
          <Paragraph>
            This content is intended to be a simpler buyer’s guide to the best
            CPUs in 2020 (so far). We’re not going to run this one as data-heavy
            as our reviews, so if you’re after really detailed information and
            all the charts and CPU benchmarks possible, check the individual
            reviews. This round-up will offer the only form of shortcut we ever
            publish, helping to cut through the heart of the hours of content
            we’ve published over the last few months.
          </Paragraph>
          <Paragraph>
            Recent reviews will be linked below to help get to more details.
            CPUs are linked to retailers, from whom we may receive a commission
            for the sale, as is standard at this point. Our reviews and
            recommendations aren’t influenced by this. A few charts will be
            included from various reviews, but some may be from older content
            and so might not be ‘compatible’ between test methodologies for
            direct comparison chart-to-chart. For that, you’ll want to see the
            standalone reviews.
          </Paragraph>
          <SubHeader nohover>
            Resources: Recent Reviews for More Depth
          </SubHeader>
          <Paragraph>
            If you want additional resources on any individual CPU, including a
            more data-centric approach, we’ve linked our reviews below. Note
            that some are video-only right now.
            <List>
              <ListItem>
                <OutsideLink href="https://www.youtube.com/watch?v=csFwlKgZCzM">
                  Intel i5-10400 CPU Review (YouTube)
                </OutsideLink>
              </ListItem>
              <ListItem>
                <OutsideLink href="https://www.youtube.com/watch?v=iQVBlCfb72M">
                  Intel i5-10600K CPU Review (YouTube)
                </OutsideLink>
              </ListItem>
              <ListItem>
                <OutsideLink href="https://www.youtube.com/watch?v=vbHyF50m-rs">
                  Intel i5-10600K Tuning Guide (YouTube)
                </OutsideLink>
              </ListItem>
              <ListItem>
                <OutsideLink href="https://www.youtube.com/watch?v=_UMMPjqLe8g">
                  Intel i7-10700K CPU Review (YouTube)
                </OutsideLink>
              </ListItem>
              <ListItem>
                <OutsideLink href="https://www.youtube.com/watch?v=_UMMPjqLe8g">
                  Intel i9-10900K CPU Review (article)
                </OutsideLink>
                <OutsideLink href="https://www.youtube.com/watch?v=yYvz3dObHws">
                  (YouTube)
                </OutsideLink>
              </ListItem>
            </List>
            On the AMD side, we’ve recently looked at:
            <List>
              <ListItem>
                <OutsideLink href="https://www.youtube.com/watch?v=csFwlKgZCzM">
                  AMD Ryzen 3 3100 CPU Review (article)
                </OutsideLink>
                <OutsideLink href="https://www.youtube.com/watch?v=V4nQpXVTh0g">
                  (Youtube)
                </OutsideLink>
              </ListItem>
              <ListItem>
                <OutsideLink href="https://www.gamersnexus.net/hwreviews/3581-amd-ryzen-3-3300x-cpu-review-vs-3100-clock-for-clock">
                  AMD Ryzen 3 3300X CPU Review (article)
                </OutsideLink>
                <OutsideLink href="https://www.youtube.com/watch?v=NM2fFpzPKPg">
                  (Youtube)
                </OutsideLink>
              </ListItem>
              <ListItem>
                <OutsideLink href="https://www.youtube.com/watch?v=Sq0OHhRQwA8">
                  AMD Ryzen 3 3300X GPU bottleneck limits (YouTube)
                </OutsideLink>
              </ListItem>
              <ListItem>
                <OutsideLink href="https://www.youtube.com/watch?v=slWK-1MqerU">
                  AMD Threadripper 3990X CPU Review (YouTube)
                </OutsideLink>
              </ListItem>
              <ListItem>The rest were posted in late 2019</ListItem>
            </List>
          </Paragraph>
          <SubHeader data-value="202" onClick={handleSetTime}>
            3:22 | Best Gaming CPU - Intel i5-10600K
          </SubHeader>
          <Paragraph>
            Buy the
            <OutsideLink href="https://www.amazon.com/s?k=intel+i5-10600k&tag=gamersnexus01-20&ref=nb_sb_noss_2">
              Intel i5-10600K on Amazon
            </OutsideLink>
            .
          </Paragraph>
          <BarChart
            data={data}
            margin={{ top: 70, right: 150, bottom: 80, left: 250 }}
            colors={["#4285F4", "#E06666", "#F6B26B"]}
            keys={["AVG FPS", "1% Low", "0.1% Low"]}
            bottomLabel="onPresent Frames Per Second (higher is better/more consistent)"
            bottomFormat={(tick: string) => `${tick}.0`}
            height="1300px"
            maxValue={180}
            title="GN CPU BenchMark | Total War: Three Kingdoms Campaign | 1080p/High |
              GamersNexus.net"
            subtitle="EVGA RTX 2080 Ti XC Ultra, GSkill Trident Z 4x8GB 3200 CL14, 1600W EVGA
              T2, 280 CLC DT, 360 HEDT"
          />
        </TextAlign>
      </Article>
    </>
  );
};

export default GuidesArticle3589;
