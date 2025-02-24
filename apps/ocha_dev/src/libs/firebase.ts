/* eslint-disable turbo/no-undeclared-env-vars */
import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null))
export { analytics }
