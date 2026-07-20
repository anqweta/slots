interface MenuItemProps {
    props: {
        link: string;
    };
}

export default function MenuItem({props}: MenuItemProps) {
    return (
        <li className="menu__item">
            <a href="">
                {props.link}
            </a>
        </li>
    )
}
