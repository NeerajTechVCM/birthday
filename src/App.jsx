import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import WishPage from "./pages/WishPage";
import CakePage from "./pages/CakePage";

export default function App() {
  const [step, setStep] = useState(0);
  const [profilePic, setProfilePic] = useState(null);

  return (
    <>
      {step === 0 && (
        <LoginPage
          onContinue={(pic) => {
            setProfilePic(pic);
            setStep(1);
          }}
        />
      )}
      {step === 1 && (
        <WishPage
          profilePic={profilePic}
          onContinue={() => setStep(2)}
        />
      )}
      {step === 2 && <CakePage />}
    </>
  );
}
