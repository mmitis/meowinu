const stats = [
    { id: 1, name: 'Transaction fee', value: '4%' },
    { id: 2, name: 'Max wallet', value: '10%' },
    { id: 3, name: 'Holders', value: 'Unlimited!' },
    { id: 4, name: 'Total supply', value: '18M' },
]

export const StatsCount = () => {
    return (
        <div className="bg-teal-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <a name="stats" />
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-base font-semibold leading-7 text-teal-400">
                            Some of the crucial stats about memecoin
                        </h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-teal-100 sm:text-5xl">
                            MeowCoin stats!                    </p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}