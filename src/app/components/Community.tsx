export const Community = () => {

    return (
        <div className="bg-teal-700 py-16 sm:py-16">
            {/* @ts-expect-error */}
            <a name="community" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-teal-400">About us</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-teal-100 sm:text-5xl">
                        Community
                    </p>
                    <p className="mt-4 text-lg leading-8 text-gray-300">
                        You can easily contact us through social media:
                    </p>
                    <div className="flex w-full justify-center gap-8 mt-10">
                        <a className="cursor-pointer opacity-80 hover:opacity-100" target="_blank" href={process.env.TWITTER_URL}>
                            <img src='/twitter.webp' />
                        </a>
                        <a className="cursor-pointer opacity-80 hover:opacity-100" target="_blank" href={process.env.TELEGRAM_URL}>
                            <img src='/telegram.webp' />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}