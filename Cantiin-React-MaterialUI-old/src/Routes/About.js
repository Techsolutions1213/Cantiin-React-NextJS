import React, {useEffect, useContext} from "react";
import Typography from "@mui/material/Typography";
import { TitleContext } from "../Contexts/Title";

export default function About() {



	const {setHeaderTitle, headerTitle} = useContext(TitleContext);
	useEffect(()=>{
		setHeaderTitle("About");
	}, [headerTitle]);


	return (
		<>
			<Typography paragraph>
    
	Github Repository: 
	<a href="https://github.com/OmarThinks/Cantiin-React-MaterialUI">https://github.com/OmarThinks/Cantiin-React-MaterialUI</a>
			</Typography>
		</>
	);
}