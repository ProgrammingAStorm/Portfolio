import { Tilt } from 'react-tilt'

export interface IArticleProps {
    text: string[]
}

interface ArticleProps {
    payload: IArticleProps;
}

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           'x',   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function Article({ payload }: ArticleProps) {
    const { text } = payload;

    return <>
        {text.map((value, index) => {
            return <Tilt options={defaultOptions} style={{height: '100%'}}>
                <li key={index} className="article-trim">
                    <article className="article">
                        {value}
                    </article>
                </li>
            </Tilt>
        })}
    </>
}