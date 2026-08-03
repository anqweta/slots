function handleClick(this: string) {
}

export default function Select() {

    //const { handleThemeValue } = useContext(ChangeThemeContext);


    return (
        <select name="select" id="choseTheme" onChange={handleClick}>
            <option value="pink">Pink</option>
            <option value="dark">Dark</option>
        </select>
    );
}
