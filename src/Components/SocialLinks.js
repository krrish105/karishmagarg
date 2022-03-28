// Component that contains my Social Media Links
export default function SocialLinks({classes}){
    return(
        <div className={classes}>
            <a href="https://github.com/Krrish105" target="_blank">
                <img src="images/github.svg" alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/karishma-garg-/" target="_blank">
                <img src="images/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://twitter.com/_karishma10" target="_blank">
                <img src="images/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://codepen.io/krrish105" target="_blank">
                <img src="images/codepen.svg" alt="Codepen" />
            </a>
        </div>
    );
}