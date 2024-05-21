import utilStyles from "../../../public/styles/utils.module.css";
import AddOnsCheckbox from "./addOnsCheckbox";

export default function PickAddOns({ addOns, setAddOns, yearly }) {
	const checkboxData = [
		{
			isChecked: addOns["Financias"],
			title: "Financias",
			description: "BBAS3, ITUB4, XP, SANB11, BBDC4, CIEL3 e entre outras.",
			price: 1,
		},
		{
			isChecked: addOns["Comércio Varejista"],
			title: "Comércio Varejista",
			description: "MGLU3, BHIA3, AMER3, ARZZ3, PETZ3 e entre outras.",
			price: 2,
		},
		{
			isChecked: addOns["Minerais Energéticos"],
			title: "Minerais Energéticos",
			description: "PETR4, VALE3, EGIE3, CVX, ENEV3 e entre outras.",
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
