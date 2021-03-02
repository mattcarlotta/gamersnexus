import Article from "~components/Layout/Article";
import Center from "~components/Layout/Center";
import Flex from "~components/Layout/Flex";
import Paragraph from "~components/Layout/Paragraph";
import PostMeta from "~components/Layout/PostMeta";
import TextAlign from "~components/Layout/TextAlign";
import Tag from "~components/Layout/Tag";
import Link from "~components/Navigation/Link";

const NewsPage = (): JSX.Element => (
  <Center>
    <Article>
      <Flex>
        <Tag>HW News</Tag>
      </Flex>
      <Flex direction="column" padding="10px">
        <Link
          normal
          fontsize="30px"
          href="/news/3643/hw-news-rx-6700-xt-3dfx-voodoo"
        >
          AMD RX 6700 XT Announcment, 3DFX Voodoo Mod, Hardware Unboxed YT
          Issues
        </Link>
        <TextAlign left>
          <PostMeta username="Eric Hamilton" views={0} showViews />
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
            reviewed Nvidia’s RTX 3060, Fractal’s Meshify 2 case, and revisited
            the GTX 960 in 2021.
          </Paragraph>
          <Paragraph>
            As always, video embed and article follow below.
          </Paragraph>
        </TextAlign>
      </Flex>
    </Article>
  </Center>
);

export default NewsPage;
