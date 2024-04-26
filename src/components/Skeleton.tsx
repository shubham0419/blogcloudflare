
export function Skeleton() {
    return (
        <div>
            <div className="flex justify-center pt-4">
                <div className="w-screen max-w-lg pb-3 border-b border-slate-200">
                    <div className="relative flex w-64 animate-pulse gap-2 pb-2">
                        <div className="h-5 w-5 rounded-full bg-slate-400"></div>
                        <div className="flex-1">
                            <div className="mb-1 h-3 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                        </div>
                    </div>
                    <div className="mb-3 h-5 w-[50%] rounded-lg bg-slate-400 text-sm"></div>
                    <div className="mb-3 h-5 w-full rounded-lg bg-slate-400 text-sm"></div>
                    <div className="h-2 w-[20%] rounded-lg bg-slate-400 text-sm"></div>
                </div>
            </div>
        </div>
    )
}