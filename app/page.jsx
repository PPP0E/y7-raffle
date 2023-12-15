"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import Confetti from "react-confetti";
import useWindowDimensions from "@/lib/window-size";
import { Spinner } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";

export default function Home() {
	const studentsList = [
		{ index: 0, name: "Steleana Anastasiou", reg: "7 Black", selected: false, uid: 1 },
		{ index: 0, name: "Natalia Andreou", reg: "7 Black", selected: false, uid: 2 },
		{ index: 0, name: "Marilia Antoniou", reg: "7 Black", selected: false, uid: 3 },
		{ index: 0, name: "Philemon Antoniou", reg: "7 Black", selected: false, uid: 4 },
		{ index: 0, name: "Stavros Avraamides", reg: "7 Black", selected: false, uid: 5 },
		{ index: 0, name: "Kaiyane Chouldjian", reg: "7 Black", selected: false, uid: 6 },
		{ index: 0, name: "Markos Christoforou", reg: "7 Black", selected: false, uid: 7 },
		{ index: 0, name: "Nepheli Christoforou", reg: "7 Black", selected: false, uid: 8 },
		{ index: 0, name: "Panayiotis Alexandros Constantinides", reg: "7 Black", selected: false, uid: 9 },
		{ index: 0, name: "Hongyu Dai", reg: "7 Black", selected: false, uid: 10 },
		{ index: 0, name: "Ali Gendj", reg: "7 Black", selected: false, uid: 11 },
		{ index: 0, name: "Haffe Izci", reg: "7 Black", selected: false, uid: 12 },
		{ index: 0, name: "Antreana Kaplani", reg: "7 Black", selected: false, uid: 13 },
		{ index: 0, name: "Nikolas Kaplanis", reg: "7 Black", selected: false, uid: 14 },
		{ index: 0, name: "Sesil Kayim", reg: "7 Black", selected: false, uid: 15 },
		{ index: 0, name: "Andreas Kelesis", reg: "7 Black", selected: false, uid: 16 },
		{ index: 0, name: "Asiana Koutsokoumni", reg: "7 Black", selected: false, uid: 17 },
		{ index: 0, name: "Kimon Louis", reg: "7 Black", selected: false, uid: 18 },
		{ index: 0, name: "Lily Makriyianni", reg: "7 Black", selected: false, uid: 19 },
		{ index: 0, name: "Olivia Mary Mavrides", reg: "7 Black", selected: false, uid: 20 },
		{ index: 0, name: "Isabel Mouradian", reg: "7 Black", selected: false, uid: 21 },
		{ index: 0, name: "Alexis Matthias Papaeracleous", reg: "7 Black", selected: false, uid: 22 },
		{ index: 0, name: "Constantinos Pastellis", reg: "7 Black", selected: false, uid: 23 },
		{ index: 0, name: "Olivia Polykarpou", reg: "7 Black", selected: false, uid: 24 },
		{ index: 0, name: "Mari Kristin Portokalli", reg: "7 Black", selected: false, uid: 25 },
		{ index: 0, name: "Socrates Prodromides", reg: "7 Black", selected: false, uid: 26 },
		{ index: 0, name: "Aris Taki", reg: "7 Black", selected: false, uid: 27 },
		{ index: 0, name: "Chaglar Abohorlu", reg: "7 Green", selected: false, uid: 28 },
		{ index: 0, name: "Nikolas Alexandrou", reg: "7 Green", selected: false, uid: 29 },
		{ index: 0, name: "Konstantina Antoniadou", reg: "7 Green", selected: false, uid: 30 },
		{ index: 0, name: "Anupama Ashok", reg: "7 Green", selected: false, uid: 31 },
		{ index: 0, name: "Anastasia Avraamides", reg: "7 Green", selected: false, uid: 32 },
		{ index: 0, name: "Theodora Charalambous", reg: "7 Green", selected: false, uid: 33 },
		{ index: 0, name: "Amalia Basilia Dörflinger", reg: "7 Green", selected: false, uid: 34 },
		{ index: 0, name: "Andreas Georgiades", reg: "7 Green", selected: false, uid: 35 },
		{ index: 0, name: "Michel Gabriel Hadjijoseph", reg: "7 Green", selected: false, uid: 36 },
		{ index: 0, name: "Natasa Ioannou", reg: "7 Green", selected: false, uid: 37 },
		{ index: 0, name: "Nikte Chigdem Juarez-Ozdemir", reg: "7 Green", selected: false, uid: 38 },
		{ index: 0, name: "Irini Kannaouridou", reg: "7 Green", selected: false, uid: 39 },
		{ index: 0, name: "Nikolas Kassianidis", reg: "7 Green", selected: false, uid: 40 },
		{ index: 0, name: "Youksel Koch", reg: "7 Green", selected: false, uid: 41 },
		{ index: 0, name: "Georgia Koutsioumpi", reg: "7 Green", selected: false, uid: 42 },
		{ index: 0, name: "Marianna Lyssiotis", reg: "7 Green", selected: false, uid: 43 },
		{ index: 0, name: "Dona Nathanael", reg: "7 Green", selected: false, uid: 44 },
		{ index: 0, name: "Chrystalla Marina Panayide", reg: "7 Green", selected: false, uid: 45 },
		{ index: 0, name: "Viktoria Elena Papadopoulou", reg: "7 Green", selected: false, uid: 46 },
		{ index: 0, name: "Constantinos Petrides", reg: "7 Green", selected: false, uid: 47 },
		{ index: 0, name: "Kyriaki Pifani", reg: "7 Green", selected: false, uid: 48 },
		{ index: 0, name: "Andreas Savvides", reg: "7 Green", selected: false, uid: 49 },
		{ index: 0, name: "Fivos Stavridis", reg: "7 Green", selected: false, uid: 50 },
		{ index: 0, name: "Andreas Themistocleous", reg: "7 Green", selected: false, uid: 51 },
		{ index: 0, name: "Deniz Toumer", reg: "7 Green", selected: false, uid: 52 },
		{ index: 0, name: "Sumer Guner Tuzlali", reg: "7 Green", selected: false, uid: 53 },
		{ index: 0, name: "Georgios Varnavides", reg: "7 Green", selected: false, uid: 54 },
		{ index: 0, name: "Pavlos Achilleos", reg: "7 Jade", selected: false, uid: 55 },
		{ index: 0, name: "Andre Agathocleous", reg: "7 Jade", selected: false, uid: 56 },
		{ index: 0, name: "Phaedra Charalambous", reg: "7 Jade", selected: false, uid: 57 },
		{ index: 0, name: "Kyriakos Demetriou", reg: "7 Jade", selected: false, uid: 58 },
		{ index: 0, name: "Denise Droussiotou", reg: "7 Jade", selected: false, uid: 59 },
		{ index: 0, name: "Thelma Droussiotou", reg: "7 Jade", selected: false, uid: 60 },
		{ index: 0, name: "Olivia Eliadou", reg: "7 Jade", selected: false, uid: 61 },
		{ index: 0, name: "Constantinos Christos Eracleous", reg: "7 Jade", selected: false, uid: 62 },
		{ index: 0, name: "Andreas Marios Georgakis", reg: "7 Jade", selected: false, uid: 63 },
		{ index: 0, name: "Natalia Alkistis Georgiades", reg: "7 Jade", selected: false, uid: 64 },
		{ index: 0, name: "Panayiotis Ghalanos", reg: "7 Jade", selected: false, uid: 65 },
		{ index: 0, name: "Mikaela Ioannides", reg: "7 Jade", selected: false, uid: 66 },
		{ index: 0, name: "Zoe Kadis", reg: "7 Jade", selected: false, uid: 67 },
		{ index: 0, name: "Sophia Karmioti", reg: "7 Jade", selected: false, uid: 68 },
		{ index: 0, name: "Manos Kourris", reg: "7 Jade", selected: false, uid: 69 },
		{ index: 0, name: "Harris Marangos", reg: "7 Jade", selected: false, uid: 70 },
		{ index: 0, name: "Andreas Matsis", reg: "7 Jade", selected: false, uid: 71 },
		{ index: 0, name: "Ektoras Menelaou", reg: "7 Jade", selected: false, uid: 72 },
		{ index: 0, name: "Panos Milios", reg: "7 Jade", selected: false, uid: 73 },
		{ index: 0, name: "Mary Nicolaou", reg: "7 Jade", selected: false, uid: 74 },
		{ index: 0, name: "Sotiris Papalambrianou", reg: "7 Jade", selected: false, uid: 75 },
		{ index: 0, name: "Marios Pastides", reg: "7 Jade", selected: false, uid: 76 },
		{ index: 0, name: "Kyriakos Skordis", reg: "7 Jade", selected: false, uid: 77 },
		{ index: 0, name: "Marisa Troullidou", reg: "7 Jade", selected: false, uid: 78 },
		{ index: 0, name: "Maria Anna Tsouka", reg: "7 Jade", selected: false, uid: 79 },
		{ index: 0, name: "Stefanos Evdokimos Xenophontos", reg: "7 Jade", selected: false, uid: 80 },
		{ index: 0, name: "Alexandra Adamidou", reg: "7 Red", selected: false, uid: 81 },
		{ index: 0, name: "Maria Charalambous", reg: "7 Red", selected: false, uid: 82 },
		{ index: 0, name: "Eleni Charilaou", reg: "7 Red", selected: false, uid: 83 },
		{ index: 0, name: "Angela Constantinidou", reg: "7 Red", selected: false, uid: 84 },
		{ index: 0, name: "Anna Diakou", reg: "7 Red", selected: false, uid: 85 },
		{ index: 0, name: "Christos Economides", reg: "7 Red", selected: false, uid: 86 },
		{ index: 0, name: "Andriana Eliadou", reg: "7 Red", selected: false, uid: 87 },
		{ index: 0, name: "Iraklis Giorgallis", reg: "7 Red", selected: false, uid: 88 },
		{ index: 0, name: "Guangmei He", reg: "7 Red", selected: false, uid: 89 },
		{ index: 0, name: "Loukas Iatrou", reg: "7 Red", selected: false, uid: 90 },
		{ index: 0, name: "Antreas Ierotheou", reg: "7 Red", selected: false, uid: 91 },
		{ index: 0, name: "Natalia Mavrogeni", reg: "7 Red", selected: false, uid: 92 },
		{ index: 0, name: "Tatiana Papadopoulou", reg: "7 Red", selected: false, uid: 93 },
		{ index: 0, name: "Valeria Artemis Patsalidou", reg: "7 Red", selected: false, uid: 94 },
		{ index: 0, name: "Georgia Procopiou", reg: "7 Red", selected: false, uid: 95 },
		{ index: 0, name: "Tianyu Qi", reg: "7 Red", selected: false, uid: 96 },
		{ index: 0, name: "Georgios Shiakallis", reg: "7 Red", selected: false, uid: 97 },
		{ index: 0, name: "Antrea Themistokleous", reg: "7 Red", selected: false, uid: 98 },
		{ index: 0, name: "Georgios Alexander Tornaritis", reg: "7 Red", selected: false, uid: 99 },
		{ index: 0, name: "Julius Vassiliades", reg: "7 Red", selected: false, uid: 100 },
		{ index: 0, name: "Volodymyr Vasylyshyn", reg: "7 Red", selected: false, uid: 101 },
		{ index: 0, name: "Elina Zavitsanaki", reg: "7 Red", selected: false, uid: 102 },
		{ index: 0, name: "Michail Zevlaris", reg: "7 Red", selected: false, uid: 103 },
		{ index: 0, name: "Xinyao Zhong", reg: "7 Red", selected: false, uid: 104 },
		{ index: 0, name: "Marilia Americanou", reg: "7 White", selected: false, uid: 105 },
		{ index: 0, name: "Marinos Antoniou", reg: "7 White", selected: false, uid: 106 },
		{ index: 0, name: "Olivia Athinodorou", reg: "7 White", selected: false, uid: 107 },
		{ index: 0, name: "Simay Berberoglu", reg: "7 White", selected: false, uid: 108 },
		{ index: 0, name: "Savvas Damalis", reg: "7 White", selected: false, uid: 109 },
		{ index: 0, name: "Melissa Efthymiou", reg: "7 White", selected: false, uid: 110 },
		{ index: 0, name: "Nikoleta Fani Efthyvoulou", reg: "7 White", selected: false, uid: 111 },
		{ index: 0, name: "Panayiotis Fatta", reg: "7 White", selected: false, uid: 112 },
		{ index: 0, name: "Yianni Christopher Fellas", reg: "7 White", selected: false, uid: 113 },
		{ index: 0, name: "Marianna Houtri", reg: "7 White", selected: false, uid: 114 },
		{ index: 0, name: "Georgia Karatsi", reg: "7 White", selected: false, uid: 115 },
		{ index: 0, name: "Marios Kiteou", reg: "7 White", selected: false, uid: 116 },
		{ index: 0, name: "Michail Koumenidis", reg: "7 White", selected: false, uid: 117 },
		{ index: 0, name: "Giorgos Kyprianou", reg: "7 White", selected: false, uid: 118 },
		{ index: 0, name: "Alexandros Liassides", reg: "7 White", selected: false, uid: 119 },
		{ index: 0, name: "Joanna Makriyianni", reg: "7 White", selected: false, uid: 120 },
		{ index: 0, name: "Christina Markidou", reg: "7 White", selected: false, uid: 121 },
		{ index: 0, name: "Irene Daphne Neophytou", reg: "7 White", selected: false, uid: 122 },
		{ index: 0, name: "Ioanna Pachita", reg: "7 White", selected: false, uid: 123 },
		{ index: 0, name: "Giorgos Polycarpou", reg: "7 White", selected: false, uid: 124 },
		{ index: 0, name: "Kyriacos Rouvas", reg: "7 White", selected: false, uid: 125 },
		{ index: 0, name: "Alekos Stamatis", reg: "7 White", selected: false, uid: 126 },
		{ index: 0, name: "Ozkan Tashchioglu", reg: "7 White", selected: false, uid: 127 },
		{ index: 0, name: "Natalia Ismini Tsinontide", reg: "7 White", selected: false, uid: 128 },
		{ index: 0, name: "Theodora Zervou", reg: "7 White", selected: false, uid: 129 },
		{ index: 0, name: "Evelina Agroti", reg: "7 Yellow", selected: false, uid: 130 },
		{ index: 0, name: "Kleanthis Antoniades", reg: "7 Yellow", selected: false, uid: 131 },
		{ index: 0, name: "Liana Antoniadou", reg: "7 Yellow", selected: false, uid: 132 },
		{ index: 0, name: "Xenia Hadjikoumi", reg: "7 Yellow", selected: false, uid: 133 },
		{ index: 0, name: "Ioannis Hadjipanayiotou", reg: "7 Yellow", selected: false, uid: 134 },
		{ index: 0, name: "Alexandros Ioannou", reg: "7 Yellow", selected: false, uid: 135 },
		{ index: 0, name: "Stephanos Ioannou", reg: "7 Yellow", selected: false, uid: 136 },
		{ index: 0, name: "Hara Maria Kourtella", reg: "7 Yellow", selected: false, uid: 137 },
		{ index: 0, name: "Lida Livadha", reg: "7 Yellow", selected: false, uid: 138 },
		{ index: 0, name: "Fivos Loucaides", reg: "7 Yellow", selected: false, uid: 139 },
		{ index: 0, name: "Andreas Marangos", reg: "7 Yellow", selected: false, uid: 140 },
		{ index: 0, name: "Louissa Maria Maroudia", reg: "7 Yellow", selected: false, uid: 141 },
		{ index: 0, name: "Berzan Ozejder", reg: "7 Yellow", selected: false, uid: 142 },
		{ index: 0, name: "Ioannis Panayides", reg: "7 Yellow", selected: false, uid: 143 },
		{ index: 0, name: "Charalambos Pantelides", reg: "7 Yellow", selected: false, uid: 144 },
		{ index: 0, name: "Marios Papaprodromou", reg: "7 Yellow", selected: false, uid: 145 },
		{ index: 0, name: "Evi Petrou", reg: "7 Yellow", selected: false, uid: 146 },
		{ index: 0, name: "Maria Petsa", reg: "7 Yellow", selected: false, uid: 147 },
		{ index: 0, name: "Michalis Pieris", reg: "7 Yellow", selected: false, uid: 148 },
		{ index: 0, name: "Maria Salame", reg: "7 Yellow", selected: false, uid: 149 },
		{ index: 0, name: "Naz Shenoglu", reg: "7 Yellow", selected: false, uid: 150 },
		{ index: 0, name: "Alkistis Xanthi", reg: "7 Yellow", selected: false, uid: 151 },
		{ index: 0, name: "Miltiadis Angelos Zacharopoulos", reg: "7 Yellow", selected: false, uid: 152 },
		{ index: 0, name: "Stephanie Argyrou", reg: "7 Yellow", selected: false, uid: 153 },
	];
	const [students, setStudents] = useState(studentsList);
	const [addWinnerInput, setAddWinnerInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [showConfetti, setShowConfetti] = useState(false);
	const { width, height } = useWindowDimensions();
	const [latestName, setLatestName] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [waitTime, setWaitTime] = useState(3000);
	const [confettiTime, setConfettiTime] = useState(7000);
	const [index, setIndex] = useState(1);

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
							if (student.selected) return student;
							if (student.uid === parseInt(uid)) {
								student.index = index;
								student.selected = true;
							}
							return student;
						})
					);
				}
			});
			setIndex(index + 1);
			setAddWinnerInput("");
			return;
		}
		setStudents(
			students.map((student) => {
				if (student.selected) return student;
				if (student.uid === parseInt(addWinnerInput)) {
					student.index = index;
					student.selected = true;
				}
				return student;
			})
		);
		setIndex(index + 1);
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
		setDisabled(true);
		setIsLoading(true);
		setShowModal(false);
		await new Promise((resolve) => setTimeout(resolve, waitTime)); //3000
		const winner = students.filter((student) => !student.selected)[Math.floor(Math.random() * students.filter((student) => !student.selected).length)];
		setStudents(
			students.map((student) => {
				if (student.uid === winner.uid) {
					student.selected = true;
					student.index = index;
				}
				setIndex(index + 1);
				setLatestName(winner.uid);
				return student;
			})
		);
		setShowModal(true);
		setShowConfetti(true);
		setIsLoading(false);
		createCommaSeparatedWinnerUidString();
		await new Promise((resolve) => setTimeout(resolve, confettiTime)); //7000
		setDisabled(false);
		setShowConfetti(false);
	}

	return (
		<main className="flex min-h-screen flex-col">
			{showConfetti && width && height && <Confetti width={width} height={height} />}
			<div className="h-10 max-w-[1248px] w-full mx-auto p-6">
				<h1 className="text-xl">Y7 Raffle</h1>
			</div>
			<div className="flex flex-row max-w-[1248px] w-full h-[70vh] mx-auto">
				<div className="z-10 w-[30%] flex flex-col items-center gap-2 font-mono text-sm lg:flex">
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
							.sort((a, b) => b.index - a.index)
							.map((student) => (
								<div key={student.uid} className="bg-gradient-to-b flex flex-col gap-2 text-sm w-full from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border shadow-lg lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
									<span>
										{student.index} - <strong>{student.name}</strong>
									</span>
									<span>
										{student.reg} • ID: {student.uid}
									</span>
									<Button onPress={() => removeWinner(student.uid)}>Remove</Button>
								</div>
							))}
					</div>
					<div onSubmit={(e) => e.preventDefault()} className="flex p-2 gap-2 w-full"></div>
				</div>
				<div className="z-10 w-[70%] flex flex-col gap-4 items-center justify-between font-mono text-sm lg:flex">
					{!showModal && latestName && !!students.filter((s) => s.selected).length && <Spinner className="p-12 z-[500000] h-full flex flex-col gap-4 w-full" size="lg" />}
					{showModal && (
						<div className="p-12 z-[500000] h-full flex flex-col gap-4 w-full">
							<p className="text-[20px]">NEW WINNER</p>
							<p className="text-[40px] font-sans">{students.filter((s) => s.uid === latestName)[0].name}</p>
							<p className="text-[20px] font-sans">
								{students.filter((s) => s.uid === latestName)[0].reg} • {students.filter((s) => s.uid === latestName)[0].uid}
							</p>
						</div>
					)}
					<div className="w-full mt-auto flex flex-row gap-2 bottom-0 p-2 min-h-[72px] !h-[72px]"></div>
				</div>
			</div>
			<div className="hover:shadow-xl duration-300 grid grid-cols-5 grid-rows-2 z-10 shadow-md bottom-10 bg-gray-200 p-2 m-auto gap-2 w-[1000px] rounded-xl">
				<Input placeholder="Enter ID to Add" value={addWinnerInput} onChange={(e) => setAddWinnerInput(e.target.value)} className="h-full col-span-2"></Input>
				<Button isDisabled={students.filter((s) => s.selected).length == students.length} type="submit" onPress={addWinner} className="h-full col-span-1">
					Add →
				</Button>
				<Select selectedKeys={[waitTime.toString()]} value={waitTime} onChange={(e) => setWaitTime(e.target.value)} label="Wait Time" placeholder="Select Time" className="col-span-1">
					<SelectItem key={"0"} value={0}>
						None
					</SelectItem>
					<SelectItem key={"1000"} value={1000}>
						1 Second
					</SelectItem>
					<SelectItem key={"2000"} value={2000}>
						2 Second
					</SelectItem>
					<SelectItem key={"3000"} value={3000}>
						3 Second
					</SelectItem>
					<SelectItem key={"4000"} value={4000}>
						4 Second
					</SelectItem>
					<SelectItem key={"5000"} value={5000}>
						5 Second
					</SelectItem>
					<SelectItem key={"6000"} value={6000}>
						6 Second
					</SelectItem>
					<SelectItem key={"7000"} value={7000}>
						7 Second
					</SelectItem>
					<SelectItem key={"8000"} value={8000}>
						8 Second
					</SelectItem>
					<SelectItem key={"9000"} value={9000}>
						9 Second
					</SelectItem>
					<SelectItem key={"10000"} value={10000}>
						10 Second
					</SelectItem>
				</Select>
				<Select selectedKeys={[confettiTime.toString()]} value={confettiTime} onChange={(e) => setConfettiTime(e.target.value)} label="Confetti Time" placeholder="Select Time" className="col-span-1">
					<SelectItem key={"0"} value={0}>
						None
					</SelectItem>
					<SelectItem key={"1000"} value={1000}>
						1 Second
					</SelectItem>
					<SelectItem key={"2000"} value={2000}>
						2 Second
					</SelectItem>
					<SelectItem key={"3000"} value={3000}>
						3 Second
					</SelectItem>
					<SelectItem key={"4000"} value={4000}>
						4 Second
					</SelectItem>
					<SelectItem key={"5000"} value={5000}>
						5 Second
					</SelectItem>
					<SelectItem key={"6000"} value={6000}>
						6 Second
					</SelectItem>
					<SelectItem key={"7000"} value={7000}>
						7 Second
					</SelectItem>
					<SelectItem key={"8000"} value={8000}>
						8 Second
					</SelectItem>
					<SelectItem key={"9000"} value={9000}>
						9 Second
					</SelectItem>
					<SelectItem key={"10000"} value={10000}>
						10 Second
					</SelectItem>
				</Select>
				<Button onPress={drawNewName} isDisabled={students.filter((s) => s.selected).length == students.length || disabled} isLoading={isLoading} className="w-full text-white h-full col-span-5 mt-auto bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
					{!disabled ? "Draw New Name" : "Please Wait"}
				</Button>
			</div>
		</main>
	);
}
