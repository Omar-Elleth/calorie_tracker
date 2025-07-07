import { useState } from "react";
import CalorieRecordEdit from "./components/edit/CalorieRecordEdit";
import ListingSection from "./components/CalorieRecordSection/ListingSection";
import Modal from "react-modal";
import styles from "./App.module.css";

const INITIAL_RECORDS = [
  {
    id: 1,
    date: new Date(2025, 5, 25),
    meal: "Breakfast",
    content: "Eggs",
    calories: -340,
  },
  {
    id: 2,
    date: new Date(2025, 5, 26),
    meal: "Lunch",
    content: "Beef",
    calories: 400,
  },
  {
    id: 3,
    date: new Date(2025, 5, 27),
    meal: "Dinner",
    content: "Cheese",
    calories: 500,
  },
  {
    id: 4,
    date: new Date(2025, 5, 28),
    meal: "Snacks",
    content: "Chocolate",
    calories: 600,
  },
];

function App() {
  const [records, setRecords] = useState(INITIAL_RECORDS);
  const [nextID, setNextID] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ModalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: " translate(-50%, -50%)",
      border: "none",
      padding: "0px",
      backgroundColor: "rgb(29 27 51)",
      borderRadius: "10px",
    },
    overlay: {
      backgroundColor: " rgba(0,0,0,0.5)",
    },
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formSubmitHandler = (record) => {
    const formattedRecord = {
      ...record,
      date: new Date(record.date),
      id: nextID,
    };
    setNextID((lastVal) => lastVal + 1);
    setRecords((previousRecord) => [formattedRecord, ...previousRecord]);

    handleCloseModal();
  };

  return (
    <div className="App">
      <h1 className={styles.title}>Calorie Tracker</h1>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Modal"
        style={ModalStyles}
      >
        <CalorieRecordEdit onFormSubmit={formSubmitHandler} onCancel = {handleCloseModal}/>
      </Modal>

      <ListingSection allRecords={records} />
      <button className={styles["open-modal-button"]} onClick={handleOpenModal}>
        Track food
      </button>
    </div>
  );
}

export default App;
