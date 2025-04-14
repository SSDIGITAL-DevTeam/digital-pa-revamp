export default function ButtonCategory ({ cat }: { cat: string }):JSX.Element {
    return (
        <button className="absolute top-5 right-5 py-2 px-6 rounded-sm bg-white font-semibold shadow-sm md:text-base text-sm">{cat}</button>
    )
}