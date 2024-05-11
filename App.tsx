/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, FlatList } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import AppHeader from './app/ui/components/AppHeader';
import { Section } from './app/model/section';
import ToBuyNode from './app/ui/components/ToBuyNode';

export default function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	const [sections, setSection] = useState([
		new Section({ key: '1', name: 'Peteca' }),
		new Section({ key: '2', name: 'Bolinha' })
	]);

	const [completedSections, setCompletedSections] = useState([
		new Section({ key: '3', name: 'Raquete', isCompleted: true })
	]);

	const markAsComplete = (key: string) => {
		const item = sections.find(s => s.key == key);
		setCompletedSections((allSections) => {
			allSections.push(item);
			item.isCompleted = true;
			return allSections;
		});
		setSection((allItems) => {
			return allItems.filter(s => s.key != key);
		})
	};

	const markAsUncomplete = (key: string) => {
		const item = completedSections.find(s => s.key == key);
		setSection((allSections) => {
			allSections.push(item);
			item.isCompleted = false;
			return allSections;
		});
		setCompletedSections((allItems) => {
			return allItems.filter(s => s.key != key);
		})
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				backgroundColor={backgroundStyle.backgroundColor}>
			</StatusBar>
			<AppHeader />
			<View className="py-2 px-4 mt-2">
				<Text className="text-bold text-xl">Lista do dia {new Date().getDate()}/{new Date().getMonth()}</Text>
			</View>
			{/* <ScrollView contentInsetAdjustmentBehavior="automatic"
				style={backgroundStyle}> */}
			<View className='px-10 py-5 bg-white'>
				<FlatList data={sections}
					renderItem={({ item }) => (
						<ToBuyNode item={item}
							onComplete={markAsComplete}></ToBuyNode>
					)}
				/>
			</View>
			<View className='px-10 py-5 bg-green-100 flex gap-2'>
				<Text className="font-medium text-lg">Completados</Text>
				<FlatList data={completedSections}
					renderItem={({ item }) => (
						<View className="opacity-60">
							<ToBuyNode item={item}
								onComplete={markAsUncomplete}></ToBuyNode>
						</View>
					)}
				/>
			</View>
			{/* </ScrollView> */}
		</SafeAreaView>
	);
}
