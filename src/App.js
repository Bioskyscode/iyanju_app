"use client"
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header'
import Feedbacklist from './components/Feedbacklist'
import FeedbackStat from './components/FeedbackStat'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from "./Pages/AboutPage";
import {FeedbackProvider} from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";
import AdviseSection from "./components/AdviseSection";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";


function App() {

    return (

        <FeedbackProvider>
        <Router>

            <Header />
           <Loader />
            <div className='container'>
                <AnimatePresence>
                <Routes >
                    <Route exact path="/" element={
                        <>
                        <AdviseSection />
                        <FeedbackForm />
                        <FeedbackStat />
                        <Feedbacklist />
                        <AboutIconLink />
                        </>
                    }></Route>

                    <Route path="/about" element={<AboutPage />}></Route>
                </Routes>
                </AnimatePresence>
            </div>

        </Router>

        </FeedbackProvider>
    )
}

export default App