
import Box from  '../Jumbotron/Jumbotron';
import Works from '../works/Works';
import Gallery from '../Gallery/Gallery';
import Buy from "../Purchase/Buy";
import Pandemic from '../Pandemic/Pandemic';

function Home(){
  return(
          <div>
             <Box />
             <Works />
             <Gallery />
             <Buy />
             <Pandemic />

          </div>
  )
}
export default Home;

