import PropTypes from "prop-types";
import {useRef, useEffect} from 'react';

const BookChanger = ({book,  onUpdate}) => {

    if(book.shelf === undefined){
        console.log("initial shelf value ", book.shelf)
    }
    //to set the selected option in <select>
    const ref = useRef(null);

    useEffect(() => {
        const selectOption = ref.current;
        //console.log("selectOption", selectOption);
        selectOption.value = book.shelf;
      }, []);

    const handleSelection = (e) => {
        book.shelf = e.target.value
        
        
        onUpdate( book, book.shelf)
    }
 
    return (
        <select ref={ref} onChange={handleSelection}>
            <option value="none" disabled>
            Move to...
            </option>
            <option value="currentlyReading">
            Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    )
}

BookChanger.propTypes = {
    book: PropTypes.object.isRequired,
    // shelf: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired,
}
export default BookChanger;