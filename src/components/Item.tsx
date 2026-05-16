import { type Link } from "./Link";

export default function Item({ name, url, icon }: Link): React.JSX.Element {
    return (
        <a href={url}>
            <div className="rounded-full bg-primary/50 h-15 w-15">
                <img src={icon} alt={name} />
            </div>
            {name}
        </a>
    );
}
