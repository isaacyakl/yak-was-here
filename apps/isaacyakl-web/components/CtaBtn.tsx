import Link from "next/link";
import EmailLink from "./EmailLink";

function CtaBtn({ text = "Contact me", href = "" }) {
    const generateBtn = () => {
        if (href === "") {
            return (
                <EmailLink>
                    <button className="btn cta-arrow w-full py-2 text-center select-none">{text}</button>
                </EmailLink>
            );
        }
        return (
            <Link href={href} passHref>
                <button className="btn cta-arrow w-full py-2 text-center select-none">{text}</button>
            </Link>
        );
    };

    return generateBtn();
}

export default CtaBtn;
