// import Header from "./Header/Header";
// import Main from "./Main/Main";
// import { useState } from "react";
// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isClose, setIsClose] = useState(true);

//   const handleOpen = () => {
//     setIsOpen(true);
//   };
//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="App">
//       <Header handleOpen={handleOpen} handleClose={handleClose} />
//       <Main isClose={isClose} isOpen={isOpen} setIsOpen={setIsOpen} setIsClose={setIsClose} handleClose={handleClose} />
//     </div>
//   );
// }

// export default App;
import { useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(true);
  const [cardCreated, setCardCreated] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleCreateCard = () => {
    setCardCreated(true);
    setIsOpen(false);
  };

  return (
    <div className="App">
      <Header handleOpen={handleOpen} handleClose={handleClose} />
      <Main
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsClose={setIsClose}
        handleCreateCard={handleCreateCard}
        cardCreated={cardCreated}
      />
    </div>
  );
}

export default App;
