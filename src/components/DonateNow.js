export default function DonateNow() {

  const handleClick = (e) => {
    console.log("Hello!")
  };

  return (
    <button onClick={(e) => handleClick(e)}>
        Donate Now
    </button>
  )
}
