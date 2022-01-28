import React, {useEffect, useContext} from "react";
import Typography from "@mui/material/Typography";
import { TitleContext } from "../../Contexts/Title";

export default function CreateProduct() {

	const {setHeaderTitle, headerTitle} = useContext(TitleContext);
	useEffect(()=>{
		setHeaderTitle("Create Product");
	}, [headerTitle]);

	return (
		<>
			<Typography paragraph>
    Create Product
			</Typography>
		</>
	);
}
