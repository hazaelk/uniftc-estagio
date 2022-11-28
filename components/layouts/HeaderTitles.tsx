interface TitleProps {
    title: string;
    subtitle?: string;
}
export default function HeaderTitles(props: TitleProps) {
    return (
        <section className="flex flex-col items-center mt-16">
                <h1 className="text-white font-bold text-4xl">{props.title}</h1>
                <h5 className="text-gray-300 mt-1 mb-10 text-sm">{props.subtitle}</h5>
            </section>
    )
}