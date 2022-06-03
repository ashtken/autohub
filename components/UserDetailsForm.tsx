import { useForm, SubmitHandler } from "react-hook-form";
import styled from "@emotion/styled";
import { useState } from "react";
import { User } from "../pages/account";

const FormContaier = styled.form`
	display: flex;
	flex-direction: column;
`;

const UserDetailsForm = ({ user }: { user: User }) => {
	const [userData, setUserData] = useState(user);

	const { register, handleSubmit } = useForm<User>();
	const onSubmit: SubmitHandler<User> = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>Name</label>
			<input {...register("name", { required: true })} />
			<label>Contact Number</label>
			<input type="tel" {...register("contactNumber", { maxLength: 11 })} />
			<label>First Line</label>
			<input
				type="text"
				{...register("address.0.firstLine", { required: true })}
			/>
			<label>Second Line</label>
			<input type="text" {...register("address.0.secondLine")} />
			<label>Third Line</label>
			<input type="text" {...register("address.0.thirdLine")} />
			<label>City</label>
			<input type="text" {...register("address.0.city", { required: true })} />
			<label>County</label>
			<input type="text" {...register("address.0.county")} />
			<label>Postcode</label>
			<input
				type="text"
				{...register("address.0.postcode", { required: true })}
			/>
			<label>Country</label>
			<input
				type="text"
				{...(register("address.0.country"), { required: true })}
			/>
			<input type="submit" />
		</form>
	);
};

export default UserDetailsForm;
