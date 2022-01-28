import React, {useEffect, useContext} from "react";
import Typography from "@mui/material/Typography";
import { TitleContext } from "../Contexts/Title";

export default function Home() {


	const {setHeaderTitle, headerTitle} = useContext(TitleContext);
	useEffect(()=>{
		setHeaderTitle("Home");
	}, [headerTitle]);





	return (
		<>
			<Typography paragraph>
    Home
			</Typography>
		</>
	);
}
