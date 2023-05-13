


import { useState, useEffect } from 'react';
import './Main.css';

function Main({ isClose, isOpen, handleCreateCard, handleClose }) {
    const [cards, setCards] = useState([]);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [time, setTime] = useState('');
    const [photo, setPhoto] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);




    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newCard = {
            name: name,
            subject: subject,
            time: time,
            location: location,
            price: price,
            photo: photo,
        };
        setCards([...cards, newCard]);
        setName('');
        setSubject('');
        setTime('');
        setLocation('');
        setPrice('');
        setPhoto(null);
        handleCreateCard();
    };

    const handleFileChange = (event) => {
        const filename = event.target.files[0].name;
        setPhoto(event.target.files[0]);
        document.getElementById('file-name').textContent = filename;
    };



    const createCards = () => {


        return cards.map((card, index) => {
            const isSelectedCard = selectedCard && selectedCard.name === card.name;
            return (
                <div key={index} className="Card" style={{ display: isSelectedCard ? "none" : "block" }}>
                    {card.photo && (
                        <img src={URL.createObjectURL(card.photo)} alt="Card" />
                    )}
                    <h3 className="card__name">
                        {card.name}
                        <span className="point">.</span>
                    </h3>
                    <div className="cardTextContainer">
                        <p>
                            Subject: <span className="card__text">{card.subject}</span>
                        </p>
                        <p>
                            Time: <span className="card__text">{card.time}</span>
                        </p>
                        <p>
                            Location: <span className="card__text"> {card.location}</span>
                        </p>
                        <p>
                            Price: <span className="card__text"> {card.price}</span>
                        </p>
                        <button
                            className="JoinBtn"
                            onClick={() => setSelectedCard(card)}
                            style={{ display: isSelectedCard ? "none" : "block" }}
                        >
                            Join
                        </button>
                    </div>
                </div>
            );
        });
    };


    const renderSelectedCard = () => {
        if (!selectedCard) {
            return null;
        }

        return (
            <div className="SelectedCard">




                {selectedCard.photo && (

                    <img src={URL.createObjectURL(selectedCard.photo)} alt="Card" className='Image' />

                )}

                <div className="cardsTextContainer">
                    <h3 className="card__name">
                        {selectedCard.name}
                        <span className="point">.</span>
                    </h3>
                    <p>
                        By: <span className="cards__text">Daniel Hitsburg</span>
                    </p>
                    <p>
                        Subject: <span className="cards__text">{selectedCard.subject}</span>
                    </p>
                    <p>
                        Time: <span className="cards__text">{selectedCard.time}</span>
                    </p>
                    <p>
                        Location:{' '}
                        <span className="cards__text">{selectedCard.location}</span>
                    </p>
                    <p>
                        Price: <span className="cards__text">{selectedCard.price}</span>
                    </p>
                    <button className="CloseBtn" onClick={() => setSelectedCard(null)}  >
                        <p className='closeP'>-</p>
                    </button>
                </div>

            </div>
        );
    }

    return (
        <div className="Main">
            {isOpen && (
                <form onSubmit={handleFormSubmit}>
                    <div>

                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className='form__input'
                            placeholder='Type the event name'
                        />
                    </div>
                    <div>

                        <input
                            type="text"
                            id="lastname"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                            className='form__input'
                            placeholder='Type the event subject'
                        />
                    </div>
                    <div>

                        <input
                            type="text"
                            id="age"
                            value={location}
                            onChange={(event) => setLocation(event.target.value)}
                            className='form__input'
                            placeholder='Type the event location'
                        />
                    </div>
                    <div>

                        <input
                            type="text"
                            id="price"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                            className='form__input'
                            placeholder='Type the event price'
                        />
                    </div>
                    <div>

                        <input
                            type="text"
                            id="price"
                            value={time}
                            onChange={(event) => setTime(event.target.value)}
                            className='form__input'
                            placeholder='Type the event  date and time'
                        />
                    </div>
                    <label className='input__file'>
                        {/* <input type="file" id="photo" onChange={handleFileChange} className='photo' /> */}
                        <input type="file" id="photo" onChange={handleFileChange} className='photo' />

                        <p className='input__p'>Selected file: <span id="file-name"></span></p>

                    </label>



                    <button type="submit" onClick={handleClose} className='create'>Create Card</button>
                </form>


            )}
            <div className="CardsContainer">{createCards()}
                {renderSelectedCard()}






            </div>



        </div>
    );
}
export default Main;



