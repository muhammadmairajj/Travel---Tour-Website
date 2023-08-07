import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import BackgroundImage from '../BackgroundImage'
import Destination from '../Destination/Destination'
// import RecentTrip from '../RecentTrip'

const Home = () => {
  return (
    <>
        <Navbar />
        <BackgroundImage 
        cName='hero'
        heroImg="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        heroTitle = "Let's Enjoy The Trip"
        heroText = "Choose Your Favorite Destination"
        buttonText="Travel Plan"
        buttonClass="show"
        url="/"
        />
      <Destination />
      {/* <RecentTrip /> */}
      <Footer />
    </>
  )
}

export default Home