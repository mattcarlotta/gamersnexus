import * as React from "react";
import { useRouter } from "next/router";
import Article from "~components/Layout/Article";
import EmbedTweet from "~components/Layout/EmbedTweet";
import ImageContainer from "~components/Layout/ImageContainer";
import Paragraph from "~components/Layout/Paragraph";
import PlayButton from "~components/Layout/PlayButton";
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

const NewsArticle3642 = (): JSX.Element => {
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
        title="AMD on USB Dropout Issues, Intel i5-11600K Leaks, NVIDIA vs. Mining"
      />
      <Article padding="20px 40px" direction="column">
        <Flex direction="column">
          <Title>
            AMD on USB Dropout Issues, Intel i5-11600K Leaks, NVIDIA vs. Mining
          </Title>
          <PostMeta
            username="Eric Hamilton"
            views={0}
            date={String(new Date(2021, 2, 1, 3, 30, 0, 0))}
            showViews
          />
          <Tags types={["AMD", "Intel", "Nvidia", "Mining", "Hardware"]} />
        </Flex>
        <ImageContainer src="/images/amd.jpg" alt="amd.jpg" />
        <TextAlign left>
          <Paragraph>
            It&apos;s been an interesting week or so for hardware and technology
            news alike, with Nvidia and LastPass making waves. Nvidia is
            attempting to stem the flow of GPUs to miners by artificially
            limiting the hashing power of its upcoming RTX 3060 GPUs, as well as
            announcing its new CMP HX line of dedicated mining cards.
          </Paragraph>
          <Paragraph>
            LastPass, makers of the popular LastPass password manager, have
            announced some abrupt and contentious changes to its free plan, much
            to the chagrin of its users.
          </Paragraph>
          <Paragraph>
            At GN, we recently looked at various
            <OutsideLink href="https://www.youtube.com/watch?v=Iqv4meZcVEk&ab_channel=GamersNexus">
              Xbox Series X thermals
            </OutsideLink>
            , including memory, SoC, and VRM temperatures. We also
            <OutsideLink href="https://www.youtube.com/watch?v=xCxqITPtXXA&ab_channel=GamersNexus">
              reviewed the Arctic Liquid Freezer II 420 AIO
            </OutsideLink>
            , and discovered that frequently entering &quot;Arctic 420&quot;
            into search engines makes for some interesting targeted ads that
            aren’t about CPU cooling.
          </Paragraph>
          <TextAlign center>
            <YoutubeVideo {...state} innerRef={videoRef} id="2YNR-xggKt0" />
          </TextAlign>
          <SubHeader id="amd-usb-dropout">
            AMD Working on USB Dropout Issues
          </SubHeader>
          <PlayButton title="01:57" onClick={handleSetTime} />
          <Paragraph>
            AMD recently made a public post acknowledging USB dropout issues
            that its user-base has complained of for several months now. While
            we’ve only lightly looked into the issue, we haven’t yet encountered
            it -- but most of our usage is for review or benchmarking purposes,
            and so we may not necessarily get the exposure required to see the
            problem occur. The short of it, if you’re out of the loop, is that
            some users are experiencing USB device disconnection when using Zen
            3 CPUs with some combination of 500-series motherboards and Gen4
            GPUs (depending on the board). The issue can be as relatively
            harmless as a mouse dropout or as harmful as an external drive
            disconnection.
          </Paragraph>
          <Paragraph>In its post, AMD said:</Paragraph>
          <Paragraph>
            <Quote>
              AMD is aware of reports that a small number of users are
              experiencing intermittent USB connectivity issues reported on 500
              Series chipsets. We have been analyzing the root cause and at this
              time, we would like to request the community’s assistance with a
              small selection of additional hardware configurations. Over the
              next few days, some r/Amd users may be contacted directly by an
              AMD representative (u/AMDOfficial) via Reddit’s PM system with a
              request for more information.
              <br />
              <br />
              This request may include detailed hardware configurations, steps
              to reproduce the issue, specific logs, and other system
              information pertinent to verifying our development efforts. We
              will provide an update when we have more details to share.
              Customers facing issues are always encouraged to raise an Online
              Service Request with AMD customer support; this enables us to find
              correlations and compare notes across support claims.
            </Quote>
          </Paragraph>
          <Paragraph>
            Source:
            <OutsideLink href="https://www.reddit.com/r/Amd/comments/lnmet0/an_update_on_usb_connectivity_with_500_series/">
              https://www.reddit.com/r/Amd/comments/lnmet0/an_update_on_usb_connectivity_with_500_series/
            </OutsideLink>
          </Paragraph>
          <SubHeader id="nvidia">
            NVIDIA Cuts Off Miners & RTX 3060 News
          </SubHeader>
          <PlayButton title="04:47" onClick={handleSetTime} />
          <Paragraph>
            A few days ahead of the official launch for Nvidia’s
            highly-anticipated GeForce RTX 3060, Nvidia has announced that it is
            artificially halving the hash rate for RTX 3060 GPUs. Nvidia will be
            doing this on the software side, via firmware and drivers, but did
            not offer any explicit details on how exactly it’s going to limit
            the cards for crypto mining.
          </Paragraph>
          <Paragraph>
            Nvidia has seemingly -- and finally -- drawn a line in the sand to
            separate gaming and mining, in an attempt to placate gamers and also
            address the cryptocurrency market properly. NVIDIA is reviving its
            CMP line for mining specifically, with NVIDIA asserting that this
            line “doesn’t impact availability to GeForce GPUs to gamers” because
            the GPUs fell below requirements for gaming.
          </Paragraph>
          <Paragraph>
            Nvidia’s new CMP HX line is being billed as a dedicated GPU
            for&nbsp;
            <strong>professional</strong> mining. The cards will feature no
            video outputs or graphics, will have lower peak core voltage and
            frequencies, and are aimed at being more efficient. NVIDIA has sold
            these in the past. Without display output, the second-hand market
            and ability to scalp beat-up cards for high prices is effectively
            killed (unless selling to other miners), so these are still less
            desirable to miners than the gaming cards are.
          </Paragraph>
          <Paragraph>
            NVIDIA’s statements of isolating CMP from gaming would align with a
            possibility of using reject gaming silicon, like if a card can’t hit
            the targeted gaming frequencies. Whether or not that’s reality is
            another question -- it’s likely that silicon could have been used
            for some kind of gaming card.
          </Paragraph>
          <Paragraph>
            Nvidia’s CMP HX line will consist of four models, at least
            initially: the Nvidia CMP 30HX, 40HX, 50HX, and 90HX. TDPs will
            vary, going up to 320W, with VRAM ranging from 6GB to 10GB and hash
            rates between 26 MH/s and 86 MH/s.
          </Paragraph>
          <Paragraph>
            The CMP cards will be available from Nvidia’s partners (Asus,
            Colorful, EVGA, Gigabyte, MSI, Palit, PC Partner) and will see a
            staggered launch between Q1’2021 and Q2’2021. Prices are currently
            TBA.
          </Paragraph>
          <Paragraph>
            Source:
            <OutsideLink href="https://blogs.nvidia.com/blog/2021/02/18/geforce-cmp/">
              https://blogs.nvidia.com/blog/2021/02/18/geforce-cmp/
            </OutsideLink>
            <br />
            Source:
            <OutsideLink href="https://www.nvidia.com/en-us/cmp/">
              https://www.nvidia.com/en-us/cmp/
            </OutsideLink>
            <br />
          </Paragraph>
          <SubHeader id="lastpass">LastPass Cuts-Down Free Options</SubHeader>
          <PlayButton title="06:06" onClick={handleSetTime} />
          <Paragraph>
            LastPass has been among the most popular password managers for years
            now, having largely built that reputation on the value and usability
            of its free service tier.
          </Paragraph>
          <Paragraph>
            LastPass announced that, beginning March 16th, 2021, users of the
            free service will only have unlimited access on one device type:
            computer or mobile.
          </Paragraph>
          <Paragraph>
            <Quote>
              As a Free user, your first login on or after March 16th will set
              your active device type. You’ll have three opportunities to switch
              your active device type to explore what’s right for you. Please
              note that all of your devices sync automatically, so you’ll never
              lose access to anything stored in your vault or be locked out of
              your account, regardless of whether you use computer or mobile
              devices to access LastPass,” says the company in a blog post.
              <br />
              <br />
              Additionally, users of LastPass Free will no longer have access to
              email support, instead having to rely on the LastPass Support
              Center. According to the company, the LastPass Support Center “has
              a robust library of self-help resources available 24/7 plus access
              to our LastPass Community, which is actively monitored by LastPass
              specialists.
            </Quote>
          </Paragraph>
          <Paragraph>
            LastPass is obviously hoping to push users towards its premium
            service, which costs $3/month, although taking something away is
            always harder than giving it out to begin with.
          </Paragraph>
          <Paragraph>
            Source:
            <OutsideLink href="http://blog.lastpass.com/2021/02/changes-to-lastpass-free/">
              http://blog.lastpass.com/2021/02/changes-to-lastpass-free/
            </OutsideLink>
            <br />
            Source:
            <OutsideLink href="https://www.theverge.com/2021/2/16/22285531/lastpass-free-tier-mobile-computer-device-premium-family">
              https://www.theverge.com/2021/2/16/22285531/lastpass-free-tier-mobile-computer-device-premium-family
            </OutsideLink>
          </Paragraph>
          <SubHeader id="zotac">
            Zotac Boasts About Mining Crypto, GN is Mean
          </SubHeader>
          <PlayButton title="08:58" onClick={handleSetTime} />
          <Paragraph>
            A few days ago, GN’s Steve clicked “retweet” on a Zotac tweet
            showing a partner’s limited edition RTX 30-series cards mining
            crypto. Upon retweeting, GN said, “Retweeted without further
            commentary.” That’s all we did, and within a few hours, the tweet
            was deleted.
          </Paragraph>
          <Paragraph>
            Amid power outages in the US and global GPU stock limitations, Zotac
            had its work cut out for it.
          </Paragraph>
          <Paragraph>
            Making matters worse was Zotac’s cringey use of hashtags, which
            included #PCMR, #PCGaming, and the dankest of all, “#Gamer.” You
            know, because those would be the appropriate hashtags for gamers who
            can’t get a gaming GPU right now.
          </Paragraph>
          <Paragraph>
            The tweet went over about as well as you’d expect, although surely
            not as well as Zotac was hoping. Many users erupted in anger and
            frustration over the tweet, and as usual with these things, the
            tweet wasn’t long for this world, with Zotac doing a 180 and
            deleting the tweet.
          </Paragraph>
          <Paragraph>
            Source:
            <EmbedTweet id="1361957544529387521" user="GamersNexus" />
          </Paragraph>

          <SubHeader id="intel-vs-amd">
            Intel i5-11600K Benchmark Leaks vs. AMD
          </SubHeader>
          <PlayButton title="10:42" onClick={handleSetTime} />
          <Paragraph>
            We don’t cover too many performance rumors, but this latest one is
            close enough to launch that it’s worth throwing out there (if for no
            other reason than to see if it comes true in about a month).
          </Paragraph>
          <Paragraph>
            A new Geekbench score on a Gigabyte Z490 motherboard reports a 6220
            multi-core score and 1565 single-thread score for a processor listed
            as an Intel i5-11600K, which is marked as a 6-core, 12-thread
            variant at 3.9 to 4.9GHz, although this doesn’t reveal boosting
            behaviors. We don’t particularly like Geekbench as a benchmark in
            general or as an indicator of performance overall, but it does have
            some comparative value. The scoring combines floating point
            operation performance analysis, cryptography scores, and integer
            performance, and calculated an aggregate number based on about 21
            tests. Gaming isn’t fully represented here, but things like physics,
            encryption, text and PDF processing, and image compression make up
            parts of the score.
          </Paragraph>
          <Paragraph>
            The current scoring has the pre-release, alleged 11600K below
            <OutsideLink href="https://browser.geekbench.com/processors/amd-ryzen-5-5600x">
              a 5600X entry
            </OutsideLink>
            in both multi-core and single-core. In the early state of Intel’s
            CPU -- assuming this is legitimate -- there’s maybe still some time
            to get a few points back, but pricing will be the ultimate
            determining factor between these two. Of course, gaming-only
            performance will also be important to test.
          </Paragraph>
          <Paragraph>
            We’re aware that there were leaks about Alder Lake this past week,
            but until we’re closer to launch, we feel it’d be most responsible
            to hold on coverage until it’s more solidified.
          </Paragraph>
          <Paragraph>
            Source:
            <OutsideLink href="ttps://browser.geekbench.com/v5/cpu/6584431">
              https://browser.geekbench.com/v5/cpu/6584431
            </OutsideLink>
          </Paragraph>
        </TextAlign>
      </Article>
    </>
  );
};

export default NewsArticle3642;
