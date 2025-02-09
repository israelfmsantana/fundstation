import utilStyles from "../../../public/styles/utils.module.css";
import AddOnsCheckbox from "./addOnsCheckbox";

export default function PickAddOns({ addOns, setAddOns, yearly }) {
	const checkboxData = [
		{
			isChecked: addOns["Financias"],
			title: "Financias",
			description: "Access to multiplayer games",
			price: 1,
		},
		{
			isChecked: addOns["Comércio Varejista"],
			title: "Comércio Varejista",
			description: "Extra 1TB of cloud save",
			price: 2,
		},
		{
			isChecked: addOns["Minerais Energéticos"],
			title: "Minerais Energéticos",
			description: "Custom theme on your profile",
			price: 2,
		},
	];
	function updateAddOns(nextAddOns, isChecked) {
		setAddOns({
			...addOns,
			[`${nextAddOns}`]: !isChecked,
		});
	}
	return (
		<>
			<h1 className={`${utilStyles.title} ${utilStyles.colorText}`}>
				Categorias de Ações
			</h1>
			<fieldset className={utilStyles.noBorder}>
				<p className="text-gray-700 my-8">
					Você pode escolher as categorias de ações para melhorar a sua experiência.
				</p>

				{checkboxData.map((c) => {
					return (
						<AddOnsCheckbox
							key={c.title}
							isChecked={c.isChecked}
							title={c.title}
							description={c.description}
							price={c.price}
							updateAddOns={updateAddOns}
							yearly={yearly}
						/>
					);
				})}
			</fieldset>
		</>
	);
}
