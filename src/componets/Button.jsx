//first button
export default function FirstButton(onClick,children )
{
  return(
    <button
    className=""
    onClick={onClick}
    > 
        {children}
    </button>
  )
}