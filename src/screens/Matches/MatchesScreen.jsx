import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProfileCard from "../../components/matches/ProfileCard";

import * as userAPIS from "../../apis/users.apis";

const matchesData = [
	{
		id: 1,
		name: "John Doe",
		age: 28,
		location: "New York",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		id: 2,
		name: "Jane Smith",
		age: 25,
		location: "Los Angeles",
		imageUrl:
			"https://images.unsplash.com/photo-1497316730643-415fac54a2af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		id: 3,
		name: "Alice Johnson",
		age: 30,
		location: "Chicago",
		imageUrl:
			"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
	},
	{
		id: 4,
		name: "Emily Johnson",
		age: 27,
		location: "Miami",
		imageUrl:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
	},
	{
		id: 5,
		name: "Michael Brown",
		age: 31,
		location: "Houston",
		imageUrl:
			"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 6,
		name: "Sophia Martinez",
		age: 29,
		location: "San Francisco",
		imageUrl:
			"https://images.unsplash.com/photo-1551798507-629020c81463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHVzZXIlMjByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
	},
	{
		id: 7,
		name: "Daniel Wilson",
		age: 33,
		location: "Seattle",
		imageUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
	},
	{
		id: 8,
		name: "Olivia Taylor",
		age: 26,
		location: "Boston",
		imageUrl:
			"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
	},
	{
		id: 9,
		name: "William Thomas",
		age: 29,
		location: "Austin",
		imageUrl:
			"https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
	},
	{
		id: 10,
		name: "Emma Brown",
		age: 32,
		location: "Dallas",
		imageUrl:
			"https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
	},
];

const MatchesScreen = ({ navigation }) => {
	const [isLoading, setisLoading] = useState(false);
	const [matches, setmatches] = useState([]);

	const handlePress = (id) => {
		// Implement logic to connect with the user
		navigation.navigate("ProfileDetails", { id });
		console.log("Connect with user:", id);
	};

	useEffect(() => {
		async function run() {
			try {
				setisLoading(true);
				const d = await userAPIS.getMatches();

				setmatches(
					d.map((v) => ({
						...v,
						location: v.city,
						imageUrl:
							"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					}))
				);
			} catch (error) {
				setmatches(matchesData);
				console.log(error);
			} finally {
				setisLoading(false);
			}
		}

		run();
	}, []);

	console.log(matches);

	return (
		<View style={styles.container}>
			{isLoading ? <Text style={styles.heading}>Loading...</Text> : ""}
			<ScrollView
				style={styles.cardContainer}
				horizontal
				showsHorizontalScrollIndicator={false}>
				{matches.map((match) => (
					<ProfileCard
						key={match.id}
						id={match.id}
						name={match.name}
						age={match.age}
						location={match.location}
						imageUrl={match.imageUrl}
						onPress={() => handlePress(match.id)}
						navigation={navigation}
					/>
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		padding: 20,
	},
	heading: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#C41941",
		marginVertical: 10,
	},
	cardContainer: {
		paddingVertical: 10,
	},
});

export default MatchesScreen;
