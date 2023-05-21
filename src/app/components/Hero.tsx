import { ChevronRightIcon } from "@heroicons/react/20/solid";

export const Hero = () => {
  return (
    <div className="isolate overflow-hidden bg-teal-900 w-full md:h-[120vh]">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80ffdf] to-[#39c6ac] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-16 sm:mt-16 lg:mt-16">
            <a href="#stats" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-teal-400 ring-1 ring-inset ring-teal-500/20">
                We are live
              </span>
              <a href="#timeline" className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                <span>Check our timeline</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </a>
            </a>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Put pounce on profits.
            <span className="text-green-400"> Meow-nificent</span> crypto
            revolution is coming !
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            The <span className="text-green-400">MeowInu</span> project aims to
            introduce real meme soldiers to the Arbitrum ecosystem through fun!
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              target="_blank" href={`https://www.sushi.com/swap?fromChainId=42161&fromCurrency=NATIVE&toChainId=42161&toCurrency=${process.env.COIN_ADDRESS}&amount=`}
              className="rounded-md bg-green-500 px-7 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
            >
              Swap MeowInu!
            </a>
          </div>
          <div className="flex w-full justify-between gap-8 mt-10">
            <a className="opacity-20" target="_blank">
              <img src='/cmc.webp' />
            </a>
            <a className="opacity-80 hover:opacity-100" target="_blank" href={`https://www.sushi.com/swap?fromChainId=42161&fromCurrency=NATIVE&toChainId=42161&toCurrency=${process.env.COIN_ADDRESS}&amount=`}>
              <img src='/sushiswap.webp' />
            </a>
            <a className="opacity-80 hover:opacity-100" target="_blank" href={`https://arbiscan.io/address/${process.env.COIN_ADDRESS}`}>
              <img src='/arbiscan.webp' />
            </a>
          </div>
        </div>
        <div className="hidden md:flex mx-auto mt-16 max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-8">
          <div className=" max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img src="/heroimage.png" />
          </div>
        </div>

      </div>
    </div >
  );
};
