import Group from "./Group"

interface Props {
	name: string;
}

export default function Category({name}: Props): React.JSX.Element {
	return <section>
			<h5>{name}</h5>
			<div>
				<Group name="Test 1" />
			</div>
		</section>
}
