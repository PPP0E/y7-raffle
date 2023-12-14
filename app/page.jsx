"use client";

import Image from "next/image";
import { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import Confetti from "react-confetti";
import useWindowDimensions from "@/lib/window-size";
import { Spinner } from "@nextui-org/react";

export default function Home() {
	const studentsList = [
		{ name: "Steleana Anastasiou", reg: "7 Black", selected: false, uid: 1 },
		{ name: "Natalia Andreou", reg: "7 Black", selected: false, uid: 2 },
		{ name: "Marilia Antoniou", reg: "7 Black", selected: false, uid: 3 },
		{ name: "Philemon Antoniou", reg: "7 Black", selected: false, uid: 4 },
		{ name: "Stavros Avraamides", reg: "7 Black", selected: false, uid: 5 },
		{ name: "Kaiyane Chouldjian", reg: "7 Black", selected: false, uid: 6 },
		{ name: "Markos Christoforou", reg: "7 Black", selected: false, uid: 7 },
		{ name: "Nepheli Christoforou", reg: "7 Black", selected: false, uid: 8 },
		{ name: "Panayiotis Alexandros Constantinides", reg: "7 Black", selected: false, uid: 9 },
		{ name: "Hongyu Dai", reg: "7 Black", selected: false, uid: 10 },
		{ name: "Ali Gendj", reg: "7 Black", selected: false, uid: 11 },
		{ name: "Haffe Izci", reg: "7 Black", selected: false, uid: 12 },
		{ name: "Antreana Kaplani", reg: "7 Black", selected: false, uid: 13 },
		{ name: "Nikolas Kaplanis", reg: "7 Black", selected: false, uid: 14 },
		{ name: "Sesil Kayim", reg: "7 Black", selected: false, uid: 15 },
		{ name: "Andreas Kelesis", reg: "7 Black", selected: false, uid: 16 },
		{ name: "Asiana Koutsokoumni", reg: "7 Black", selected: false, uid: 17 },
		{ name: "Kimon Louis", reg: "7 Black", selected: false, uid: 18 },
		{ name: "Lily Makriyianni", reg: "7 Black", selected: false, uid: 19 },
		{ name: "Olivia Mary Mavrides", reg: "7 Black", selected: false, uid: 20 },
		{ name: "Isabel Mouradian", reg: "7 Black", selected: false, uid: 21 },
		{ name: "Alexis Matthias Papaeracleous", reg: "7 Black", selected: false, uid: 22 },
		{ name: "Constantinos Pastellis", reg: "7 Black", selected: false, uid: 23 },
		{ name: "Olivia Polykarpou", reg: "7 Black", selected: false, uid: 24 },
		{ name: "Mari Kristin Portokalli", reg: "7 Black", selected: false, uid: 25 },
		{ name: "Socrates Prodromides", reg: "7 Black", selected: false, uid: 26 },
		{ name: "Aris Taki", reg: "7 Black", selected: false, uid: 27 },
		{ name: "Chaglar Abohorlu", reg: "7 Green", selected: false, uid: 28 },
		{ name: "Nikolas Alexandrou", reg: "7 Green", selected: false, uid: 29 },
		{ name: "Konstantina Antoniadou", reg: "7 Green", selected: false, uid: 30 },
		{ name: "Anupama Ashok", reg: "7 Green", selected: false, uid: 31 },
		{ name: "Anastasia Avraamides", reg: "7 Green", selected: false, uid: 32 },
		{ name: "Theodora Charalambous", reg: "7 Green", selected: false, uid: 33 },
		{ name: "Amalia Basilia Dörflinger", reg: "7 Green", selected: false, uid: 34 },
		{ name: "Andreas Georgiades", reg: "7 Green", selected: false, uid: 35 },
		{ name: "Michel Gabriel Hadjijoseph", reg: "7 Green", selected: false, uid: 36 },
		{ name: "Natasa Ioannou", reg: "7 Green", selected: false, uid: 37 },
		{ name: "Nikte Chigdem Juarez-Ozdemir", reg: "7 Green", selected: false, uid: 38 },
		{ name: "Irini Kannaouridou", reg: "7 Green", selected: false, uid: 39 },
		{ name: "Nikolas Kassianidis", reg: "7 Green", selected: false, uid: 40 },
		{ name: "Youksel Koch", reg: "7 Green", selected: false, uid: 41 },
		{ name: "Georgia Koutsioumpi", reg: "7 Green", selected: false, uid: 42 },
		{ name: "Marianna Lyssiotis", reg: "7 Green", selected: false, uid: 43 },
		{ name: "Dona Nathanael", reg: "7 Green", selected: false, uid: 44 },
		{ name: "Chrystalla Marina Panayide", reg: "7 Green", selected: false, uid: 45 },
		{ name: "Viktoria Elena Papadopoulou", reg: "7 Green", selected: false, uid: 46 },
		{ name: "Constantinos Petrides", reg: "7 Green", selected: false, uid: 47 },
		{ name: "Kyriaki Pifani", reg: "7 Green", selected: false, uid: 48 },
		{ name: "Andreas Savvides", reg: "7 Green", selected: false, uid: 49 },
		{ name: "Fivos Stavridis", reg: "7 Green", selected: false, uid: 50 },
		{ name: "Andreas Themistocleous", reg: "7 Green", selected: false, uid: 51 },
		{ name: "Deniz Toumer", reg: "7 Green", selected: false, uid: 52 },
		{ name: "Sumer Guner Tuzlali", reg: "7 Green", selected: false, uid: 53 },
		{ name: "Georgios Varnavides", reg: "7 Green", selected: false, uid: 54 },
		{ name: "Pavlos Achilleos", reg: "7 Jade", selected: false, uid: 55 },
		{ name: "Andre Agathocleous", reg: "7 Jade", selected: false, uid: 56 },
		{ name: "Phaedra Charalambous", reg: "7 Jade", selected: false, uid: 57 },
		{ name: "Kyriakos Demetriou", reg: "7 Jade", selected: false, uid: 58 },
		{ name: "Denise Droussiotou", reg: "7 Jade", selected: false, uid: 59 },
		{ name: "Thelma Droussiotou", reg: "7 Jade", selected: false, uid: 60 },
		{ name: "Olivia Eliadou", reg: "7 Jade", selected: false, uid: 61 },
		{ name: "Constantinos Christos Eracleous", reg: "7 Jade", selected: false, uid: 62 },
		{ name: "Andreas Marios Georgakis", reg: "7 Jade", selected: false, uid: 63 },
		{ name: "Natalia Alkistis Georgiades", reg: "7 Jade", selected: false, uid: 64 },
		{ name: "Panayiotis Ghalanos", reg: "7 Jade", selected: false, uid: 65 },
		{ name: "Mikaela Ioannides", reg: "7 Jade", selected: false, uid: 66 },
		{ name: "Zoe Kadis", reg: "7 Jade", selected: false, uid: 67 },
		{ name: "Sophia Karmioti", reg: "7 Jade", selected: false, uid: 68 },
		{ name: "Manos Kourris", reg: "7 Jade", selected: false, uid: 69 },
		{ name: "Harris Marangos", reg: "7 Jade", selected: false, uid: 70 },
		{ name: "Andreas Matsis", reg: "7 Jade", selected: false, uid: 71 },
		{ name: "Ektoras Menelaou", reg: "7 Jade", selected: false, uid: 72 },
		{ name: "Panos Milios", reg: "7 Jade", selected: false, uid: 73 },
		{ name: "Mary Nicolaou", reg: "7 Jade", selected: false, uid: 74 },
		{ name: "Sotiris Papalambrianou", reg: "7 Jade", selected: false, uid: 75 },
		{ name: "Marios Pastides", reg: "7 Jade", selected: false, uid: 76 },
		{ name: "Kyriakos Skordis", reg: "7 Jade", selected: false, uid: 77 },
		{ name: "Marisa Troullidou", reg: "7 Jade", selected: false, uid: 78 },
		{ name: "Maria Anna Tsouka", reg: "7 Jade", selected: false, uid: 79 },
		{ name: "Stefanos Evdokimos Xenophontos", reg: "7 Jade", selected: false, uid: 80 },
		{ name: "Alexandra Adamidou", reg: "7 Red", selected: false, uid: 81 },
		{ name: "Maria Charalambous", reg: "7 Red", selected: false, uid: 82 },
		{ name: "Eleni Charilaou", reg: "7 Red", selected: false, uid: 83 },
		{ name: "Angela Constantinidou", reg: "7 Red", selected: false, uid: 84 },
		{ name: "Anna Diakou", reg: "7 Red", selected: false, uid: 85 },
		{ name: "Christos Economides", reg: "7 Red", selected: false, uid: 86 },
		{ name: "Andriana Eliadou", reg: "7 Red", selected: false, uid: 87 },
		{ name: "Iraklis Giorgallis", reg: "7 Red", selected: false, uid: 88 },
		{ name: "Guangmei He", reg: "7 Red", selected: false, uid: 89 },
		{ name: "Loukas Iatrou", reg: "7 Red", selected: false, uid: 90 },
		{ name: "Antreas Ierotheou", reg: "7 Red", selected: false, uid: 91 },
		{ name: "Natalia Mavrogeni", reg: "7 Red", selected: false, uid: 92 },
		{ name: "Tatiana Papadopoulou", reg: "7 Red", selected: false, uid: 93 },
		{ name: "Valeria Artemis Patsalidou", reg: "7 Red", selected: false, uid: 94 },
		{ name: "Georgia Procopiou", reg: "7 Red", selected: false, uid: 95 },
		{ name: "Tianyu Qi", reg: "7 Red", selected: false, uid: 96 },
		{ name: "Georgios Shiakallis", reg: "7 Red", selected: false, uid: 97 },
		{ name: "Antrea Themistokleous", reg: "7 Red", selected: false, uid: 98 },
		{ name: "Georgios Alexander Tornaritis", reg: "7 Red", selected: false, uid: 99 },
		{ name: "Julius Vassiliades", reg: "7 Red", selected: false, uid: 100 },
		{ name: "Volodymyr Vasylyshyn", reg: "7 Red", selected: false, uid: 101 },
		{ name: "Elina Zavitsanaki", reg: "7 Red", selected: false, uid: 102 },
		{ name: "Michail Zevlaris", reg: "7 Red", selected: false, uid: 103 },
		{ name: "Xinyao Zhong", reg: "7 Red", selected: false, uid: 104 },
		{ name: "Marilia Americanou", reg: "7 White", selected: false, uid: 105 },
		{ name: "Marinos Antoniou", reg: "7 White", selected: false, uid: 106 },
		{ name: "Olivia Athinodorou", reg: "7 White", selected: false, uid: 107 },
		{ name: "Simay Berberoglu", reg: "7 White", selected: false, uid: 108 },
		{ name: "Savvas Damalis", reg: "7 White", selected: false, uid: 109 },
		{ name: "Melissa Efthymiou", reg: "7 White", selected: false, uid: 110 },
		{ name: "Nikoleta Fani Efthyvoulou", reg: "7 White", selected: false, uid: 111 },
		{ name: "Panayiotis Fatta", reg: "7 White", selected: false, uid: 112 },
		{ name: "Yianni Christopher Fellas", reg: "7 White", selected: false, uid: 113 },
		{ name: "Marianna Houtri", reg: "7 White", selected: false, uid: 114 },
		{ name: "Georgia Karatsi", reg: "7 White", selected: false, uid: 115 },
		{ name: "Marios Kiteou", reg: "7 White", selected: false, uid: 116 },
		{ name: "Michail Koumenidis", reg: "7 White", selected: false, uid: 117 },
		{ name: "Giorgos Kyprianou", reg: "7 White", selected: false, uid: 118 },
		{ name: "Alexandros Liassides", reg: "7 White", selected: false, uid: 119 },
		{ name: "Joanna Makriyianni", reg: "7 White", selected: false, uid: 120 },
		{ name: "Christina Markidou", reg: "7 White", selected: false, uid: 121 },
		{ name: "Irene Daphne Neophytou", reg: "7 White", selected: false, uid: 122 },
		{ name: "Ioanna Pachita", reg: "7 White", selected: false, uid: 123 },
		{ name: "Giorgos Polycarpou", reg: "7 White", selected: false, uid: 124 },
		{ name: "Kyriacos Rouvas", reg: "7 White", selected: false, uid: 125 },
		{ name: "Alekos Stamatis", reg: "7 White", selected: false, uid: 126 },
		{ name: "Ozkan Tashchioglu", reg: "7 White", selected: false, uid: 127 },
		{ name: "Natalia Ismini Tsinontide", reg: "7 White", selected: false, uid: 128 },
		{ name: "Theodora Zervou", reg: "7 White", selected: false, uid: 129 },
		{ name: "Evelina Agroti", reg: "7 Yellow", selected: false, uid: 130 },
		{ name: "Kleanthis Antoniades", reg: "7 Yellow", selected: false, uid: 131 },
		{ name: "Liana Antoniadou", reg: "7 Yellow", selected: false, uid: 132 },
		{ name: "Xenia Hadjikoumi", reg: "7 Yellow", selected: false, uid: 133 },
		{ name: "Ioannis Hadjipanayiotou", reg: "7 Yellow", selected: false, uid: 134 },
		{ name: "Alexandros Ioannou", reg: "7 Yellow", selected: false, uid: 135 },
		{ name: "Stephanos Ioannou", reg: "7 Yellow", selected: false, uid: 136 },
		{ name: "Hara Maria Kourtella", reg: "7 Yellow", selected: false, uid: 137 },
		{ name: "Lida Livadha", reg: "7 Yellow", selected: false, uid: 138 },
		{ name: "Fivos Loucaides", reg: "7 Yellow", selected: false, uid: 139 },
		{ name: "Andreas Marangos", reg: "7 Yellow", selected: false, uid: 140 },
		{ name: "Louissa Maria Maroudia", reg: "7 Yellow", selected: false, uid: 141 },
		{ name: "Berzan Ozejder", reg: "7 Yellow", selected: false, uid: 142 },
		{ name: "Ioannis Panayides", reg: "7 Yellow", selected: false, uid: 143 },
		{ name: "Charalambos Pantelides", reg: "7 Yellow", selected: false, uid: 144 },
		{ name: "Marios Papaprodromou", reg: "7 Yellow", selected: false, uid: 145 },
		{ name: "Evi Petrou", reg: "7 Yellow", selected: false, uid: 146 },
		{ name: "Maria Petsa", reg: "7 Yellow", selected: false, uid: 147 },
		{ name: "Michalis Pieris", reg: "7 Yellow", selected: false, uid: 148 },
		{ name: "Maria Salame", reg: "7 Yellow", selected: false, uid: 149 },
		{ name: "Naz Shenoglu", reg: "7 Yellow", selected: false, uid: 150 },
		{ name: "Alkistis Xanthi", reg: "7 Yellow", selected: false, uid: 151 },
		{ name: "Miltiadis Angelos Zacharopoulos", reg: "7 Yellow", selected: false, uid: 152 },
		{ name: "Stephanie Argyrou", reg: "7 Yellow", selected: false, uid: 153 },
	];
	const [students, setStudents] = useState(studentsList);
	const [addWinnerInput, setAddWinnerInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [showConfetti, setShowConfetti] = useState(false);
	const { width, height } = useWindowDimensions();
	const [latestName, setLatestName] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [showSpinner, setShowSpinner] = useState(false);

	function removeWinner(uid) {
		setShowConfetti(false);
		setStudents(
			students.map((student) => {
				if (student.uid === uid) {
					student.selected = false;
				}
				return student;
			})
		);
	}

	function addWinner() {
		if (!addWinnerInput) return;
		setShowConfetti(false);
		if (addWinnerInput.includes(",")) {
			addWinnerInput.split(",").forEach((uid) => {
				if (uid) {
					setStudents(
						students.map((student) => {
							if (student.uid === parseInt(uid)) {
								student.selected = true;
							}
							return student;
						})
					);
				}
			});
			setAddWinnerInput("");
			return;
		}
		setStudents(
			students.map((student) => {
				if (student.uid === parseInt(addWinnerInput)) {
					student.selected = true;
				}
				return student;
			})
		);
		setAddWinnerInput("");
	}

	function removeAllWinners() {
		setShowConfetti(false);
		setShowModal(false);
		setStudents(
			students.map((student) => {
				student.selected = false;
				return student;
			})
		);
	}

	function createCommaSeparatedWinnerUidString() {
		let string = "";
		students.forEach((student) => {
			if (student.selected) {
				string += student.uid + ",";
			}
		});
		navigator.clipboard.writeText(string.slice(0, -1));
	}

	async function drawNewName() {
		setIsLoading(true);
		setShowModal(false);
		await new Promise((resolve) => setTimeout(resolve, 3000)); //3000
		const winner = students.filter((student) => !student.selected)[Math.floor(Math.random() * students.filter((student) => !student.selected).length)];
		setStudents(
			students.map((student) => {
				if (student.uid === winner.uid) {
					student.selected = true;
				}
				setLatestName(winner.uid);
				return student;
			})
		);
		setShowModal(true);
		setShowConfetti(true);
		setIsLoading(false);
		createCommaSeparatedWinnerUidString();
		await new Promise((resolve) => setTimeout(resolve, 7000)); //7000
		setShowConfetti(false);
	}

	return (
		<main className="flex min-h-screen max-w-[1248px] mx-auto flex-row items-center justify-between">
			{showConfetti && width && height && <Confetti width={width} height={height} />}
			<div className="z-10 w-[30%] h-screen flex flex-col items-center gap-2 font-mono text-sm lg:flex">
				<div className="p-4 gap-2 overflow-y-scroll h-full w-full flex flex-col">
					<div className="flex-row rounded-xl flex gap-2">
						<div>
							<p className="text-lg  my-auto mr-auto ml-2">Winners</p>
							<p className="my-auto mr-auto ml-2 text-xs">
								{students.filter((student) => student.selected).length}/{students.length}
							</p>
						</div>
						{!!students.filter((student) => student.selected).length && (
							<>
								<Button onPress={createCommaSeparatedWinnerUidString} size="sm">
									Copy All
								</Button>
								<Button onPress={removeAllWinners} size="sm">
									Remove All
								</Button>
							</>
						)}
					</div>
					{!students.filter((student) => student.selected).length && <p className="pl-2">No Winners Yet</p>}
					{students
						.filter((student) => student.selected)
						.map((student) => (
							<div key={student.uid} className="bg-gradient-to-b flex flex-col gap-2 text-sm w-full from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border shadow-lg lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
								<span>{student.name}</span>
								<span>
									{student.reg} • ID: {student.uid}
								</span>
								<Button onPress={() => removeWinner(student.uid)}>Remove</Button>
							</div>
						))}
				</div>
				<div onSubmit={(e) => e.preventDefault()} className="flex p-2 gap-2 w-full">
					<Input placeholder="Enter ID to Add" value={addWinnerInput} onChange={(e) => setAddWinnerInput(e.target.value)} className="h-full"></Input>
					<Button isDisabled={students.filter((s) => s.selected).length == students.length} type="submit" onPress={addWinner} className="h-full">
						Add →
					</Button>
				</div>
			</div>
			<div className="z-10 w-[70%] flex flex-col gap-4 h-screen p-4 items-center justify-between font-mono text-sm lg:flex">
				{!showModal && !!students.filter((s) => s.selected).length && <Spinner className="p-12 z-[500000] h-full flex flex-col gap-4 w-full" size="lg" />}
				{showModal && (
					<div className="p-12 z-[500000] h-full flex flex-col gap-4 w-full">
						<p className="text-[20px]">NEW WINNER</p>
						<p className="text-[40px] font-sans">{students.filter((s) => s.uid === latestName)[0].name}</p>
						<p className="text-[20px] font-sans">
							{students.filter((s) => s.uid === latestName)[0].reg} • {students.filter((s) => s.uid === latestName)[0].uid}
						</p>
					</div>
				)}
				<div className="w-full mt-auto bottom-0 p-2 h-[72px]">
					<Button onPress={drawNewName} isDisabled={students.filter((s) => s.selected).length == students.length} isLoading={isLoading} className="w-full h-full mt-auto bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
						Draw New Name
					</Button>
				</div>
			</div>
		</main>
	);
}
