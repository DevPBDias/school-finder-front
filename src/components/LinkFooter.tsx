type INavBtn = {
    route: string,
    text: string,
}

function LinkFooter({ route, text }: INavBtn) {
    return (
        <a href={`/${route}`}>
            {text}
        </a>
    )
}

export default LinkFooter