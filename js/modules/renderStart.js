import getData from "./getData.js";
import renderCards from "./renderCards.js";

const renderStart = () => getData('DB/DB.json').then(data => renderCards(data));

export default renderStart;