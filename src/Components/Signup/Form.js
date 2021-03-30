import Logo from "../Logo"

const Form = () => {


    return(
        <form>
            <div className="form-header">
                <span class="logo">
                    <a href="/" class="site-logo" aria-label="Twiths Home">
                        <Logo />
                    </a>
                </span>
                <div class="field__label">
                    <span class="header_w">Write a new post</span>
                </div>
                <div class="crayons-article-form__tabs crayons-tabs ml-auto">
                    <button type="button" class="crayons-tabs__item crayons-tabs__item--current">Edit</button>
                    <button type="button" class="crayons-tabs__item false">Preview</button>
                </div>
                <div class="crayons-article-form__close">
                    <button class="crayons-btn crayons-btn--ghost crayons-btn--icon" type="button">
                        <svg width="24" height="24" viewBox="0 0 24 24" class="crayons-icon" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="as1mn15llu5e032u2pgzlc6yhvss2myk">
                            <title id="as1mn15llu5e032u2pgzlc6yhvss2myk">Close the editor</title>
                            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path>
                        </svg>
                    </button>
                </div>
            </div>
          
        </form>
    )
}

export default Form