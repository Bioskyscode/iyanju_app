
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Feedbacklist from './components/Feedbacklist'
import FeedbackStat from './components/FeedbackStat'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from "./Pages/AboutPage";
import {FeedbackProvider} from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";
import AdviseSection from "./components/AdviseSection";

function App() {

    return (

        <FeedbackProvider>
        <Router>

            <Header />
            <div className='container'>
                <Routes>
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
            </div>

        </Router>

        </FeedbackProvider>
    )
}

export default App