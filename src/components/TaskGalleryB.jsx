import '../assets/css/taskGalleryB.scss';

const TaskGalleryB = ({ current }) => {
    const { id, title, desc, imgUrl } = current;
    return (
        <div className="bimg">
            <img src={imgUrl} alt={title} />
        </div>
    );
};

export default TaskGalleryB;
