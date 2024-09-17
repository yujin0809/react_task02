const TaskGalleryS = ({ item, change, current }) => {
    const { id, title, desc, imgUrl } = item;
    return (
        <li onClick={() => change(id)} className={current.id === id ? 'active' : ''}>
            <img src={imgUrl} alt={title} />
        </li>
    );
};

export default TaskGalleryS;
