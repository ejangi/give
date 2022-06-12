import React, { useEffect, useState } from 'react'
import GivingModal from './GivingModal'

export default function DonateNow({ modalTitle }) {
  const [givingModal, setGivingModal] = useState(false);

  useEffect(() => {
    let bodyTag = document.getElementsByTagName('body')[0];
    bodyTag.classList.add('donate-now-active');
  }, []);

  function handleClick() {
    setGivingModal(true);
  }

  function handleHideGivingModal() {
    setGivingModal(false);
  }

  return (
    <>
      <button onClick={handleClick}>
          Donate Now
      </button>
      <GivingModal defaultTitle={modalTitle} show={givingModal} hide={handleHideGivingModal} />
    </>
  )
}
