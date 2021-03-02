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
import OutsideLink from "~components/Navigation/OutsideLink";

const GuidesPage = (): JSX.Element => (
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
            href="/guides/hardware"
          >
            HW Guides
          </Link>
        </Flex>
        <Button
          transparent
          padding="10px 15px"
          texttransform="none"
          type="button"
          onClick={() =>
            Router.push(
              "/guides/3589/best-cpus-of-2020-so-far-gaming-production-overclocking-budget"
            )
          }
        >
          <Flex direction="column" padding="10px">
            <Link
              normal
              fontsize="30px"
              fontweight="600"
              href="/guides/3589/best-cpus-of-2020-so-far-gaming-production-overclocking-budget"
            >
              Best CPUs of 2020 So Far (Gaming, Workstation, Overclocking
              Round-Up)
            </Link>
            <PostMeta
              username="Steve Burke"
              avatar="steveBurke"
              views={0}
              date={String(new Date(2020, 5, 28, 2, 49, 0, 0))}
              showViews
            />
            <ImageContainer src="/images/hwGuide.jpg" alt="hwGuide.jpg" />
            <MaskPreview>
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
                  , and more rumored on the horizon, we wanted to round-up all
                  of our recent testing into one concise piece for people
                  looking for recommendations on the best CPU for different
                  tasks. We’ve published several hours’ worth of content in the
                  form of reviews, tuning, and follow-up coverage, so if you
                  want the full details and depth for anything check those
                  pieces. We’ll be focusing more on firm recommendations for
                  each category in this video and less on the deeper details,
                  with our categories including: Best gaming CPU, best budget
                  gaming CPU, best small business or hobbyist production CPU,
                  best workstation CPU, best overall, most fun to overclock, and
                  most disappointing.
                </Paragraph>
              </TextAlign>
            </MaskPreview>
          </Flex>
        </Button>
      </Article>
    </Center>
  </>
);

export default GuidesPage;
