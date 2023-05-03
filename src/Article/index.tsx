export interface IArticleProps {
    text: string[]
}

interface ArticleProps {
    payload: IArticleProps;
}

export default function Article({ payload }: ArticleProps) {
    const { text } = payload;

    console.log(text)

    return <>
        {text.map((value, index) => {
            return <li key={index} className="article-trim">
                <article className="article">
                    {value}
                </article>
            </li>
        })}
    </>
}