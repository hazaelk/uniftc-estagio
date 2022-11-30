interface TitleProps {
    title: string;
    subtitle?: string;
}
export default function HeaderTitles(props: TitleProps) {
    return (
        <section className="flex flex-col items-center">
                <h1 className="text-white whitespace-nowrap font-semibold text-sm xs:text-lg sm:text-2xl lg:text-4xl mt-6 transition-all">{props.title}</h1>
                <h5 className="text-gray-300 mt-2 text-sm mb-3 sm:mb-5 md:mb-6 lg:mb-10 md:text-base lg:text-lg transition-all">{props.subtitle}</h5>
        </section>
    )
}