import * as React from "react";
import { useRouter } from "next/router";
import Article from "~components/Layout/Article";
import BarChart from "~components/Layout/BarChart";
import Flex from "~components/Layout/Flex";
import ImageContainer from "~components/Layout/ImageContainer";
import Paragraph from "~components/Layout/Paragraph";
import PostMeta from "~components/Layout/PostMeta";
import List from "~components/Layout/List";
import ListItem from "~components/Layout/ListItem";
import PlayButton from "~components/Layout/PlayButton";
import SubHeader from "~components/Layout/SubHeader";
import Tags from "~components/Layout/Tags";
import TextAlign from "~components/Layout/TextAlign";
import Title from "~components/Layout/Title";
import YoutubeVideo from "~components/Layout/YoutubeVideo";
import Header from "~components/Navigation/Header";
import OutsideLink from "~components/Navigation/OutsideLink";
import twdata from "~data/TWData";
import f1data from "~data/F1Data";
import gtadata from "~data/GTAData";
import trdata from "~data/TRData";
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
            description={`I started GamersNexus back when it was just a cool name, and now it's grown into an expansive website with an overwhelming amount of features. He recalls his first difficult decision with GN's direction: "I didn't know whether or not I wanted 'Gamers' to have a possessive apostrophe -- I mean, grammatically it should, but I didn't like it in the name. It was ugly. I also had people who were typing apostrophes into the address bar - sigh. It made sense to just leave it as 'Gamers.'" First world problems, Steve. First world problems.`}
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
          <SubHeader id="resources">
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
          <SubHeader id="best-gaming-cpu">
            Best Gaming CPU - Intel i5-10600K
          </SubHeader>
          <PlayButton title="03:22" onClick={handleSetTime} />
          <Paragraph>
            Buy the
            <OutsideLink href="https://www.amazon.com/s?k=intel+i5-10600k&tag=gamersnexus01-20&ref=nb_sb_noss_2">
              Intel i5-10600K on Amazon
            </OutsideLink>
            .
          </Paragraph>
          <BarChart
            data={twdata}
            margin={{ top: 100, right: 150, bottom: 80, left: 250 }}
            colors={["#4285F4", "#E06666", "#F6B26B"]}
            keys={["AVG FPS", "1% Low", "0.1% Low"]}
            bottomLabel="onPresent Frames Per Second (higher is better, more consistent is best)"
            bottomFormat={(tick: string) => `${tick}.0`}
            height="1400px"
            title="GN CPU BenchMark | Total War: Three Kingdoms Campaign | 1080p/High |
              GamersNexus.net"
            subtitle="EVGA RTX 2080 Ti XC Ultra, GSkill Trident Z 4x8GB 3200 CL14, 1600W EVGA
              T2, 280 CLC DT, 360 HEDT"
          />
          <BarChart
            data={f1data}
            margin={{ top: 100, right: 150, bottom: 80, left: 250 }}
            colors={["#4285F4", "#E06666"]}
            keys={["AVG FPS", "1% Low"]}
            padding={0.2}
            bottomLabel="onPresent Frames Per Second (higher is better, more consistent is best)"
            bottomFormat={(tick: string) => `${tick}.0`}
            height="1400px"
            title="GN CPU BenchMark | F1 2019 1080p/High | GamersNexus.net"
            subtitle="EVGA RTX 2080 Ti XC Ultra, GSkill Trident Z 4x8GB 3200 CL14, 1600W EVGA
              T2, 280 CLC DT, 360 HEDT"
          />
          <Paragraph>
            Intel’s new
            <OutsideLink href="https://www.amazon.com/s?k=intel+i5-10600k&tag=gamersnexus01-20&ref=nb_sb_noss_2">
              Intel Core i5-10600K on Amazon
            </OutsideLink>
            is the one we’re giving “Best Gaming,” despite the 10900K running
            higher performance stock. We have good reasons, the first of which
            is that it can achieve 10900K levels of performance with an
            overclock, particularly when considering the inevitable GPU
            bottleneck in many games. That’s not to discredit the 10900K, but
            we’ll come back to that.
          </Paragraph>
          <Paragraph>
            The 10600K is a genuine leap for Intel, which has been stuck for
            multiple generations on unsellable i5 CPUs. This one, we think,
            redeems the i5 lineup and is the most compelling buy for someone
            heavily focused on gaming performance, maybe even with a minor,
            non-daily focus on video production, 3D modeling, or similar.
            Although the R5 3600 may be more well-rounded, particularly at its
            price-point, the 10600K is often within 4-5% of production-level
            performance of the 3600, while managing potentially significantly
            higher framerates. The 3600 is plenty capable to game, but if you
            really only care about gaming and don’t use workstation
            applications, the 10600K makes the most sense.
          </Paragraph>
          <Paragraph>
            The 10600K combines well with Z490 for its overclocking support,
            discussed later, and is a good tuning base that can reach
            performance levels AMD can’t yet claim. Further, regarding the
            common misconception that AMD Ryzen CPUs are somehow “smoother” or
            “more consistent” in frametime delivery, our data doesn’t support
            that. The 10600K is higher in average FPS and also outmatches
            similarly priced Ryzen CPUs for frametime consistency, with overall
            few excursions from the interval n-1. Our criteria for the best
            gaming CPU includes price, but also absolute performance and ability
            to tune. In this regard, the 10600K can achieve 10900K stock
            performance in most games, and can be tuned until both hit a GPU
            limit. Until more threads are needed in games, this will be true in
            most cases, and so we give the 10600K our nod for best gaming CPU,
            particularly impressive at its price. Intel did well here to get
            back in the game, but it’s not uncontested. AMD still has a long way
            to go to compete head-to-head with Intel for the gaming crown.
          </Paragraph>
          <SubHeader id="best-budget-gaming-cpu">
            Best Budget Gaming CPU - AMD R3 3300X
          </SubHeader>
          <PlayButton title="06:15" onClick={handleSetTime} />
          <Paragraph>
            Buy the
            <OutsideLink href="https://www.amazon.com/AMD-8-Thread-Unlocked-Desktop-Processor/dp/B0876YS2T4?tag=gamersnexus01-20">
              AMD Ryzen 3 3300X on Amazon
            </OutsideLink>
            .
          </Paragraph>
          <BarChart
            data={gtadata}
            margin={{ top: 100, right: 150, bottom: 80, left: 250 }}
            colors={["#4285F4", "#E06666", "#F6B26B"]}
            keys={["AVG FPS", "1% Low", "0.1% Low"]}
            bottomLabel="onPresent Frames Per Second (higher is better, more consistent is best)"
            bottomFormat={(tick: string) => `${tick}.0`}
            height="1400px"
            title="GN CPU BenchMark | GTA V | 1080p/VH-Ultra, Extended Distance, High Detail Streaming |
              GamersNexus.net"
            subtitle="EVGA RTX 2080 Ti XC Ultra, GSkill Trident Z 4x8GB 3200 CL14, 1600W EVGA
              T2"
          />
          <Paragraph>
            Next up, our recommendation for Best Budget Gaming CPU. Where we
            might recommend the Intel i5-10600K for gaming with less restrictive
            of a budget, or the 10900K for the absolute peak of FPS for the few
            competitively privileged enough to really need it, we’d recommend
            something else for more budget-conscious gamers. The{" "}
            <OutsideLink href="https://www.amazon.com/AMD-8-Thread-Unlocked-Desktop-Processor/dp/B0876YS2T4?tag=gamersnexus01-20">
              AMD Ryzen 3 3300X
            </OutsideLink>
            gets that recommendation. This CPU, with its pricing at $120 MSRP,
            is able to achieve 80-85% of the performance of higher-end CPUs in
            most games. It’s significantly better than the $100 3100 thanks to
            its 4+0 CCX configuration, rather than the 2+2 CCX configuration of
            the 3100, where cross-CCX latency affects performance. The 3300X,
            critically, can also be coupled with nearly any current generation
            video card without significant bottlenecking on the CPU for higher
            graphics settings. This becomes less true if you care more about low
            graphics, high-FPS competitive gaming, at which point our
            recommendation will shift toward the Intel parts. If you want more
            of a GPU-bind, though, meaning higher graphics settings and
            potentially resolutions higher than 1080p, GPU will rapidly become
            more limiting than the CPU, and so the 3300X makes sense as a
            starting point on the platform.
          </Paragraph>
          <BarChart
            data={trdata}
            margin={{ top: 100, right: 150, bottom: 80, left: 250 }}
            colors={["#4285F4", "#E06666", "#F6B26B"]}
            keys={["AVG FPS", "1% Low", "0.1% Low"]}
            bottomLabel="onPresent Frames Per Second (higher is better, more consistent is best)"
            bottomFormat={(tick: string) => `${tick}.0`}
            height="1400px"
            title="GN CPU BenchMark | Shadow of the Tomb Raider | 1080p/Medium, DX12 |
              GamersNexus.net"
            subtitle="EVGA RTX 2080 Ti XC Ultra, GSkill Trident Z 4x8GB 3200 CL14, 1600W EVGA
              T2, 280 CLC DT, 360 HEDT"
          />
          <Paragraph>
            We’ve been flashing through some of our bottleneck charts, and you
            can check the previous content on that for more information on which
            GPUs make the most sense. Although we absolutely do not recommend
            coupling a $1200 2080 Ti with a $120 CPU, you could do it and get at
            least half the performance in most scenarios. The 2080 Super is
            about the peak for full performance, but something more reasonably
            priced makes more sense since GPUs are often easier to upgrade than
            CPUs. Either way, the 3300X offers plenty of room. If you want to
            get more out of it, look into our coverage with memory tuning and
            infinity fabric overclocking for AMD Ryzen CPUs. That’ll get you
            more mileage and increase FPS headroom.
          </Paragraph>
          <Paragraph>
            Honorable mention: As an honorable mention, we’ll point out the
            <OutsideLink href="https://www.amazon.com/AMD-4-Thread-Unlocked-Processor-Graphics/dp/B0815JGFQ8?tag=gamersnexus01-20">
              Athlon 3000G
            </OutsideLink>
            . This is a good stopgap measure if you’re playing simpler games
            with less of a graphics slant. We’ve tested this one a lot over the
            years, so we’ll leave it as an honorable mention and just note that
            you can watch our previous content to get an idea of ideal use
            cases. It’s not what we’d call “good,” but it can certainly get you
            by if $100 on the CPU is out of reach.
          </Paragraph>
        </TextAlign>
      </Article>
    </>
  );
};

export default GuidesArticle3589;
