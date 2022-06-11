import React, { useEffect, useState } from 'react'
import GivingModal from './GivingModal'

export default function DonateNow() {
  const [givingModal, setGivingModal] = useState(false);

  useEffect(() => {
    let bodyTag = document.getElementsByTagName('body')[0];
    bodyTag.classList.add('donate-now-active');
  }, []);

  const handleClick = (e) => {
    setGivingModal(true);
  };

  return (
    <>
      <button onClick={(e) => handleClick(e)}>
          Donate Now
      </button>
      <GivingModal show={givingModal} />
    </>
  )
}
