import React from "react";
import List from "@mui/material/List";
import { Routes, Route,      Link, useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const DrawerList = ({listItems})=>{
	let navigate = useNavigate();
	return (
		<List>
			{
    
    
				listItems.map(({linkText,icon, link}, index) => (
    
					<ListItem button key={linkText} onClick={()=>{navigate(link, { replace: true });}}>
						<ListItemIcon>
							{icon}
						</ListItemIcon>
						<ListItemText primary={linkText} />
					</ListItem>
    
				))}
		</List>);
};


export default DrawerList;