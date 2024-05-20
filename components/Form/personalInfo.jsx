import utilStyles from "../../public/styles/utils.module.css";
import personalStyles from "../../public/styles/PersonalInfo.module.css";

export default function PersonalInfo({
	personalInfo,
	setPersonalInfo,
	validForm,
}) {
	function handleNameChange(e) {
		setPersonalInfo({
			...personalInfo,
			name: e.target.value,
		});
	}
	function handleEmailChange(e) {
		setPersonalInfo({
			...personalInfo,
			email: e.target.value,
		});
	}
	function handlePhoneNumberChange(e) {
		setPersonalInfo({
			...personalInfo,
			phoneNumber: e.target.value,
		});
	}

	function getError(validator) {
		if (!validator)
			return (
				<span className={utilStyles.error}>
					{validator === undefined
						? "Esse campo é obrigatório"
						: "Formato inválido"}
				</span>
			);
	}

	return (
		<>
			<h1 className={`${utilStyles.title} ${utilStyles.colorText}`}>
				Informações pessoais
			</h1>
			<fieldset className={utilStyles.noBorder}>
				<legend className={utilStyles.description}>
					Por favor, preencha os dados abaixo.
				</legend>
				<label
					htmlFor="name"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Nome</span>
						{getError(validForm.hasValidName)}
						{console.log(validForm.hasValidName)}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidName && utilStyles.containerError
						}`}
						type="text"
						value={personalInfo.name}
						onChange={handleNameChange}
						placeholder="Digite o seu nome"
						id="name"
						name="name"
						maxLength={32}
					/>
				</label>
				<label
					htmlFor="email"
					className={`${personalStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Email</span>
						{getError(validForm.hasValidEmailAddress)}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidEmailAddress &&
							utilStyles.containerError
						}`}
						type="email"
						value={personalInfo.email}
						onChange={handleEmailChange}
						placeholder="Digite o seu email"
						id="email"
						name="email"
					/>
				</label>
				<label
					htmlFor="phoneNumber"
					className={`
					${personalStyles.label}
					 ${utilStyles.colorText}`}
				>
					{" "}
					<div className={personalStyles.labelContainer}>
						<span>Número de telefone</span>
						{getError(validForm.hasValidPhoneNumber)}
					</div>
					<input
						className={`${personalStyles.inputOne} ${
							!validForm.hasValidPhoneNumber &&
							utilStyles.containerError
						}`}
						type="tel"
						placeholder="Digite o seu telefone"
						value={personalInfo.phoneNumber}
						onChange={handlePhoneNumberChange}
						id="phoneNumber"
						name="phoneNumber"
					/>
				</label>
			</fieldset>
		</>
	);
}
