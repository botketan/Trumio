import { Button, Modal } from "@heathmont/moon-core-tw";
import { FilesCase, ChatChat } from "@heathmont/moon-icons-tw";
import {useState} from "react";
import AvailableSessions from "../BookSession/AvailableSessions";

const MentorCard = ({ cardData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
//   const clickHandler = () => {
//     console.log("clicked");
//   };
  return (
    <div
      className="flex-1 max-w-[250px] min-w-[220px] p-2 rounded-xl border border-neutral-200 shadow-lg overflow-hidden hover:cursor-pointer"
      onClick={openModal}
    >
      <div className="flex justify-center">
        <img src={cardData.icon} className="rounded-lg h-56 w-full" alt="" />
      </div>
      <div className="Card-content flex flex-col gap-1 p-2">
        <h3 className="text-moon-16 font-medium transition-colors">
          <span>{cardData.name}</span>
          <span className="opacity-75 text-xs ml-1">{cardData.country}</span>
        </h3>
        <span className="text text-cyan-950 font-medium text-sm flex justify-start items-center gap-1">
          <FilesCase className="otherFrame text-moon-20" />
          <h3 className="text-gray-600 text-xs">
            {cardData.role} at {cardData.company}
          </h3>
        </span>
        <span className="text text-cyan-950 font-medium text-sm flex justify-start items-center gap-1">
          <ChatChat className="text-moon-20" />
          <h3 className="text-gray-500 text-xs">
            {cardData.noOfSessions + " sessions"}{" "}
            {"(" + cardData.reviews + " reviews)"}
          </h3>
        </span>
      </div>
      <div className="rounded-xl flex justify-between w-full mt-3">
        <div className="flex flex-col py-3 px-4 bg-gray-100 items-start rounded-lg">
          <h4 className="cc text-#A9A9A9 font-medium opacity-50 text-moon-10">
            Experience
          </h4>
          <h3 className="font-bold text-xs opacity-60">
            {cardData.experience} years
          </h3>
        </div>
        <div className="flex flex-col py-3 px-4 bg-gray-100 items-start rounded-lg">
          <h4 className="text-#A9A9A9 font-medium opacity-50 text-moon-10">
            Avg. Attendance
          </h4>
          <h3 className="font-bold text-xs opacity-60">
            {cardData.avgAttendance}%
          </h3>
        </div>
      </div>
      <Modal open={isOpen} onClose={closeModal}>
        <Modal.Backdrop />
        <Modal.Panel className="bg-white">
          <AvailableSessions availability={cardData.availability} closeModal={closeModal} />
        </Modal.Panel>
      </Modal>
    </div>
  );
};

export default MentorCard;
