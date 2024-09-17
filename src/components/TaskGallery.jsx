import TaskGalleryB from './TaskGalleryB';
import TaskGalleryS from './TaskGalleryS';

import '../assets/css/taskGallery.scss';

import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const TaskGallery = ({ data, current, setCurrent, next, prev, change }) => {
    const { id, title, desc, imgUrl } = current;

    return (
        <div className="gallery">
            <div className="top">
                <p className="tit">{title}</p>
                <p className="cnt">
                    <span>{current.id}</span> / <span>{data.length}</span>
                </p>
            </div>
            <TaskGalleryB current={current} />
            <ul>
                {data.map((item) => (
                    <TaskGalleryS key={item.id} item={item} current={current} change={change} />
                ))}
            </ul>
            <div className="btns">
                <p className="prev" onClick={() => prev()}>
                    <IoIosArrowBack />
                </p>
                <p className="next" onClick={() => next()}>
                    <IoIosArrowForward />
                </p>
            </div>
        </div>
    );
};

export default TaskGallery;
