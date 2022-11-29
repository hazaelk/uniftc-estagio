interface TitleProps {
    title: string;
    subtitle?: string;
}
export default function HeaderTitles(props: TitleProps) {
    return (
        <section className="flex flex-col items-center">
                <h1 className="text-white font-bold text-4xl mt-8">{props.title}</h1>
                <h5 className="text-gray-300 my-5 text-sm sm:mb-10 md:mb-12 lg:mb-20">{props.subtitle}</h5>
        </section>
    )
}