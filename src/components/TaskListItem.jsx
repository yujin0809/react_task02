import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

const TaskListItem = ({ item, current, change }) => {
    const { id, title, desc, imgUrl } = item;
    return (
        <li className={current.id === id ? 'on' : ''}>
            <div className="tit" onClick={() => change(id)}>
                <span>{title}</span>
                <p className="ico">{current.id === id ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
            </div>
            <div className="desc">
                <p>{desc}</p>
            </div>
        </li>
    );
};

export default TaskListItem;
