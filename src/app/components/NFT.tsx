function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const NFT = () => {

    return (
        <div className="bg-teal-800 py-16 sm:py-16">
            {/* @ts-expect-error */}
            <a name="#nft" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-teal-400">Collection is comming!</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-teal-100 sm:text-5xl">
                        NFT Collection
                    </p>
                    <p className="mt-4 text-lg leading-8 text-gray-300">
                        Stay tuned! Give us some time and we are going to deliver coolest cat NFT collection in the world!
                    </p>
                </div>

                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {[0, 1, 2].map((tier, index) => (
                        <div
                            key={index}
                            className={classNames(
                                'ring-2 ring-teal-600',
                                'rounded-3xl p-8 xl:p-10',
                                ' bg-teal-700'
                            )}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <p className='text-center w-full'>?</p>
                            </div>

                        </div>
                    ))}
                </div>
                <div className='text-center my-8 mt-16 opacity-50'>
                    <a
                        aria-disabled="true"
                        className="rounded-md bg-green-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                    >
                        Mint cool cat NFT!
                    </a>
                    <p className='pt-4 text-xs'>
                        Still not available!
                    </p>
                </div>
            </div>
        </div >
    )
}