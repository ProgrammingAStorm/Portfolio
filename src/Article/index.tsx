export interface IArticleProps {
    text: string[]
}

interface ArticleProps {
    payload: IArticleProps;
}

export default function Article({ payload }: ArticleProps) {
    return <>
        {payload.text.map(value => {
            return <li className="article-trim">
                <article className="article">
                    {value}
                </article>
            </li>
        })}
    </>
}