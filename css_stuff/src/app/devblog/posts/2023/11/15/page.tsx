import Link from "next/link"

export default function FirstPost () {
    return (
        <div className="white p1">
            <h1 className="postHead">I'm Unemployed</h1>
            <br />
            <p>Between January 1st 2022 and January 1st 2023, Dish Network's Stock value fell more than 55%.</p>
            <p>In February 2023, Dish Network was hacked, and lost a huge deal of its internal infrastructure. </p>
            <p>In November 2023, Dish Network's CEO announced he was resigning, and their stock plunged to its 25-Year Low.</p>
            <p>On November 8th 2023, Dish laid off 500 of its Colorado employees.</p>
            <p>I was one of those employees.</p>
            <br />
            <p>Bummer.</p>
            <br />
            <h2 className="postHead">So what now?</h2>
            <br />
            <p>
                First, I'd like to enjoy some genuine time off. This will be tricky, because I'm in the Unites States, and being unemployed here is treated with about 
                the same kindness as being an arsonist.
            </p>
            <p>
                At the same time, I genuinely enjoy web development and programming, and I don't want my skills to get rusty, so I'm starting on a few different side projects. This 
                is one of them.
            </p>
            <p>
                My intention for this page it to be a Front-End-Only project, with no database or users or any of that. Even this blog, which I'm only including in this project 
                because I was stuck by the desire to journal and didn't have another place for it, is going to be a part of the actual page build, not stored on a database.
            </p>
            <p>
                Instead, I want to use this page to experiment with, and improve with, different tools I have for front-end design. This will mean trying new things with CSS (and 
                by extension, Sass), using JS to control styling, and potentially more.
            </p>
            <p>
                I'll also be using to to experiment with a variety of page layouts and designs. I am not a designer, I'm a devloper, so a lot of my stuff starting out may be 
                derivitive. For example, the Navbar and color scheme of this page is all ripped wholecloth from <Link className="white" href='https://www.dropout.tv' prefetch={false}>https://dropout.tv</Link>.
            </p>
            <p>
                I'm also apparently going to include a Dev Blog, judging by the fact that I'm writing a blog post literally in this very moment.
            </p>
            <br />
            <h2 className="postHead">Then what?</h2>
            <br />
            <p>
                I have several other project ideas and starting points. I want to make a project that I fully host on AWS. I want to make an Idle Game. I want to make an Finance App. 
                I want to put an App on the Google Play Store. I want to make a chat program. I want to make a text editor. I want to make my own NPM library.
            </p>
            <p> 
                I want to continue to improve as a developer. Right now that means continuing to improve particularly with JS. This will mean doing Algos again.
            </p>
            <p>
                I also have some rudimentary skill with C#, and would like to improve there as well.
            </p>
            <br />
            <h2 className="postHead">That's lovely, but I mean what will you do for money?</h2>
            <br />
            <p>
                Nothing immediate.
            </p>
            <p>
                Right now, I'm receiving severance pay until 2024. After that, I may go on unemployment, I don't know, I've never done that before.
            </p>
            <p>
                Either way, I've also been saving money for years and years, and so even when the severance stops, I'll still be financially stable for all of 2024, assuming I 
                continue spending at approximately the same rate month over month.
            </p>
            <p>
                I have several contacts within the industry, including recruiters. I'll reach out to them at some point before my severance ends.
            </p>
            <p> 
                But for now, I'm sleeping well, eating well, exercising daily, honing my skills, and enjoying myself.
            </p>
            <p>
                Capitalism can wait.
            </p>
        </div>
    )
}