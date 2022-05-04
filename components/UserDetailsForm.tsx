import { useForm, SubmitHandler } from "react-hook-form";
import styled from "@emotion/styled";

const FormContaier = styled.form`
	display: flex;
	flex-direction: column;
`;

type FormInput = {
	name: string;
	number: string;
	firstLine: string;
	secondLine: string | null;
	thirdLine: string | null;
	city: string;
	county: string | null;
	postcode: string;
	country: string;
};

const UserDetailsForm = () => {
	const { register, handleSubmit } = useForm<FormInput>();
	const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

	return (
		<FormContaier onSubmit={handleSubmit(onSubmit)}>
			<label>Name</label>
			<input
				type="text"
				value="Ash"
				{...register("name", { required: true, maxLength: 20 })}
			/>
			<label>Contact Number</label>
			<input type="tel" {...register("number", { maxLength: 11 })} />
			<label>First Line</label>
			<input type="text" {...register("firstLine", { required: true })} />
			<label>Second Line</label>
			<input type="text" {...register("secondLine")} />
			<label>Third Line</label>
			<input type="text" {...register("thirdLine")} />
			<label>City</label>
			<input type="text" {...register("city", { required: true })} />
			<label>County</label>
			<input type="text" {...register("county")} />
			<label>Postcode</label>
			<input type="text" {...register("postcode", { required: true })} />
			<label>Country</label>
			<input type="text" {...(register("country"), { required: true })} />
			<input type="submit" />
		</FormContaier>
	);
};

export default UserDetailsForm;
