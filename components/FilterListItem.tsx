interface FilterListItemProps {
    title: string;
}
export default function FilterListItem(props: FilterListItemProps) {
    return (
        <li>
            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                {props.title}
            </a>
        </li>
    )
}