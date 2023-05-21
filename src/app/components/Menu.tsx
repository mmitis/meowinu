const navigation = [
  {
    name: "Swap MeowInu", href: `https://www.sushi.com/swap?fromChainId=42161&fromCurrency=NATIVE&toChainId=42161&toCurrency=${process.env.COIN_ADDRESS}&amount=`
  },
  { name: "History", href: "#history" },
  { name: "Community links", href: "#community" },
  { name: "Plans", href: "#timeline" },
  { name: "NFT", href: "#nft" },
  { name: "About", href: "#stats" },
];

export const Menu = () => {
  return (
    <header className="fixed z-10 top-0 w-full bg-gray-400 bg-opacity-30">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="text-teal-100 font-extrabold" style={{
            fontSize: '24px',
          }}>
            Meow<strong className="text-teal-200">Inu</strong>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-100"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href={`https://www.sushi.com/swap?fromChainId=42161&fromCurrency=NATIVE&toChainId=42161&toCurrency=${process.env.COIN_ADDRESS}&amount=`}
            className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
          >
            Swap MeowInu!
          </a>
        </div>
      </nav>
    </header>
  );
};
