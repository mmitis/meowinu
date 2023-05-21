const timeline = [
    {
        name: 'Coin created',
        description:
            'We have deployed contract and brand new meme coin! Do not wait and buy them to be a millionaire!',
        date: 'May 2023',
        dateTime: '2023-05',
    },
    {
        name: 'NFT Collection',
        description:
            'Collection of unique 150 NFT that will be hardly used in the app. Some of them are rare, some are common - you have to be lucky to mint Meow President NFT!',
        date: 'Jul 2023',
        dateTime: '2023-07',
    },
    {
        name: 'Stickers',
        description:
            'Everyone love stickers! Thats why we have planned to create collection of stickers that can be used across platforms like telegram',
        date: 'Aug 2023',
        dateTime: '2023-08',
    },
    {
        name: 'Catz&Dogz Apps',
        description:
            'One app to rule them all. Apps that allows you to battle other cats and earn new MeowCoins! Stay tuned!',
        date: 'Oct 2023',
        dateTime: '2023-10',
    },
]

export const Timeline = () => {
    return <div className="bg-teal-800 w-full py-8">
        {/* @ts-expect-error */}
        <a name="timeline" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 mt-16">
            <h2 className="text-4xl font-bold tracking-tight text-teal-50">
                What are our plans? Do we wanna rule the world? Yes.
            </h2>
            <p className="mt-4 text-teal-100 mb-12">
                At MeowInu, we believe that laughter is the best currency.
                We are thrilled to share our exciting plans for the future development of our MeowInu coin. Get ready to embark on a wild
                and hilarious journey as we take MeowInu to new heights! </p>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {timeline.map((item) => (
                    <div key={item.name}>
                        <time
                            dateTime={item.dateTime}
                            className="flex items-center text-sm font-semibold leading-6 text-white"
                        >
                            <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                <circle cx={2} cy={2} r={2} fill="currentColor" />
                            </svg>
                            {item.date}
                            <div
                                className="absolute -ml-2 h-px w-screen -translate-x-full bg-teal-200 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                aria-hidden="true"
                            />
                        </time>
                        <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-teal-100">{item.name}</p>
                        <p className="mt-1 text-base leading-7 text-teal-300">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
}