import { getFirestore, doc, setDoc, deleteDoc, getDocs, collection, updateDoc, getDoc } from "firebase/firestore";
import { v4 } from "uuid";

import app from "./firebase.config";

const db = getFirestore(app);

export const getAllImageF = async (type) => {
	try {
		const querySnapshot = await getDocs(collection(db, type));
		return querySnapshot;
	} catch (error) {
		console.log(error);
	}
};

export const getAllCategoriesF = async (type) => {
	try {
		const querySnapshot = await getDocs(collection(db, "Category"));
		return querySnapshot;
	} catch (error) {
		console.log(error);
	}
};

export const getCategory = async (type) => {
	try {
		const categoryRef = doc(db, "Category", type);
		const docSnap = await getDoc(categoryRef);
		return docSnap.data();
	} catch (error) {
		console.log(error);
	}
};

export const getPricing = async () => {
	try {
		const querySnapshot = await getDocs(collection(db, "Pricing"));
		return querySnapshot;
	} catch (error) {
		console.log(error);
	}
};

export const addBooking = async (booking) => {
	const id = v4();
	try {
		const bookingRef = doc(db, "Booking", id);
		await setDoc(bookingRef, { id: id, ...booking });
	} catch (error) {
		console.log(error);
	}
};
