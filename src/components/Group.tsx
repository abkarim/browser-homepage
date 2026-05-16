import Item from "./Item"

interface Props {
	name: string;
}

export default function Group({name}: Props): React.JSX.Element {
	return <section>
			<h6>{name}</h6>
			<div>
				<Item name={"Item 1"} url={"#"} icon="" />		
			</div>
		</section>
}
