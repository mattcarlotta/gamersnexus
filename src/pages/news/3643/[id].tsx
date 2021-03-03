import * as React from "react";
import { useRouter } from "next/router";
import Article from "~components/Layout/Article";
import EmbedTweet from "~components/Layout/EmbedTweet";
import ImageContainer from "~components/Layout/ImageContainer";
import Paragraph from "~components/Layout/Paragraph";
import PostMeta from "~components/Layout/PostMeta";
import Flex from "~components/Layout/Flex";
import Quote from "~components/Layout/Quote";
import SubHeader from "~components/Layout/SubHeader";
import TextAlign from "~components/Layout/TextAlign";
import Header from "~components/Navigation/Header";
import Tags from "~components/Layout/Tags";
import Title from "~components/Layout/Title";
import OutsideLink from "~components/Navigation/OutsideLink";
import YoutubeVideo from "~components/Layout/YoutubeVideo";
import { ChangeEvent } from "~types";

export interface NewsArticleState {
  autoPlay: number;
  startTime: number;
}

const NewsArticle3643 = (): JSX.Element => {
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
        title="AMD RX 6700 XT Announcement, 3DFX Voodoo Mod, Hardware Unboxed YT Issues"
      />
      <Article padding="20px 40px" direction="column">
        <Flex direction="column">
          <Title>
            AMD RX 6700 XT Announcment, 3DFX Voodoo Mod, Hardware Unboxed YT
            Issues
          </Title>
          <PostMeta
            username="Eric Hamilton"
            views={0}
            date={String(new Date(2021, 2, 1, 3, 30, 0, 0))}
            showViews
          />
          <Tags types={["AMD", "GPUs", "Video Cards", "Hardware", "Youtube"]} />
        </Flex>
        <ImageContainer src="/images/gfxCard.jpg" alt="gfxCard.jpg" />
        <TextAlign left>
          <Paragraph>
            This week, we have a lot of general industry news pertaining to the
            supply and manufacturing of semiconductors. There’s news on how the
            drought in Taiwan is affecting chipmakers, Europe looking to
            establish a certain amount of semiconductor self-reliance, and some
            discussion on interconnects limiting chip scaling.
          </Paragraph>
          <Paragraph>
            We also have news on the AMD RX 6700 XT, Fry’s Electronics ceasing
            operations, HP acquiring HyperX, and more. At GN, we recently
            reviewed
            <OutsideLink href="https://www.youtube.com/watch?v=3C-RoDtqdJ8">
              Nvidia’s RTX 3060
            </OutsideLink>
            ,
            <OutsideLink href="https://www.youtube.com/watch?v=94l1c5dMRX8">
              Fractal’s Meshify 2 case
            </OutsideLink>
            ,
            <OutsideLink href="https://www.youtube.com/watch?v=rPRqlg6l1ls">
              and revisited the GTX 960 in 2021
            </OutsideLink>
            .
          </Paragraph>
          <Paragraph>
            As always, video embed and article follow below.
          </Paragraph>
          <TextAlign center>
            <YoutubeVideo {...state} innerRef={videoRef} id="IPxKmKA7V5o" />
          </TextAlign>
          <SubHeader id="cats-angels" data-value="71" onClick={handleSetTime}>
            01:11 | Quick GN x Cat Angels Update
          </SubHeader>
          <Paragraph>
            With all the bad news lately -- not just in tech, but in general --
            we wanted to open on a positive note here. Any of you who’ve been
            watching us for a while now know that we work with a few charity
            organizations every year, often in the form of charity auctions or
            limited shirts where the revenue goes toward them. We often work
            with a local no-kill cat shelter that we’ve personally visited
            (called Cat Angels), Eden Reforestation Projects, Adelaide Koala &
            Wildlife Hospital (around $20K donated from the shirt drive after
            the bushfires!), and a couple of others.
          </Paragraph>
          <Paragraph>
            Cat Angels is by far the smallest out of all the charities we’ve
            worked with and they sent us some photos and an update this week.
            They’re in a hole-in-the-wall shopping center with volunteer staff
            so that all the money goes toward caring for, rescuing, and
            adopting-out rescued cats and kittens. GN and its community raised a
            lot of money for all these groups last year, but the impact is
            disproportionately huge for Cat Angels. They emailed us out of the
            blue this week to tell us that some of our viewers have visited to
            adopt cats and kittens and that they’ve received donations from all
            over the world since we started working with them for our Cat-themed
            PC build for the shelter in 2019. Cat Angels was telling us that
            they always know when the donations are from our community because
            they’re not just local. They said the following:
          </Paragraph>
          <Paragraph>
            <Quote>
              Hi Stephen, I just wanted to check in after the holidays and send
              very special thanks to you and your community. Because GamersNexus
              community members have sent us so many gifts AND have been
              applying to adopt from us, we have been able to rescue and adopt
              out more kitties recently. Here is an update on a few. We are
              incredibly grateful for your support. Even your smallest mentions
              garner a huge impact on Cat Angels.
            </Quote>
          </Paragraph>
          <Paragraph>
            We’ll put the rest of the email up on the screen in the video in
            case you want to pause and read it. It’s some wholesome news that
            this community can be proud of, in between all the bickering about
            which GPU vendor is the most evil at any given time.
          </Paragraph>
          <SubHeader
            id="amd-rx-6700xt"
            data-value="252"
            onClick={handleSetTime}
          >
            04:12 | AMD RX 6700 XT Official Announcement Announced
          </SubHeader>
          <Paragraph>
            AMD’s RX 6700 XT GPU announcement was officially announced by AMD’s
            Radeon twitter page, marking March 3rd as the launch date for the
            card. The 6700 XT will be the fourth installation into the RX 6000
            lineup, preceded most recently by the RX 6900 XT at $1000, then the
            6800 XT at $700 and RX 6800 at $570. The RX 6700 XT shown had a
            revised dual-axial reference design that will supposedly exist,
            although AMD has occasionally created renders for partner-only
            launches. Regardless, the render will continue to exist for as long
            as Nintendo doesn’t know about it.
          </Paragraph>
          <Paragraph>
            The RX 6700 XT announcement announcement said the card will be
            revealed at 11AM Eastern on March 3rd, but “reveal” and “launch” are
            different -- it’s likely the launch will be later.
          </Paragraph>
          <Paragraph>
            Source:
            <EmbedTweet id="1364636388453470210" user="Radeon" />
          </Paragraph>
          <SubHeader
            id="hardware-unboxed"
            data-value="350"
            onClick={handleSetTime}
          >
            05:50 | Hardware Unboxed Shadowbanned on YouTube
          </SubHeader>
          <Paragraph>
            This next topic is more of a YouTube platform issue, but it affects
            someone in our community. Hardware Unboxed recently posted on its
            community page about a shadowban that YouTube has put in place as a
            result of “suspicious activity.” The Hardware Unboxed YouTube
            Community page has the full details, but we spoke with Steve and Tim
            and are also in contact with our own YouTube rep to try and help
            with this issue. Since Hardware Unboxed is limited in its ability to
            reach its own audience right now, we wanted to bring some light to
            this issue and try to reach their audience on their behalf.
          </Paragraph>
          <Paragraph>
            If you’re not aware of what’s going on, HUB’s videos are (at time of
            filming) not visible on the YouTube search results page, in
            notifications, or in the recommended feed, and is only available
            directly via the videos page. This also happened right when Steve
            from HUB tried to take a vacation, so we personally feel for how
            stressful this must be and how it’s ruining his break. He’ll need
            another vacation after this one.
          </Paragraph>
          <Paragraph>
            HUB said that this is a YT protection mechanism to try and protect
            the channel from “suspicious activity.” HUB has noted that it has
            confidence in its account security and has asked YouTube for
            specifics on the “suspicious activity” so that it can investigate
            further, but YouTube has thus far been slow and unhelpful in its
            correspondence. We’ve seen some lunatics on reddit jumping to some
            really crazy conspiracy theories, and just to be clear, this is
            almost certainly a matter of an automated YouTube process doing what
            it thinks is right. We’ve been on the receiving end of that as well.
            The problem isn’t that it happened, because this is actually a good
            and valuable protection mechanism (and a better alternative than
            being shut-down entirely), but the real problem is that YouTube has
            such slow and generally unhelpful support for creators. It always
            seems like no one knows what’s going on at YouTube, probably because
            of how big the company is and how much of it is automated.
          </Paragraph>
          <Paragraph>
            Rest assured that HUB’s team seems to be in contact with the right
            people and that they have others in the tech creator community
            looking out for them. This is very much a “who’s next?” situation
            and is exactly the kind of thing we are here to help with. It looks
            like they’re holding publication on videos until this is resolved,
            as almost no one will see them. This has nuked channel performance,
            as expected, and is a terrifying reminder of what it’s like to live
            on someone else’s platform. For us, it’s meant a wakeup call that we
            really need to find the time to spec-out and fix our old website to
            get it operational again. It’s funny, too, because one of the reddit
            comments was exactly about how this type of action on large
            platforms would encourage a 90s-era re-boom in internet publishing.
            I guess we can throw this out there while we’re at it: We’re not
            ready yet, but if you’re a particularly talented web developer who
            would be able to get our charts working in a non-PNG format in
            articles, we’d love to talk to you. We might not reply to all
            inquiries and will apologize in advance.
          </Paragraph>
          <Paragraph>
            In the meantime, be sure to check HUB’s twitter feed and YT
            Community page for updates.
          </Paragraph>
          <Paragraph>
            Source:
            <OutsideLink href="https://www.youtube.com/c/Hardwareunboxednow/community">
              https://www.youtube.com/c/Hardwareunboxednow/community
            </OutsideLink>
            <br />
            Source:
            <EmbedTweet id="1365161458321948674" user="HardwareUnboxed" />
          </Paragraph>
        </TextAlign>
      </Article>
    </>
  );
};

export default NewsArticle3643;
