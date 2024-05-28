/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, useColorScheme, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppHeader from './app/ui/components/AppHeader';
import { Section } from './app/model/section';
import ToBuyNode from './app/ui/components/ToBuyNode';
import Footer from './app/ui/components/Footer';

export default function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	const [sections, setSection] = useState([
		new Section({ key: '1', name: 'Peteca1' }),
		new Section({ key: '3', name: 'Peteca2' }),
		new Section({ key: '4', name: 'Peteca3' }),
		new Section({ key: '5', name: 'Peteca4' }),
		new Section({ key: '6', name: 'Peteca5' }),
		new Section({ key: '7', name: 'Peteca6' }),
		new Section({ key: '8', name: 'Peteca7' }),
		new Section({ key: '2', name: 'Bolinha' })
	]);

	const [completedSections, setCompletedSections] = useState([
		new Section({ key: '9', name: 'Raquete', isCompleted: true })
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
		<TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
			<SafeAreaView style={backgroundStyle} className='h-full'>
				<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
					backgroundColor={backgroundStyle.backgroundColor}>
				</StatusBar>
				<AppHeader />
				<View className='text-gray-500 100vh'>
					<View className="py-2 px-4 mt-2 flex flex-row justify-between">
						<Text className="text-xl">Lista do dia {new Date().getDate()}/{new Date().getMonth()}</Text>
						<Text className="font-bold text-xl">{completedSections.length}/{completedSections.length + sections.length}</Text>
					</View>
					<View>
						<View className='py-5 bg-white'>
							<FlatList data={sections}
								renderItem={({ item }) => (
									<View className='px-10'>
										<ToBuyNode item={item}
											onComplete={markAsComplete}></ToBuyNode>
									</View>
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
					</View>
				</View>
				<Footer></Footer>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
}
