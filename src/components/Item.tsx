import {ItemType} from "ItemType"

export default function Item({name, url, image}: ItemType): React.JSX.Element {
	return <a href={url}>
			{name}
		</a>
}
