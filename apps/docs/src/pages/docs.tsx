import { type ReactElement } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'iconoir-react'
import { Animator, Animated, Text, BleepsOnAnimator, aa, aaFlicker } from '@arwes/react'
import type { BleepNames } from '@app/types'
import { PageContentLayout, Button } from '@app/ui'

const Page = (): ReactElement => {
  return (
    <Animator combine manager="stagger">
      <style jsx global>{`
        .badges {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .badges img {
          display: block;
          margin: 0 0.5rem 0.5rem 0;
        }

        @media (min-width: 600px) {
          .badges {
            display: inline-grid;
            grid-auto-flow: column;
            grid-template-columns: auto;
            grid-template-rows: auto;
            gap: 0.5rem;
          }

          .badges img {
            margin: 0;
          }
        }
      `}</style>

      <PageContentLayout animated={aa('y', 12, 0)}>
        <Animator>
          <Text as="h1" fixed>
            Futuristic Sci-Fi UI Web Framework
          </Text>
          <BleepsOnAnimator<BleepNames> transitions={{ entering: 'content' }} continuous />
        </Animator>
        <Animator>
          <Animated as="hr" animated={aa('scaleX', 0, 1)} />
        </Animator>
        <Animator>
          <Animated className="badges" data-arwes-global-block animated={aaFlicker()}>
            <a href="https://npmjs.org/package/arwes" target="_blank">
              <img src="https://img.shields.io/npm/v/arwes.svg?style=flat-square" alt="Version" />
            </a>
            <a href="https://github.com/arwes/arwes/actions" target="_blank">
              <img
                src="https://github.com/arwes/arwes/workflows/ci/badge.svg?style=flat-square"
                alt="CI"
              />
            </a>
            <a href="https://www.codefactor.io/repository/github/arwes/arwes">
              <img
                src="https://www.codefactor.io/repository/github/arwes/arwes/badge"
                alt="CodeFactor"
              />
            </a>
            <a href="https://github.com/arwes/arwes" target="_blank">
              <img
                src="https://img.shields.io/github/stars/arwes/arwes.svg?style=flat-square&label=stars"
                alt="Github Stars"
              />
            </a>
            <a href="https://npmjs.org/package/arwes" target="_blank">
              <img
                alt="npm"
                src="https://img.shields.io/npm/dm/arwes?label=installs&style=flat-square"
              />
            </a>
            <a href="https://x.com/arwesjs" target="_blank">
              <img
                src="https://img.shields.io/twitter/follow/arwesjs?style=social"
                alt="Follow on X"
              />
            </a>
            <a href="https://discord.gg/s5sbTkw" target="_blank">
              <img
                src="https://img.shields.io/badge/Discord-Join_Us?style=flat-square&logo=discord&logoColor=%2356F&color=%23505050"
                alt="Discord"
              />
            </a>
            <a href="https://github.com/arwes/arwes/blob/main/LICENSE" target="_blank">
              <img
                src="https://img.shields.io/github/license/arwes/arwes.svg?maxAge=2592000&style=flat-square"
                alt="License"
              />
            </a>
          </Animated>
        </Animator>
        <Animator>
          <Text>
            Arwes is a web framework to build user interfaces based on futuristic science fiction
            designs, animations, and sound effects. The concepts behind are opinionated with
            influences from{' '}
            <a href="https://aesthetics.fandom.com/wiki/Cyberprep" target="_blank">
              Cyberprep
            </a>{' '}
            and{' '}
            <a href="https://en.wikipedia.org/wiki/Synthwave" target="_blank">
              Synthwave
            </a>
            , and productions like{' '}
            <a href="http://robertsspaceindustries.com" target="_blank">
              Star Citizen
            </a>
            ,{' '}
            <a href="https://www.halowaypoint.com" target="_blank">
              Halo
            </a>
            , and{' '}
            <a href="http://www.imdb.com/title/tt1104001" target="_blank">
              TRON: Legacy
            </a>
            . It tries to inspire advanced science and technology.
          </Text>
        </Animator>
        <Animator>
          <Animated as="blockquote">
            <Text>
              The project is under development and not ready for production yet. It is still in{' '}
              <a href="https://stackoverflow.com/questions/40067469" target="_blank">
                alpha release
              </a>
              , so the components are being tested and their API may change as it gets completed.
            </Text>
          </Animated>
        </Animator>
        <Animator>
          <Animated as="blockquote">
            <Text>
              <a href="https://github.com/arwes/arwes/tree/main" target="_blank">
                Branch main
              </a>{' '}
              is for <code>@alpha</code> version releases and public content deployed at{' '}
              <a href="https://arwes.dev" target="_blank">
                arwes.dev
              </a>
              .
              <br />
              <a href="https://github.com/arwes/arwes/tree/next" target="_blank">
                Branch next
              </a>{' '}
              is for <code>@next</code> version releases and active development deployed at{' '}
              <a href="https://next.arwes.dev" target="_blank">
                next.arwes.dev
              </a>
              .
            </Text>
          </Animated>
        </Animator>
        <Animator>
          <Text>
            The framework is delivered for the web platform as{' '}
            <a href="https://www.npmjs.com">NPM</a> packages in the <code>@arwes/[package]</code>{' '}
            scope for ESModules and CommonJS formats in JavaScript ES2022 version with strict{' '}
            <a href="https://www.typescriptlang.org" target="_blank">
              TypeScript
            </a>{' '}
            v5+ type definitions.
          </Text>
        </Animator>
        <Animator>
          <Text>
            Latest version of Chrome, Firefox, and Safari, for Android, iOS and desktop are
            supported. Server-side rendering with Node.js v20+ is supported. There are custom APIs
            for <a href="https://react.dev">React.js</a> v18+ which can be used with tools like{' '}
            <a href="https://nextjs.org">Next.js</a> and <a href="https://remix.run">Remix</a>.
          </Text>
        </Animator>
        <Animator>
          <Text>
            Since sci-fi UIs normally have very particular aesthetics with custom visual workflows
            and user experiences, the tools offered are currently "low/medium level APIs", which
            means that the framework does not provide an entire set of UI components for a common
            web app but rather a set of primitives, utilities, and base components to build a design
            system.
          </Text>
        </Animator>

        <nav style={{ marginTop: '3rem', display: 'flex', justifyContent: 'right' }}>
          <Animator>
            <Link href="/docs/develop">
              <Button
                frame="hexagon"
                animated={[aaFlicker(), aa('x', -12, 0)]}
                onHoverAnimateIcons
                tabIndex={-1}
                title="Get started"
              >
                <span>Develop</span>
                <ArrowRight />
              </Button>
            </Link>
          </Animator>
        </nav>
      </PageContentLayout>
    </Animator>
  )
}

export default Page
