

const CustomButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick ? onClick : null} className="px-7 py-[11px] rounded-[50px] bg-[#2C49FE] text-white hover:bg-[#01C8FF] duration-300 cursor-pointer">{children}</button>
    )
}
export default CustomButton
