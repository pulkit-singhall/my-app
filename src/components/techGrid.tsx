export default function TechGrid({ title }:
    {
        title: string
    }) {
    return (
        <div
            className="rounded-xl border-[1px] border-gray-100">
            <p
                className="text-white text-1xl px-3 py-1">
                {title}
            </p>
        </div>
    )
}