//import Painting from "./components/Painting";
import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';

export default function App () {

	return (
	<div>
    
		{/* < PaintingList items={paintings} /> */}
    
    < Section title="Топ недели" >
		  < PaintingList items={paintings} />
		</Section>
		< Section />

	</div>
	);
}

