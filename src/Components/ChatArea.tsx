
import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

const ChatArea = () => {
  const [messages, setMessages] = useState<{ text: string; isMe: boolean }[]>([
    { text: "Hey! How are you?", isMe: false },
    { text: "I'm good! What about you?", isMe: true },
  ]);

  const [newMessage, setNewMessage] = useState<string>("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { text: newMessage, isMe: true }]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-auto w-full">

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-scroll min-h-[530px] mt-3 p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.isMe ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-3 border-t border-gray-200 flex items-center space-x-2 relative">
        {/* Emoji Picker */}
        {showEmojiPicker && (
          <div className="absolute bottom-12 left-4 z-10 bg-white shadow-md rounded-lg">
            <EmojiPicker
              onEmojiClick={(emoji: EmojiClickData) =>
                setNewMessage(newMessage + emoji.emoji)
              }
            />
          </div>
        )}

        {/* Emoji Button */}
        <button
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="text-gray-500 hover:text-gray-700"
        >
          <BsEmojiSmile size={24} />
        </button>

        {/* Input Field */}
        <input
          type="text"
          className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />

        
          <IoMdSend size={24}  onClick={sendMessage} className="text-blue-500"/>
     
      </div>
    </div>
  );
};

export default ChatArea;
