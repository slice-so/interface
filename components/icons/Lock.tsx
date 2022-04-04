const Lock = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d={`M7 11V7a5 5 0 0 1 ${props.isUnlocked ? "9.9-1" : "10 0v4"}`}></path></svg>
  )
}

export default Lock