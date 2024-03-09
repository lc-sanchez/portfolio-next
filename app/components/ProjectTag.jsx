export const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected 
    ? "text-white border-indigo-600"
    : "text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
        <button className={`${buttonStyles} 
        rounded-full border-full border-2 
        px-4 py-2 text-lg cursor-pointer font-mono`} 
        onClick={() => onClick(name)}>
            {name}
        </button>
    )
}