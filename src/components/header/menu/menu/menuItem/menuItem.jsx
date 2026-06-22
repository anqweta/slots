export default function MenuItem({props}) {
    return (
        <li className="menu__item">
            <a href="">
                {props.link}
            </a>
        </li>
    )
}