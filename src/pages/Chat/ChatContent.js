import React, { useState, useEffect, useRef } from "react";

import chatLogData from "../../lib/ChatLogEx.json";

import Photograph from "../../icons/Solid/photograph.svg";
import Send from "../../icons/Solid/paper-airplane.svg";
import Microphone from "../../icons/Solid/microphone.svg";
import Stop from "../../icons/Solid/stop.svg";
import XMark from "../../icons/Outline/x.svg";
import MessageSent from "./ChatData/MessageSent";
import MessageReceived from "./ChatData/MessageReceived";
import ChatNav from "../../comp/NavBar/ChatNav";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import DragDropImage from "../../comp/InputFields/DragDropImage/DragDropImage";

const ChatContent = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const chatContainerRef = useRef();
  useEffect(() => {
    setChatMessages(chatLogData);
  }, []);
  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chatMessages]);

  const [openPickImage, setOpenPickImage] = useState(false);

  const handleOpenPickImage = () => setOpenPickImage(!openPickImage);

  const [selectedImages, setSelectedImages] = useState([]);

  const handleRemoveImage = (indexToRemove) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  //AUDIO RECORD

  const mimeType = "audio/webm";
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };
  const startRecording = async () => {
    setRecordingStatus("recording");
    //create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { type: mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    //invokes the start method to start the recording process
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };
  const stopRecording = () => {
    setRecordingStatus("inactive");
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setAudioChunks([]);
    };
  };
  return (
    <React.Fragment>
      <div class="flex flex-col h-full w-full bg-transparent px-4 py-6">
        <ChatNav />
        <div class="h-full overflow-hidden py-4" ref={chatContainerRef}>
          <div class="h-full overflow-y-auto">
            <div class="grid grid-cols-12 ">
              {chatMessages.map((message, index) => (
                <React.Fragment key={index}>
                  {message.sender === "user" ? (
                    <MessageSent content={message.text} />
                  ) : (
                    <MessageReceived content={message.text} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        {audio ? (
          //This is just example.. the audio will be sent as message directly
          <div >
            <audio src={audio} controls className="bg-card rounded-md m-2"></audio>
            {/* <a download href={audio}>
              Download Recording
            </a> */}
          </div>
        ) : null}
        <div class="flex flex-row items-center">
          <div class="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
            {!permission ? (
              <button onClick={getMicrophonePermission} type="button" class="flex items-center justify-center h-10 w-10 text-gray-400 ml-1">
                <img src={Microphone} />
              </button>
            ) : permission && recordingStatus === "inactive" ? (
              <button
                onClick={startRecording}
                class="flex items-center justify-center h-10 w-10 text-gray-400 ml-1"
              >
                <img src={Microphone} />
              </button>
            ) : recordingStatus === "recording" ? (
              <button
                onClick={stopRecording}
                class="flex items-center justify-center h-10 w-10 text-gray-400 ml-1"
              >
                <img src={Stop} />
              </button>
            ) : null}

            <div class="w-full">
              <input
                type="text"
                class="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center bg-transparent text-primary"
                placeholder="Type your message...."
              />
            </div>
            <div class="flex flex-row">
              <button
                onClick={handleOpenPickImage}
                class="flex items-center justify-center h-10 w-8 text-gray-400 ml-1 mr-2"
              >
                <img src={Photograph} />
              </button>
              <Dialog
                open={openPickImage}
                handler={handleOpenPickImage}
                className="bg-bg"
              >
                <DialogHeader>
                  <Typography variant="h5" className="text-primary">
                    Pick images for your post
                  </Typography>
                </DialogHeader>
                <DialogBody divider className="grid place-items-center gap-4">
                  <DragDropImage onImagesChange={setSelectedImages} />
                  <div className="w-full">
                    <Typography color="white" variant="p">
                      Your Picks
                    </Typography>
                    <div className="flex gap-1">
                      {selectedImages.map((image, index) => (
                        <div className="relative">
                          <img
                            src={XMark}
                            className="absolute right-0 bg-hover rounded-full cursor-pointer"
                            onClick={() => handleRemoveImage(index)}
                          />
                          <img
                            key={index}
                            src={image}
                            alt={`Selected Image ${index}`}
                            className="mb-2 rounded-lg w-full h-14 object-cover"
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogBody>
                <DialogFooter className="space-x-2">
                  <Button
                    variant="gradient"
                    onClick={handleOpenPickImage}
                    color="blue"
                  >
                    Submit
                  </Button>
                </DialogFooter>
              </Dialog>
            </div>
          </div>
          <div class="ml-6">
            <button class="flex items-center justify-center h-10 w-10 rounded-full bg-card hover:bg-hover">
              <img src={Send} />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatContent;
