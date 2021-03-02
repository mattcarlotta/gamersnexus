import * as React from "react";
import Router from "next/router";
import Article from "~components/Layout/Article";
import Button from "~components/Layout/Button";
import Center from "~components/Layout/Center";
import Flex from "~components/Layout/Flex";
import ImageContainer from "~components/Layout/ImageContainer";
import MaskPreview from "~components/Layout/MaskPreview";
import Paragraph from "~components/Layout/Paragraph";
import PostMeta from "~components/Layout/PostMeta";
import TextAlign from "~components/Layout/TextAlign";
import Link from "~components/Navigation/Link";
import Header from "~components/Navigation/Header";

const NewsPage = (): JSX.Element => (
  <>
    <Header url="/news" title="News" />
    <Center>
      <Article>
        <Flex>
          <Link
            tag
            stopPropagation
            borderradius="0"
            height="100%"
            padding="20px 10px"
            href="/news/hardware"
          >
            HW News
          </Link>
        </Flex>
        <Button
          transparent
          padding="10px 15px"
          texttransform="none"
          type="button"
          onClick={() =>
            Router.push("/news/3643/hw-news-rx-6700-xt-3dfx-voodoo")
          }
        >
          <Flex direction="column" padding="10px">
            <Link
              normal
              fontsize="30px"
              href="/news/3643/hw-news-rx-6700-xt-3dfx-voodoo"
            >
              AMD RX 6700 XT Announcment, 3DFX Voodoo Mod, Hardware Unboxed YT
              Issues
            </Link>
            <PostMeta
              username="Eric Hamilton"
              views={0}
              date={String(new Date(2021, 2, 1, 3, 30, 0, 0))}
              showViews
            />
            <ImageContainer src="/images/gfxCard.jpg" alt="gfxCard.jpg" />
            <MaskPreview>
              <TextAlign left>
                <Paragraph>
                  This week, we have a lot of general industry news pertaining
                  to the supply and manufacturing of semiconductors. There’s
                  news on how the drought in Taiwan is affecting chipmakers,
                  Europe looking to establish a certain amount of semiconductor
                  self-reliance, and some discussion on interconnects limiting
                  chip scaling.
                </Paragraph>
                <Paragraph>
                  We also have news on the AMD RX 6700 XT, Fry’s Electronics
                  ceasing operations, HP acquiring HyperX, and more. At GN, we
                  recently reviewed Nvidia’s RTX 3060, Fractal’s Meshify 2 case,
                  and revisited the GTX 960 in 2021.
                </Paragraph>
                <Paragraph>
                  As always, video embed and article follow below.
                </Paragraph>
              </TextAlign>
            </MaskPreview>
          </Flex>
        </Button>
      </Article>
      <Article>
        <Flex>
          <Link
            tag
            stopPropagation
            borderradius="0"
            height="100%"
            padding="20px 10px"
            href="/news/hardware"
          >
            HW News
          </Link>
        </Flex>
        <Button
          transparent
          padding="10px 15px"
          texttransform="none"
          type="button"
          onClick={() =>
            Router.push("/news/3643/hw-news-rx-6700-xt-3dfx-voodoo")
          }
        >
          <Flex direction="column" padding="10px">
            <Link
              normal
              stopPropagation
              fontsize="30px"
              href="/news/3642/hw-news-amd-usb-dropout-disconnection-response-intel-11600k"
            >
              AMD on USB Dropout Issues, Intel i5-11600K Leaks, NVIDIA vs.
              Mining
            </Link>
            <PostMeta
              username="Eric Hamilton"
              views={0}
              date={String(new Date(2021, 2, 1, 3, 30, 0, 0))}
              showViews
            />
            <ImageContainer src="/images/amd.jpg" alt="amd.jpg" />
            <MaskPreview>
              <TextAlign left>
                <Paragraph>
                  It&quot;s been an interesting week or so for hardware and
                  technology news alike, with Nvidia and LastPass making waves.
                  Nvidia is attempting to stem the flow of GPUs to miners by
                  artificially limiting the hashing power of its upcoming RTX
                  3060 GPUs, as well as announcing its new CMP HX line of
                  dedicated mining cards.
                </Paragraph>
                <Paragraph>
                  LastPass, makers of the popular LastPass password manager,
                  have announced some abrupt and contentious changes to its free
                  plan, much to the chagrin of its users.
                </Paragraph>
                <Paragraph>
                  At GN, we recently looked at various Xbox Series X thermals,
                  including memory, SoC, and VRM temperatures. We also reviewed
                  the Arctic Liquid Freezer II 420 AIO, and discovered that
                  frequently entering &quot;Arctic 420&quot; into search engines
                  makes for some interesting targeted ads that aren’t about CPU
                  cooling.
                </Paragraph>
              </TextAlign>
            </MaskPreview>
          </Flex>
        </Button>
      </Article>
    </Center>
  </>
);

export default NewsPage;
